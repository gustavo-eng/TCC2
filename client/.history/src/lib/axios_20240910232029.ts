import axios from "axios";
import { toast } from 'react-toastify';
import { } from 'typescript-cookie';
import { generateHash } from "../utils/encode";
const BASE_URL = "http://localhost:3001";

const CACHE_TIME = 5 * 60 * 1000; // 5 minutes

const cache: {
  [key: string]: {
    data: unknown;
    timestamp: number;
  };
} = {};

export const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  paramsSerializer: {
    indexes: null,
  },
});


instance.interceptors.response.use(
    (response) => {
        const method = response.config.method as string;
        const route = response.config.url as string;
        const statusCode: number = response.status;

        if(response.config.headers["Cache-Control"]?.includes('max-age=')) {
            const cacheKey = generateHash(
                `${response.config.url}_${JSON.stringify(response.config.params)}`,
              );
              cache[cacheKey] = {
                data: response,
                timestamp: Date.now(),
              };
        }
        if(response.status == 200) {
            toast.success('Usuário autenticado com sucesso')
        }
        return response;
    },(error) => {
        const method = error?.config?.method as string;
        const route = error?.config?.url as string;
        const statusCode: number = error?.response?.status as number;
        if(statusCode != 200) {

            //toast.error('Credenciais inválidas')
        }
        console.log('response')
    }
)


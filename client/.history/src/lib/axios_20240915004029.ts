import axios from "axios";
const BASE_URL = "http://localhost:3001";

export function getSession<T>(key: string) {
  const jsonValue = window.sessionStorage.getItem(key);
  if (jsonValue != "undefined" && jsonValue != null) {
    return JSON.parse(jsonValue) as T;
  }
  return null;
}

export function setSession<T>(key: string, value: T) {
  window.sessionStorage.setItem(key, JSON.stringify(value));
}

export function removeSession(key: string) {
  window.sessionStorage.removeItem(key);
}

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

/*
instance.interceptors.request.use(
  (config) => {
    const token = getCookie('authorization');
    if(token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error)
  }
)
*/
/*
//todo Avaliar se precisa
instance.interceptors.response.use(
  (response) => {
    //const method = response.config.method as string;W
    //const route = response.config.url as string;
    //const statusCode: number = response.status;

    if (response.config.headers["Cache-Control"]?.includes("max-age=")) {
      const cacheKey = generateHash(
        `${response.config.url}_${JSON.stringify(response.config.params)}`
      );
      cache[cacheKey] = {
        data: response,
        timestamp: Date.now(),
      };
    }

    if (response.status == 200) {
      //toast.success("Usuário autenticado com sucesso");
      // window.location.href = "/";
      console.log('Requisicao enviada com sucesso')
    }
    return response;
  },
  (error) => {
    const statusCode: number = error?.response?.status as number;
    if (statusCode != 200) {
      //todo avaliar
      //removeCookie("authorization");
      //removeSession("user");
      //setCookie("test", "Erro entrou na rota do axios")
      //window.location.href = "/";
      //Navigate('/')
      //toast.error(`Erro na requisicao. ${statusCode}`, {duration: 4000})
    }
    //toast.error("Error na authenticacao");
    return error;
  }
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getCached = <T = any, R = AxiosResponse<T>, D = any>(
  url: string,
  config?: AxiosRequestConfig<D>
): Promise<R> => {
  const cacheKey = generateHash(`${url}_${JSON.stringify(config?.params)}`);
  const cached = cache[cacheKey];
  const cacheControl = config?.headers?.["Cache-Control"];
  const maxAge = cacheControl?.includes("max-age=")
    ? cacheControl.split("=")[1]
    : false;
  const expireTime = maxAge ? Number(maxAge) : CACHE_TIME;

  if (cached && Date.now() - cached.timestamp < expireTime) {
    return Promise.resolve(cached.data as R);
  }

  if (!config?.headers?.["Cache-Control"]?.includes("max-age=")) {
    config = {
      ...config,
      headers: {
        ...config?.headers,
        "Cache-Control": `max-age=${CACHE_TIME}`,
      },
    };
  }

  return instance.get(url, config);
};

export const clearCache = (): void => {
  Object.keys(cache).forEach((key) => {
    delete cache[key];
  });
};
*/
declare module "axios" {
  interface AxiosInstance {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getCached<T = any>(
      url: string,
      config?: AxiosRequestConfig
    ): Promise<AxiosResponse<T>>;
  }
}

instance.getCached = getCached;

export const api = instance;

import axios from "axios";
import { getCookie } from "typescript-cookie";
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

export const api = instance;


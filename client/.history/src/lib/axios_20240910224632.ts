import axios from "axios";

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



import { AxiosError, AxiosRequestConfig, isAxiosError } from "axios";
import { api } from "../lib/axios";
import { ApiResponseError } from "./types";

const fail = (err: AxiosError<ApiResponseError>) => {
  throw err;
};

export const _post = async (
  path?: string,
  data?: any,
  config?: AxiosRequestConfig
) => {
  try {
    const response = await api.post(path as string, data, config);
    if (isAxiosError(response)) fail(response);
    return response.data;
  } catch (err) {
    fail(err as AxiosError<ApiResponseError>);
  }
};

export const _get = async (path?: string, config?: AxiosRequestConfig) => {
  try {
    const response = await api.get(path as string, config);
    if (isAxiosError(response)) fail(response);
    return response.data;
  } catch (err) {
    fail(err as AxiosError<ApiResponseError>);
  }
};

export const _delete = async (path: string, config?: AxiosRequestConfig) => {
  try {
    const response = await api.delete(path, config);
    if (isAxiosError(response)) fail(response);
    return response.data;
  } catch (err) {
    return fail(err as AxiosError<ApiResponseError>);
  }
};


export const _put = async (
  path:string,
  data: object,
  config ?: AxiosRequestConfig
) => {
  try {
    const response = await api.put(path, data ,config);
    if (isAxiosError(response)) fail(response);
    return response.data;
  }catch(err) {
    return fail(err as AxiosError<ApiResponseError>);
  }
};

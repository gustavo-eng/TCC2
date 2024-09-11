
import { AxiosError, AxiosRequestConfig, isAxiosError } from 'axios';
import { api } from '../lib/axios';
import { ApiResponseError } from './types';



const fail = (err: AxiosError<ApiResponseError>) => {
    throw err;
};

export const _post = async <T>(
    path?: string,
    data?: T,
    config?: AxiosRequestConfig,
) => {
    try {
        const response = await api.post(path as string, data, config);
        if(isAxiosError(response))
    } catch(err) {
        console.log('fasdf')
    }
}
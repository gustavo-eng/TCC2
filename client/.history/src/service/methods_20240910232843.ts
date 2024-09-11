
import { AxiosRequestConfig } from 'axios';
import { api } from '../lib/axios';

export const _post = async <T>(
    path?: string,
    data?: T,
    config?: AxiosRequestConfig,
) => {
    try {
        const response = await api.post(path as string, data, config);
    } catch(err) {
        console.log('fasdf')
    }
}
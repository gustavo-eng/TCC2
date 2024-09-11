
import { AxiosRequestConfig } from 'axios';
import { api } from '../lib/axios';

export const _post = async (
    path?: string,
    data?: any,
    config?: AxiosRequestConfig,
) => {
    try {
        const response = await api.post(path, data, config);
    } catch(err) {
        console.log('fasdf')
    }
}
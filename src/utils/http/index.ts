/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import service, { AxiosRequestConfig } from './axios';
export * from './types';

/**
 封装 Axios 的请求方法，提供常用的 GET、POST、PUT、DELETE 和上传文件等方法
 @param config AxiosRequestConfig - Axios 请求配置对象
 @returns Promise<T> - 返回一个 Promise 对象
 */
export const request = <T = any>(config: AxiosRequestConfig): Promise<T> => {
    return new Promise((resolve, reject) => {
        service
            .request(config)
            .then((res) => {
                // 一些业务处理
                resolve(res.data);
            })
            .catch((err) => {
                console.log(' 请求失败：', err);
            });
    });
};

/**
 封装 Axios 的请求方法，提供常用的 GET、POST、PUT、DELETE 和上传文件等方法
 @param config AxiosRequestConfig - Axios 请求配置对象
 @returns Promise<T> - 请求成功后的数据
 */
const http = {
    /**
     常用的 GET 请求方法
     @param url string - 请求地址
     @param params Object - 请求参数，默认为空对象
     @param config AxiosRequestConfig - Axios 请求配置对象，默认为空对象
     @returns Promise<T> - 请求成功后的数据
     */
    get<T = any>(url: string, params = {}, config?: AxiosRequestConfig): Promise<T> {
        return request({ url, params, ...config, method: 'GET' });
    },
    /**
     * 常用的 POST 请求方法
     * @param url string - 请求地址
     * @param data Object - 请求参数，默认为空对象
     * @param config AxiosRequestConfig - Axios 请求配置对象，默认为空对象
     * @returns Promise<T> - 请求成功后的数据
     */
    post<T = any>(url: string, data = {}, config?: AxiosRequestConfig): Promise<T> {
        return request({ url, data, ...config, method: 'POST' });
    },
    /**
     * 常用的 PUT 请求方法
     * @param url string - 请求地址
     * @param data Object - 请求参数，默认为空对象
     * @param config AxiosRequestConfig - Axios 请求配置对象，默认为空对象
     * @returns Promise<T> - 请求成功后的数据
     */
    put<T = any>(url: string, data = {}, config?: AxiosRequestConfig): Promise<T> {
        return request({ url, data, ...config, method: 'PUT' });
    },
    /**
     * 常用的 DELETE 请求方法
     * @param url string - 请求地址
     * @param data Object - 请求参数，默认为空对象
     * @param config AxiosRequestConfig - Axios 请求配置对象，默认为空对象
     */
    delete<T = any>(url: string, data = {}, config?: AxiosRequestConfig): Promise<T> {
        return request({ url, data, ...config, method: 'DELETE' });
    },
    /**
     * 上传文件
     * @param url string - 请求地址
     * @param data Object - 请求参数，默认为空对象
     * @param config AxiosRequestConfig - Axios 请求配置对象，默认为空对象
     * @returns Promise<T> - 请求成功后的数据
     */
    // 上传文件，指定 'Content-Type': 'multipart/form-data'
    upload<T = any>(url: string, data = {}, config?: AxiosRequestConfig): Promise<T> {
        return request({
            url,
            data,
            ...config,
            method: 'POST',
            headers: { 'Content-Type': 'multipart/form-data' },
        });
    },
};

export default http;

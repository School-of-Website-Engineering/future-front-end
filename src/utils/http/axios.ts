/**
 * @description 封装的axios实例，可用于发起http请求
 * @exports service - axios实例
 */
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import type { Response } from './types';
// import { Toast } from 'vant';
import { ElMessage } from 'element-plus';
import router from '@/router';
// 重设axiosbaseURL
axios.defaults.baseURL = import.meta.env.VITE_APP_API_BASE_URL;
axios.defaults.timeout = 1000 * 10;
axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8';

/**
 * @description 创建axios实例
 */
const service = axios.create({
    // 根据不同env设置不同的baseURL
    baseURL: import.meta.env.VITE_APP_API_BASE_URL,
    responseType: 'json',
    transformResponse: [
        function (data) {
            try {
                data = JSON.parse(data);
            } catch (e) {
                console.log(e);
            }
            return data;
        },
    ],
});

/**
 * @description 请求拦截器
 * @param {AxiosRequestConfig} config - 请求配置
 * @returns {AxiosRequestConfig} - 返回请求配置
 */
service.interceptors.request.use(
    (config: AxiosRequestConfig | any) => {
        config.headers = {
            ...config.headers,
            // ...auth.headers()
            // 自定义headers，如token等
        };
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    },
);

/**
 *@description 错误处理器(ErrorHandler)接口
 * @interface ErrorHandler
 */
interface ErrorHandler {
    handle(response: AxiosResponse<Response>): void;
}

/**
 * @description Token 过期错误处理器
 * @class TokenExpiredErrorHandler
 * @implements {ErrorHandler} 错误处理器接口
 * @param {AxiosResponse<Response>} response - 响应数据
 * @returns {void}
 * @memberof TokenExpiredErrorHandler
 */
class TokenExpiredErrorHandler implements ErrorHandler {
    handle(response: AxiosResponse<Response>) {
        const errMessage = 'Token expired';
        // 跳转至登录页
        // router.push('/login').then((r) => r);
        // 显示错误提示信息
        ElMessage.error(errMessage);
    }
}

/**
 * @description 无权限错误处理器
 * @class NoPermissionErrorHandler
 * @implements {ErrorHandler} 错误处理器接口
 * @param {AxiosResponse<Response>} response - 响应数据
 * @returns {void}
 */
class NoPermissionErrorHandler implements ErrorHandler {
    handle(response: AxiosResponse<Response>) {
        const errMessage = 'No permission';
        // 显示错误提示信息
        ElMessage.error(errMessage);
    }
}

/**
 * @description 默认错误处理器
 * @class DefaultErrorHandler
 * @implements {ErrorHandler} 错误处理器接口
 * @param {AxiosResponse<Response>} response - 响应数据
 * @returns {void}
 */
class DefaultErrorHandler implements ErrorHandler {
    handle(response: AxiosResponse<Response>) {
        const { message } = response.data;
        if (message) ElMessage.error(message);
    }
}

/**
 * @description 错误处理器映射表
 * @type {Record<number, ErrorHandler>}
 */
const errorHandlers: Record<number, ErrorHandler> = {
    404: new DefaultErrorHandler(),
    112: new TokenExpiredErrorHandler(),
    212: new NoPermissionErrorHandler(),
};

/**
 * @description 响应拦截器
 * @param {AxiosResponse<Response<T>>} response - 响应数据
 * @returns {AxiosResponse<Response<T>>>} - 返回响应数据
 */
const handleResponse = <T>(response: AxiosResponse<Response<T>>) => {
    const { code } = response.data;
    if (code !== 0) {
        const errorHandler = errorHandlers[code as number];
        errorHandler?.handle(response);
    }
    return response;
};
const message = (msg: string) => {
    // 默认使用 Element Plus 的 ElMessage.error 方法
    ElMessage.error(msg);
};

// 错误拦截器
const handleError = (error: AxiosError) => {
    message(error.message);
    return Promise.reject(error);
};

// 添加响应拦截器
service.interceptors.response.use(handleResponse, handleError);

export type { AxiosResponse, AxiosRequestConfig };

export default service;

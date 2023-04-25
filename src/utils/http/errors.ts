import { AxiosResponse } from 'axios';
import { Response } from '@/utils/http/types';
import { ElMessage } from 'element-plus';

/**
 *@description 错误处理器(ErrorHandler)接口
 * @interface ErrorHandler
 */ export interface ErrorHandler {
    handle(response: AxiosResponse<Response>): void;
}

/**
 * @description Token 过期错误处理器
 * @class TokenExpiredErrorHandler
 * @implements {ErrorHandler} 错误处理器接口
 * @param {AxiosResponse<Response>} response - 响应数据
 * @returns {void}
 * @memberof TokenExpiredErrorHandler
 */ export class TokenExpiredErrorHandler implements ErrorHandler {
    handle(response: AxiosResponse<Response>) {
        // const errMessage = 'Token expired';
        const errMessage = 'Token 过期';
        // 跳转至登录页
        // router.push('/login-register').then((r) => r);
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
 */ export class NoPermissionErrorHandler implements ErrorHandler {
    handle(response: AxiosResponse<Response>) {
        // const errMessage = 'No permission';
        const errMessage = '无权限';
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
 */ export class DefaultErrorHandler implements ErrorHandler {
    handle(response: AxiosResponse<Response>) {
        const { reason, message } = response.data;
        if (reason) ElMessage.error(reason);
        if (message) ElMessage.error(message);
    }
}

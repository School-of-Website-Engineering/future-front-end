import http, { Response } from '@/utils/http';
import { classAsyncTryCatch } from '@/utils/exceptionHandling';

// 登录接口
export const LOGIN = '/auth/login';
// 获取验证码接口
export const GET_SMS_CODE = '/auth/verify-code';
// 用户退出登录
export const LOGOUT = '/auth/logout';
// 用户注册
export const REGISTER = '/auth/register';

/**
 * 登录响应结果接口定义
 * @interface ILoginResponse
 * @property {string} id 用户id
 * @property {string} username 用户名
 * @property {string} email 用户邮箱
 * @property {string} discriminator 用户标识
 * @property {string} password 用户密码
 * @property {string} createdAt 创建时间
 * @property {string} updatedAt 更新时间
 * @property {string} role 用户角色
 * @property {string} img 用户头像
 * */
export interface ILoginResponse {
    id: string;
    username: string;
    email: string;
    discriminator: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    role: string;
    img: string;
}

/**
 * 登录用户输入接口定义
 * @interface ILoginUserInput
 * @property {string} username 用户名
 * @property {string} userEmail 用户邮箱
 * @property {string} password 用户密码
 * @property {number | undefined | string} smsCode 验证码
 * */
export interface ILoginUserInput {
    username: string;
    userEmail: string;
    password: string;
    smsCode: string;
}

/**
 * 注册用户输入接口定义
 * @interface IRegisterUserInput
 * @property {string} username 用户名
 * @property {string} password 用户密码
 * @property {string} email 用户邮箱
 * @property {string} smsCode 验证码
 * @property {string} role 用户角色
 */
export interface IRegisterUserInput {
    username: string;
    password: string;
    email: string;
    smsCode: string;
    role: string;
}

// 登录 API 接口定义
export interface ILoginApi {
    getLogin(userForm: ILoginUserInput): Promise<Response<ILoginResponse>>;

    getSmsCode(userEmail: string): Promise<Response<ILoginResponse>>;

    getLogout(): Promise<Response<ILoginResponse>>;

    getRegister(userForm: IRegisterUserInput): Promise<Response<ILoginResponse>>;
}

/**
 * 登录 API 接口类，用于获取登录注册数据
 * */
@classAsyncTryCatch
class LoginService implements ILoginApi {
    /**
     * 登录
     * @param userForm.username 用户名
     * @param userForm.password 密码
     * @param userForm.userEmail 用户邮箱
     * @param userForm.smsCode 验证码
     * @returns Promise 对象，解析为类型为 Response<ILoginResponse> 的响应结果
     */
    async getLogin(userForm: ILoginUserInput): Promise<Response<ILoginResponse>> {
        const { username, password, userEmail, smsCode } = userForm;
        return await http.post(LOGIN, {
            username,
            password,
            userEmail,
            smsCode
        });
    }

    /**
     * 获取验证码
     * @param email 用户邮箱
     * @returns Promise 对象，解析为类型为 Response<ILoginResponse> 的响应结果
     */
    async getSmsCode(email: string): Promise<Response<ILoginResponse>> {
        return await http.post(GET_SMS_CODE, {
            email
        });
    }

    /**
     * 退出登录
     * @returns Promise 对象，解析为类型为 Response<ILoginResponse> 的响应结果
     */
    async getLogout(): Promise<Response<ILoginResponse>> {
        return await http.post(LOGOUT);
    }

    /**
     * 注册
     * @param userForm.username 用户名
     * @param userForm.password 密码
     * @param userForm.email 用户邮箱
     * @param userForm.smsCode 验证码
     * @param userForm.role 角色
     * @returns Promise 对象，解析为类型为 Response<ILoginResponse> 的响应结果
     */
    async getRegister(userForm: IRegisterUserInput): Promise<Response<ILoginResponse>> {
        const { username, password, email, smsCode, role } = userForm;
        return await http.post(REGISTER, {
            username,
            password,
            email,
            smsCode,
            role
        });
    }
}

export default new LoginService();

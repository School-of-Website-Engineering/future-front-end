import http, { Response } from '@/utils/http';
import { classAsyncTryCatch } from '@/utils/exceptionHandling';

// 登录接口
export const LOGIN = '/auth/login-register';
// 获取验证码接口
export const GET_SMS_CODE = '/auth/verify-code';

// 登录接口响应结果接口定义
export interface ILoginResponse {
    id: number;
    username: string;
    email: string;
    discriminator: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    role: string;
    img: string;
}

// 登录用户输入接口定义
export interface ILoginUserInput {
    username: string;
    userEmail: string;
    password: string;
    smsCode: number | undefined;
}

// 登录 API 接口定义
export interface ILoginApi {
    getLogin(userForm: ILoginUserInput): Promise<Response<ILoginResponse>>;
    getSmsCode(userEmail: string): Promise<Response<ILoginResponse>>;
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
}

export default new LoginService();

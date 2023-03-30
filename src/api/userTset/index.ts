export const USER_LOGIN = '/api/userTset/login';
import { classAsyncTryCatch } from '@/utils/exceptionHandling';

/**
 * @description 用户登录信息
 * @param {string} token 用户登录token
 * @param {string} username 用户名
 * */
export interface UserState {
    token: string;
    username: string;
}
/**
 * @description 用户登录接口
 * @param {object} userData 用户登录信息
 * @return {Promise} 返回一个Promise
 * */
export interface userLoginApi {
    getUserLogin<Response>(userData: object): Promise<Response>;
}

/**
 * @description 用户登录类
 * @param {object} userData 用户登录信息
 * @return {Promise} 返回一个Promise
 * */
@classAsyncTryCatch
class UserLoginService implements userLoginApi {
    async getUserLogin<Response>(userData: object): Promise<Response> {
        return await http.get<Response>(USER_LOGIN, userData);
    }
}
export default new UserLoginService();

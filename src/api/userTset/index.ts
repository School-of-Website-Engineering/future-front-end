export const USER_LOGIN = '/api/userTset/login';

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
class UserLoginService implements userLoginApi {
    getUserLogin<Response>(userData: object): Promise<Response> {
        return http.post<Response>(USER_LOGIN, userData);
    }
}
export default new UserLoginService();

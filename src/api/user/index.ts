import http, { Response } from '@/utils/http';
import { classAsyncTryCatch } from '@/utils/exceptionHandling';
//查询当前登录用户信息
export const USER_GET_CURRENT_USER = '/user/getCurrentUser';

/**
 *  查询当前登录用户信息响应结果接口定义
 *  @interface IGetCurrentUserResponse
 *  @property {number} id 用户id
 *  @property {string} username 用户名
 *  @property {string} email 邮箱
 *  @property {string} createdAt 创建时间
 *  @property {string} updatedAt 更新时间
 *  @property {string} avatar 头像
 *  @property {string} introduction 个人简介
 *  @property {string} role 角色
 *  @property {string} status 状态
 */
export interface IGetCurrentUserResponse {
    id: number | string;
    username: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    avatar: string;
    introduction: string;
    role: string;
    status: string;
}

/**
 *  用户api接口定义
 *  @interface IUserApi
 */
export interface IUserApi {
    getCurrentUser: () => Promise<Response<{ data: IGetCurrentUserResponse }>>;
}

/**
 * 用户api接口实现
 * @class UserService
 * @implements {IUserApi}
 */
@classAsyncTryCatch
class UserService implements IUserApi {
    /**
     * 查询当前登录用户信息
     * @returns {Promise<Response<{ data:IGetCurrentUserResponse }>>}
     * @memberof UserApi
     */
    public async getCurrentUser(): Promise<Response<{ data: IGetCurrentUserResponse }>> {
        return await http.get(USER_GET_CURRENT_USER);
    }
}

export default new UserService();

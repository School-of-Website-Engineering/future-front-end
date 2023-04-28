import http, { Response } from '@/utils/http';
import { classAsyncTryCatch } from '@/utils/exceptionHandling';
//查询当前登录用户信息
export const USER_GET_CURRENT_USER = '/user/getCurrentUser';
//根据当前好友id，查询共同加入的服务器数量
export const USER_GET_SERVER_COUNT = '/user/getCommonServerCount';

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
 * 查询共同加入的服务器与好友数量响应结果接口定义
 * @interface ICommonServerCountResponse
 * @property {ICommonServerItem[]} commonServer 共同加入的服务器
 * @property {ICommonFriendItem[]} commonFriend 共同好友
 */
//  commonServer: [
//                                 {
//                                     id  : '437456121056741327',
//                                     name: 'gpt',
//                                     icon: 'https://cdn.discordapp.com/icons/974519864045756446/d7ec4ed5884437bae0333aa345a97160.webp?size=160'
//                                 }
//                             ],
//                             commonFriend: [
//                                 {
//                                     id    : '345623411435767900',
//                                     name  : '[ECM]HamSter',
//                                     // 头像
//                                     avatar: 'https://cdn.discordapp.com/avatars/760729927552729119/20167f95c93ef46167737aee7201cb92.webp?size=60'
//                                 },
//                                 {
//                                     id    : '760729927552729119',
//                                     name  : 'liuliu',
//                                     avatar: 'https://cdn.discordapp.com/avatars/1042734257149329418/5ab3131122ac145db5f2edf29e5a7730.webp?size=48'
//                                 }
//                             ]
export interface ICommonServerCountResponse {
    commonServer: ICommonServerItem[];
    commonFriend: ICommonFriendItem[];
}

/**
 * 共同加入的服务器与好友数量响应结果接口定义
 * @interface ICommonServerItem
 * @property {string} id 服务器id
 * @property {string} name 服务器名称
 * @property {string} icon 服务器图标
 */
export interface ICommonServerItem {
    id: string;
    name: string;
    icon: string;
}

/**
 * 共同好友响应结果接口定义
 * @interface ICommonFriendItem
 * @property {string} id 好友id
 * @property {string} name 好友名称
 * @property {string} avatar 好友头像
 */
export interface ICommonFriendItem {
    id: string;
    name: string;
    avatar: string;
}

/**
 *  用户api接口定义
 *  @interface IUserApi
 */
export interface IUserApi {
    getCurrentUser: () => Promise<Response<{ data: IGetCurrentUserResponse }>>;
    getCommonServerCount: (friendId: string) => Promise<
        Response<{
            data: ICommonServerCountResponse;
        }>
    >;
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

    /**
     * 根据当前好友id，查询共同加入的服务器数量
     * @param {number} friendId 好友id
     * @returns {Promise<Response<{ data:ICommonServerCountResponse }>>}
     */
    public async getCommonServerCount(friendId: string): Promise<
        Response<{
            data: ICommonServerCountResponse;
        }>
    > {
        return await http.get(USER_GET_SERVER_COUNT, { friendId });
    }
}

export default new UserService();

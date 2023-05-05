import http, { Response } from '@/utils/http';
import { classAsyncTryCatch } from '@/utils/exceptionHandling';
// 查询好友列表
export const USER_FRIENDS = '/user/friends';
// 查询待定好友列表
export const USER_FRIENDS_PENDING = '/user/friends/pending';
// 用户屏蔽的好友
export const USER_FRIENDS_BLOCKED = '/user/friends/blocked';
// 通过用户id查询用户信息
export const USER_INFO = '/relationships/getFriendByUserId2';
//     根据当前好友id，查询好友的信息
export const USER_INFO_BY_FRIEND_ID = '/user/getFriendInfo';

// 通过用户id添加用户为好友

/**
 * 用户好友响应结果接口定义
 * @interface IUserFriendsResponse
 * @property {string} id 好友id
 * @property {string} name 好友名称
 * @property {string} avatar 好友头像
 * @property {string} status 好友状态
 * @property {any} [key: string] 其他属性
 * */
export interface IUserFriendsResponse {
    id: string;
    name: string;
    avatar: string;
    status: string;

    [key: string]: any;
}

/**
 * 用户待定好友响应结果接口定义
 * @interface IUserFriendsPendingResponse
 * @property {IUserFriendsPendingResponse[]} friends 待定好友列表
 * @property {string} id 好友id
 * @property {string} name 好友名称
 * @property {string} avatar 好友头像
 * @property {boolean} isInitiative 是否是发起方
 * */
export interface IUserFriendsPendingResponse {
    friends: IUserFriendsPendingResponse[];
    id: string;
    name: string;
    avatar: string;
    isInitiative: boolean;
}

/**
 * 用户屏蔽的好友响应结果接口定义
 * @interface IUserFriendsBlockedResponse
 * @property {IUserFriendsBlockedResponse[]} friends 屏蔽的好友列表
 * @property {string} id 好友id
 * @property {string} name 好友名称
 * @property {string} avatar 好友头像
 * */
export interface IUserFriendsBlockedResponse {
    friends: IUserFriendsBlockedResponse[];
    id: string;
    name: string;
    avatar: string;
}

/**
 * 通过用户id查询用户信息响应结果接口定义
 * @interface IUserInfoResponse
 * @property {IUserInfoResponse} data 用户信息
 * @property {string} id 用户id
 * @property {string} username 用户名
 * @property {string} email 邮箱
 * @property {string} discriminator 用户标识
 * @property {string} password 密码
 * @property {string} createdAt 创建时间
 * @property {string} updatedAt 更新时间
 * @property {string} role 角色
 * @property {string} img 头像
 */
export interface IUserInfoResponse {
    mapKey: {
        id: string;
        username: string;
        email: string;
        discriminator: string;
        password: string;
        createdAt: string;
        updatedAt: string;
        role: string;
        img: string;
    };
}

/**
 * 通过好友id查询好友信息响应结果接口定义
 */
export interface IUserInfoByFriendIdResponse {
    friendInfo: IUserInfoByFriendsIdResponse;
}

export interface IUserInfoByFriendsIdResponse {
    username: string;
    introduction: string;
    avatar: string;
    registerTime: string;
    background: string;
    remark: string;
    status: string;
    discriminator: string;
    tags: {
        tag: string;
        link: string;
    }[];
}

// 用户好友 API 接口定义
export interface IUserFriendsApi {
    getUserFriends(): Promise<Response<IUserFriendsResponse>>;

    getUserFriendsPending(): Promise<Response<IUserFriendsPendingResponse>>;

    getUserFriendsBlocked(): Promise<Response<IUserFriendsBlockedResponse>>;

    getUserInfo(id: string): Promise<Response<IUserInfoResponse>>;

    getUserInfoByFriendId(id: string): Promise<Response<IUserInfoByFriendIdResponse>>;
}

/**
 * 实现了 IUserFriendsApi 接口的类，用于获取用户好友数据
 */
@classAsyncTryCatch
class UserFriendsService implements IUserFriendsApi {
    /**
     * 获取用户好友数据
     * @returns Promise 对象，解析为类型为 Response<IUserFriendsResponse> 的响应结果
     */
    public async getUserFriends(): Promise<Response<IUserFriendsResponse>> {
        return await http.get<Response<IUserFriendsResponse>>(USER_FRIENDS);
    }

    /**
     * 获取用户待定好友数据
     * @returns Promise 对象，解析为类型为 Response<IUserFriendsPendingResponse> 的响应结果
     */
    public async getUserFriendsPending(): Promise<Response<IUserFriendsPendingResponse>> {
        return await http.get<Response<IUserFriendsPendingResponse>>(USER_FRIENDS_PENDING);
    }

    /**
     * 获取用户屏蔽的好友数据
     * @returns Promise 对象，解析为类型为 Response<IUserFriendsBlockedResponse> 的响应结果
     * */
    public async getUserFriendsBlocked(): Promise<Response<IUserFriendsBlockedResponse>> {
        return await http.get<Response<IUserFriendsBlockedResponse>>(USER_FRIENDS_BLOCKED);
    }

    /**
     * 通过用户id查询用户信息
     * @param userId 用户id
     * @returns Promise 对象，解析为类型为 Response<IUserInfoResponse> 的响应结果
     */
    public async getUserInfo(userId: string): Promise<Response<IUserInfoResponse>> {
        return await http.post<Response<IUserInfoResponse>>(USER_INFO, {
            userId,
        });
    }

    /**
     * 通过好友id查询好友信息
     * @param friendId 好友id
     * @returns Promise 对象，解析为类型为 Response<{ data: IUserInfoByFriendIdResponse }> 的响应结果
     */
    public async getUserInfoByFriendId(friendId: string): Promise<Response<IUserInfoByFriendIdResponse>> {
        return await http.get<Response<IUserInfoByFriendIdResponse>>(USER_INFO_BY_FRIEND_ID, {
            friendId,
        });
    }
}

export default new UserFriendsService();

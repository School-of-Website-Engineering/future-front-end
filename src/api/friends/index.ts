import http, { Response } from '@/utils/http';
import { classAsyncTryCatch } from '@/utils/exceptionHandling';
// 查询好友列表
export const USER_FRIENDS = '/user/friends';
// 查询待定好友列表
export const USER_FRIENDS_PENDING = '/user/friends/pending';
// 用户屏蔽的好友
export const USER_FRIENDS_BLOCKED = '/user/friends/blocked';

// 用户好友响应结果接口定义
export interface IUserFriendsResponse {
    id: string;
    name: string;
    avatar: string;
    status: string;
    [key: string]: any;
}
// 用户好友响应结果接口定义
export interface IUserFriendsPendingResponse {
    friends: IUserFriendsPendingResponse[];
    id: string;
    name: string;
    avatar: string;
    isInitiative: boolean;
}

// 用户好友 API 接口定义
export interface IUserFriendsApi {
    getUserFriends(): Promise<Response<IUserFriendsResponse>>;
    getUserFriendsPending(): Promise<Response<IUserFriendsPendingResponse>>;
}

// 用户屏蔽的好友响应结果接口定义
export interface IUserFriendsBlockedResponse {
    friends: IUserFriendsBlockedResponse[];
    id: string;
    name: string;
    avatar: string;
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
    async getUserFriends() {
        return await http.get<Response<IUserFriendsResponse>>(USER_FRIENDS);
    }
    /**
     * 获取用户待定好友数据
     * @returns Promise 对象，解析为类型为 Response<IUserFriendsPendingResponse> 的响应结果
     */
    async getUserFriendsPending() {
        return await http.get<Response<IUserFriendsPendingResponse>>(USER_FRIENDS_PENDING);
    }
    /**
     * 获取用户屏蔽的好友数据
     * @returns Promise 对象，解析为类型为 Response<IUserFriendsBlockedResponse> 的响应结果
     * */
    async getUserFriendsBlocked() {
        return await http.get<Response<IUserFriendsBlockedResponse>>(USER_FRIENDS_BLOCKED);
    }
}

export default new UserFriendsService();

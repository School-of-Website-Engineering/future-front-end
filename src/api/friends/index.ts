import http, { Response } from '@/utils/http';

export const USER_FRIENDS = '/user/friends';

// 用户好友响应结果接口定义
export interface IUserFriendsResponse {
    id: string;
    name: string;
    avatar: string;
    status: string;
    [key: string]: any;
}

// 用户好友 API 接口定义
export interface IUserFriendsApi {
    getUserFriends(): Promise<Response<IUserFriendsResponse>>;
}

/**
 * 实现了 IUserFriendsApi 接口的类，用于获取用户好友数据
 */
class UserFriendsService implements IUserFriendsApi {
    /**
     * 获取用户好友数据
     * @returns Promise 对象，解析为类型为 Response<IUserFriendsResponse> 的响应结果
     */
    getUserFriends = () => http.get<Response<IUserFriendsResponse>>(USER_FRIENDS);
}

export default new UserFriendsService();

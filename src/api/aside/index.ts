import http, { Response } from '@/utils/http';
import { classAsyncTryCatch } from '@/utils/exceptionHandling';

// 侧边栏 用户私信列表信息
export const ASIDE_LPRIVATE = '/aside/letter';
// 频道详细信息
export const ASIDE_SIDEBAR_LIST = '/aside/sidebarList';
// 私信好友列表，状态信息
export const ASIDE_PRIVATE_USER_LIST = '/aside/privateUserList';

/**
 * 侧边栏私信数据接口定义
 * @interface IAsideLPrivate
 * @property {number} id 私信用户id
 * @property {string} name 私信用户名称
 * @property {number} count 私信用户未读消息数量
 * @property {IPrivateUserList[]} [privateUserList] 私信用户列表
 * */
export interface IAsideLPrivate {
    id: number;
    name: string;
    count: number;
    privateUserList?: IPrivateUserList[];
}

/**
 * 私信用户列表接口定义
 * @interface IPrivateUserList
 * @property {string} name 私信用户名称
 * @property {string} avatar 私信用户头像
 * @property {string} status 私信用户状态
 * @property {string} msgId 私信用户最后一条消息id
 *
 * */
export interface IPrivateUserList {
    name: string;
    avatar: string;
    status: string;
    msgId: string;
}

/**
 * 侧边栏频道数据接口定义
 * @interface IAsideSidebarList
 * @property {string} id 频道id
 * @property {string} name 频道名称
 * @property {number} count 频道未读消息数量
 * @property {string} img 频道图片
 * */
export interface IAsideSidebarList {
    id: string;
    name: string;
    count: number;
    img: string;
}

/**
 * 侧边栏私信用户数据接口定义
 * @interface IAsideLPrivateResponse
 * @property {IAsideLPrivateResponse[]} sidebarList 侧边栏私信用户列表
 * @property {number} id 私信用户id
 * @property {string} name 私信用户名称
 * @property {string} avatar 私信用户头像
 * @property {string} status 私信用户状态
 * @property {string} statusText 私信用户状态文本
 * */
export interface IAsideLPrivateResponse {
    sidebarList: Array<IAsideLPrivateResponse>;
    id: number;
    name: string;
    avatar: string;
    status: string;
    statusText: string;
}

// 侧边栏私信数据 API 接口定义
export interface IAsideLPrivateApi {
    getAsideLPrivate(): Promise<Response<IAsideLPrivate>>;

    getAsideSidebarList(): Promise<Response<IAsideSidebarList>>;

    getAsidePrivateUserList(): Promise<Response<IAsideLPrivateResponse>>;
}

/**
 * 实现了 IAsideLPrivateApi 接口的类，用于获取侧边栏私信数据
 */
@classAsyncTryCatch
class AsideLPrivateService implements IAsideLPrivateApi {
    /**
     * 获取侧边栏私信数据
     * @returns Promise 对象，解析为类型为 Response<IAsideLPrivate> 的响应结果
     * */
    async getAsideLPrivate(): Promise<Response<IAsideLPrivate>> {
        return await http.get<Response<IAsideLPrivate>>(ASIDE_LPRIVATE);
    }

    /**
     * 获取侧边栏频道数据
     *  @returns Promise 对象，解析为类型为 Response<IAsideSidebarList> 的响应结果
     * */
    async getAsideSidebarList(): Promise<Response<IAsideSidebarList>> {
        return await http.get<Response<IAsideSidebarList>>(ASIDE_SIDEBAR_LIST);
    }

    /**
     * 获取侧边栏私信用户数据
     * @returns Promise 对象，解析为类型为 Response<IAsideLPrivateResponse> 的响应结果
     */
    async getAsidePrivateUserList(): Promise<Response<IAsideLPrivateResponse>> {
        return await http.get<Response<IAsideLPrivateResponse>>(ASIDE_PRIVATE_USER_LIST);
    }
}

export default new AsideLPrivateService();

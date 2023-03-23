import http, { Response } from '@/utils/http';

// 侧边栏 用户私信列表信息
export const ASIDE_LPRIVATE = '/aside/letter';
// 频道详细信息
export const ASIDE_SIDEBAR_LIST = '/aside/sidebarList';
// 私信好友列表，状态信息
export const ASIDE_PRIVATE_USER_LIST = '/aside/privateUserList';

// 侧边栏私信数据接口定义
export interface IAsideLPrivate {
    id: number;
    name: string;
    count: number;
    privateUserList?: IPrivateUserList[];
}

// 私人用户列表接口定义
export interface IPrivateUserList {
    name: string;
    avatar: string;
    status: string;
    msgId: string;
}

// 侧边栏频道数据接口定义
export interface IAsideSidebarList {
    id: string;
    name: string;
    count: number;
    img: string;
}

// 侧边栏私信数据响应结果接口定义
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
class AsideLPrivateService implements IAsideLPrivateApi {
    /**
     * 获取侧边栏私信数据
     * @returns Promise 对象，解析为类型为 Response<IAsideLPrivate> 的响应结果
     */
    getAsideLPrivate = () => http.get<Response<IAsideLPrivate>>(ASIDE_LPRIVATE);
    /**
     * 获取侧边栏频道数据
     * @returns Promise 对象，解析为类型为 Response<IAsideSidebarList> 的响应结果
     * */
    getAsideSidebarList = () => http.get<Response<IAsideSidebarList>>(ASIDE_SIDEBAR_LIST);
    /**
     * 获取侧边栏私信用户数据
     * @returns Promise 对象，解析为类型为 Response<IAsideLPrivateResponse> 的响应结果
     */
    getAsidePrivateUserList = () => http.get<Response<IAsideLPrivateResponse>>(ASIDE_PRIVATE_USER_LIST);
}

export default new AsideLPrivateService();

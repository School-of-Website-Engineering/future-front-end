import http, { Response } from '@/utils/http';

// 侧边栏私信数据的 URL
export const ASIDE_LPRIVATE = '/aside/letter';
export const ASIDE_SIDEBAR_LIST = '/aside/sidebarList';

// 侧边栏私信数据接口定义
export interface IAsideLPrivate {
    id: number;
    name: string;
    count: number;
    privateUserList: IPrivateUserList[];
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

// 侧边栏私信数据 API 接口定义
export interface IAsideLPrivateApi {
    getAsideLPrivate(): Promise<Response<IAsideLPrivate>>;

    getAsideSidebarList(): Promise<Response<IAsideSidebarList>>;
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
}

export default new AsideLPrivateService();

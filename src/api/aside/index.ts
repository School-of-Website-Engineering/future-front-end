import http, { Response } from '@/utils/http';

// 侧边栏私信数据的 URL
export const ASIDE_LPRIVATE = '/api/aside/letter';

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

// 侧边栏私信数据 API 接口定义
export interface IAsideLPrivateApi {
    getAsideLPrivate(): Promise<Response<IAsideLPrivate>>;
}

/**
 * 实现了 IAsideLPrivateApi 接口的类，用于获取侧边栏私信数据
 */
export class AsideLPrivateApi implements IAsideLPrivateApi {
    /**
     * 获取侧边栏私信数据
     * @returns Promise 对象，解析为类型为 Response<IAsideLPrivate> 的响应结果
     */
    getAsideLPrivate = () => http.get<Response<IAsideLPrivate>>(ASIDE_LPRIVATE);
}

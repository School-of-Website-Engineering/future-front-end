import http, { Response } from '@/utils/http';
import { classAsyncTryCatch } from '@/utils/exceptionHandling';

// 添加服务器群组
export const SERVICE_ADD_SERVER = '/server/add';
// 根据创建者用户id查询服务器
export const SERVICE_GET_SERVER_BY_CREATOR_ID = '/server/getByOwnerId';
// 根据用户id修改服务器类型
export const SERVICE_UPDATE_SERVER_CATEGORY_BY_ID = '/server/set_category';
// 加入服务器,根据服务器id"/server/{id}/join";
export const SERVICE_JOIN_SERVER = '/server/';
export const SERVICE_JOIN_SERVER_BY_ID = '/join';
//退出服务器/server/{id}/quit
export const SERVICE_QUIT_SERVER = '/server/';
export const SERVICE_QUIT_SERVER_BY_ID = '/quit';
// 根据当前用户id查询所有加入的服务器
export const SERVICE_GET_SERVER_BY_USER_ID = '/server/showAllServer';

/**
 * 根据创建者用户id查询服务器响应结果接口定义
 * @interface IGetServerByCreatorIdResponse
 * @property {number} id 服务器id
 * @property {string} name 服务器名称
 * @property {number} ownerId 服务器创建者id
 * @property {string} createdAt 创建时间
 * @property {string} updatedAt 更新时间
 * @property {string} category 服务器类型
 * @property {string} img 服务器图片
 */
export interface IGetServerByCreatorIdResponse {
    id: number;
    name: string;
    ownerId: number;
    createdAt: string;
    updatedAt: string;
    category: string;
    img: string;
}

/**
 * 加入服务器,根据服务器id响应结果接口定义
 * @interface IJoinServerByIdResponse
 * @property {number} id 服务器id
 * @property {string} name 服务器名称
 * @property {number} ownerId 服务器创建者id
 * @property {string} createdAt 创建时间
 * @property {string} updatedAt 更新时间
 * @property {string} category 服务器类型
 * @property {string} img 服务器图片
 */
export interface IJoinServerByIdResponse {
    id: number;
    name: string;
    ownerId: number;
    createdAt: string;
    updatedAt: string;
    category: string;
    img: string;
}

/**
 * 退出服务器响应结果接口定义
 * @interface IQuitServerByIdResponse
 * @property {number} id 服务器id
 * @property {string} name 服务器名称
 * @property {number} ownerId 服务器创建者id
 * @property {string} createdAt 创建时间
 * @property {string} updatedAt 更新时间
 * @property {string} category 服务器类型
 * @property {string} img 服务器图片
 */
export interface IQuitServerByIdResponse {
    id: number;
    name: string;
    ownerId: number;
    createdAt: string;
    updatedAt: string;
    category: string;
    img: string;
}

/**
 * 根据当前用户id查询所有加入的服务器响应结果接口定义
 * @interface IGetServerByUserIdResponse
 * @property {number} id 服务器id
 * @property {string} name 服务器名称
 * @property {number} ownerId 服务器创建者id
 * @property {string} createdAt 创建时间
 * @property {string} updatedAt 更新时间
 * @property {string} category 服务器类型
 * @property {string} img 服务器图片
 */
export interface IGetServerByUserIdResponse {
    id: number;
    name: string;
    ownerId: number;
    createdAt: string;
    updatedAt: string;
    category: string;
    img: string;
}

// 服务器控制API接口定义
export interface IServerControl {
    getServerList(): Promise<Response>;

    getServerByCreatorId(id: number): Promise<Response<IGetServerByCreatorIdResponse>>;

    getServerUpdateCategoryById(id: number, category: string): Promise<Response>;

    getJoinServerById(id: number): Promise<Response<IJoinServerByIdResponse>>;

    getQuitServerById(id: number): Promise<Response<IQuitServerByIdResponse>>;

    getServerByUserId(id: number): Promise<Response<IGetServerByUserIdResponse>>;
}

/**
 * 服务器控制API接口类，用于获取服务器列表
 * @class ServerControlService
 */
@classAsyncTryCatch
class ServerControlService implements IServerControl {
    /**
     * 获取服务器列表
     * @returns Promise 对象，解析为类型为 Response 的响应结果
     */
    public async getServerList(): Promise<Response> {
        return await http.post(SERVICE_ADD_SERVER);
    }

    /**
     * 根据创建者用户id查询服务器
     * @param id 创建者用户id
     * @returns Promise 对象，解析为类型为 Response<IGetServerByCreatorIdResponse> 的响应结果
     */
    public async getServerByCreatorId(id: number): Promise<Response<IGetServerByCreatorIdResponse>> {
        return await http.post(SERVICE_GET_SERVER_BY_CREATOR_ID, { id });
    }

    /**
     * 根据用户id修改服务器类型
     * @param id 服务器id
     * @param category 服务器类型
     * @returns Promise 对象，解析为类型为 Response 的响应结果
     */
    public async getServerUpdateCategoryById(id: number, category: string): Promise<Response> {
        return await http.post(SERVICE_UPDATE_SERVER_CATEGORY_BY_ID, {
            id,
            category
        });
    }

    /**
     * 加入服务器,根据服务器id
     * @param id 服务器id
     * @returns Promise 对象，解析为类型为 Response<IJoinServerByIdResponse> 的响应结果
     */
    public async getJoinServerById(id: number): Promise<Response<IJoinServerByIdResponse>> {
        return await http.post(SERVICE_JOIN_SERVER + id + SERVICE_JOIN_SERVER_BY_ID);
    }

    /**
     * 退出服务器
     * @param id 服务器id
     * @returns Promise 对象，解析为类型为 Response<IQuitServerByIdResponse> 的响应结果
     */
    public async getQuitServerById(id: number): Promise<Response<IQuitServerByIdResponse>> {
        return await http.post(SERVICE_QUIT_SERVER + id + SERVICE_QUIT_SERVER_BY_ID);
    }

    /**
     * 根据当前用户id查询所有加入的服务器
     * @param id 当前用户id
     * @returns Promise 对象，解析为类型为 Response<IGetServerByUserIdResponse> 的响应结果
     */
    public async getServerByUserId(id: number): Promise<Response<IGetServerByUserIdResponse>> {
        return await http.post(SERVICE_GET_SERVER_BY_USER_ID, { id });
    }
}

export default new ServerControlService();

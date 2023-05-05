import http, { Response } from '@/utils/http';
import { classAsyncTryCatch } from '@/utils/exceptionHandling';
//聊天记录
export const CHAT_RECORD = '/chat/';
// 发送消息
const CHAT_SEND = '/chat/ing';

/**
 * 获取聊天记录消息结果接口定义
 * @interface IChatRecordResponse
 * @property {string} content 聊天内容
 * @property {string} messageType 消息类型
 * @property {string} time 时间
 * @property {string} messageFrom 消息来源
 * @property {string} messageId 消息id
 */
export interface IChatRecordMessageResponse {
    content: string;
    messageType: string;
    time: string;
    messageFrom: string;
    messageId: string;
    isShow?: boolean;
    isEdit?: boolean;
    name?: string;
}

/**
 * 获取聊天记录结果接口定义
 * @interface IChatRecordResponse 聊天记录
 * @property {string} avatar 头像
 * @property {string} id 聊天id
 * @property {IChatRecordMessageResponse[]} message 聊天消息
 * @property {string} name 聊天名称
 * @property {string} time 聊天时间
 */
export interface IChatRecordResponse {
    avatar: string;
    id: string;
    message: IChatRecordMessageResponse[];
    name: string;
    time: string;
}

/**
 * 发送消息结果接口定义
 * @interface IChatSendResponse
 * @property {string} content 聊天内容
 * @property {string} messageType 消息类型
 * @property {string} time 时间
 * @property {string} messageFrom 消息来源
 * @property {string} messageId 消息id
 * @property {boolean} isShow 是否显示
 * @property {boolean} isEdit 是否编辑
 */
export interface IChatSendResponse {
    content: string;
    messageType: string;
    time: string;
    messageFrom: string;
    messageId: string;
    isShow?: boolean;
    isEdit?: boolean;
}

/**
 * 聊天服务接口定义
 */
export interface IChatApi {
    getChatRecord: (id: string) => Promise<Response<{ data: IChatRecordResponse }>>;
    getChatSend: (data: object) => Promise<Response<{ data: IChatSendResponse }>>;
}

/**
 * 实现聊天服务
 */
@classAsyncTryCatch
class ChatService implements IChatApi {
    /**
     * 获取聊天记录
     * @param id 聊天id
     * @returns {Promise<Response<{ data: IChatRecordResponse }>>}
     */
    public async getChatRecord(id: string): Promise<Response<{ data: IChatRecordResponse }>> {
        return await http.get(CHAT_RECORD + id);
    }

    /**
     * 发送消息
     * @param data 聊天内容
     * @returns {Promise<Response<{ data: IChatSendResponse }>>}
     */
    public async getChatSend(data: object): Promise<Response<{ data: IChatSendResponse }>> {
        return await http.post(CHAT_SEND, { ...data }, { headers: { 'Content-Type': 'application/json' } });
    }
}

export default new ChatService();

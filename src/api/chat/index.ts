import http, { Response } from '@/utils/http';
import { classAsyncTryCatch } from '@/utils/exceptionHandling';
//聊天记录
export const CHAT_RECORD = '/chat/';

/**
 * 获取聊天记录结果接口定义
 * @interface IChatRecordResponse
 * @property {string} content 聊天内容
 * @property {string} messageType 消息类型
 * @property {string} time 时间
 * @property {string} messageFrom 消息来源
 */
export interface IChatRecordResponse {
    content: string;
    messageType: string;
    time: string;
    messageFrom: string;
}

/**
 * 聊天服务接口定义
 */
export interface IChatApi {
    // 获取聊天记录
    getChatRecord: (id: string) => Promise<Response<{ message: IChatRecordResponse[] }>>;
}

/**
 * 实现聊天服务
 */
@classAsyncTryCatch
class ChatService implements IChatApi {
    /**
     * 获取聊天记录
     * @param id 聊天id
     * @returns {Promise<Response<{ message: IChatRecordResponse[] }>>}
     */
    getChatRecord = (id: string) => {
        return http.get(CHAT_RECORD + id);
    };
}

export default new ChatService();

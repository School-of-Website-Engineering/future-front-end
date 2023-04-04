import http, { Response } from '@/utils/http';
import { classAsyncTryCatch } from '@/utils/exceptionHandling';

//查询用户加入的服务器
export const SERVICE_GET_USER_SERVER = 'server/showAllServer';

// 查询服务器响应结果接口定义

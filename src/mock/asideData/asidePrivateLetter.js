// 获取列表数据
import { AsideLPrivate } from '../../api/aside/index.js';

export default [
    // 用户登录
    {
        // 请求地址
        url     : '/users',
        // 请求方法
        method  : 'post',
        // 响应数据
        response: () => {
            return {
                code   : 0,
                message: 'success',
                // 侧边栏数据
                data   : {
                    id             : 1,
                    name           : '私信',
                    //     消息数量
                    count          : 0,
                    //     用户私信列表数量
                    privateUserList: [
                        {
                            name  : '用户1',
                            //     用户头像
                            avatar: 'https://avatars2.githubusercontent.com/u/20511997?s=460&v=4',
                            // 用户状态
                            status: 'online',
                            //     用户私信id(随机数)
                            msgId : '45204857382978432120'
                        },
                        {
                            name  : '用户2',
                            avatar: 'https://avatars2.githubusercontent.com/u/20511997?s=460&v=4',
                            status: 'offline',
                            msgId : '45204857382978432121'
                        },
                        {
                            name  : '用户3',
                            avatar: 'https://avatars2.githubusercontent.com/u/20511997?s=460&v=4',
                            status: 'online',
                            msgId : '45204857382978432122'
                        }
                    ]
                }
            };
        }
    }
];

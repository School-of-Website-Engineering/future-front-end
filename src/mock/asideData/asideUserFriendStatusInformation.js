// 私信好友列表，状态信息
export default [
    // 用户登录
    {
        // 请求地址
        url     : '/aside/privateUserList',
        // 请求方法
        method  : 'get',
        // 响应数据
        response: () => {
            return {
                code   : 0,
                message: 'success',
                // 侧边栏数据
                data   : {
                    // 侧边栏列表私信好友列表，状态信息
                    sidebarList: [
                        {
                            // 用户id
                            id        : '345623411435767898',
                            // 用户名
                            name      : 'liuliu',
                            // 用户头像
                            avatar    : 'http://39.105.229.249/ftp/ling/future/user/liuliu.webp',
                            // 用户状态
                            status    : 'online',
                            statusText: '在线'
                        },
                        {
                            // 用户id
                            id        : '345623411435767899',
                            // 用户名
                            name      : 'Ye Ldzy>>',
                            // 用户头像
                            avatar    : 'http://39.105.229.249/ftp/ling/future/user/yedz.webp',
                            // 用户状态
                            status    : 'idle',
                            statusText: '闲置'
                        },
                        {
                            // 用户id
                            id        : '345623411435767900',
                            // 用户名
                            name      : '[ECM]HamSter',
                            // 用户头像
                            avatar    : 'http://39.105.229.249/ftp/ling/future/user/ecm.webp',
                            // 用户状态
                            status    : 'online',
                            statusText: '在线'
                        },
                        {
                            // 用户id
                            id        : '345623411435767901',
                            // 用户名
                            name      : 'Catand',
                            // 用户头像
                            avatar    : 'http://39.105.229.249/ftp/ling/future/user/catand.webp',
                            // 用户状态
                            status    : 'busy',
                            statusText: '忙碌'
                        },
                        {
                            // 用户id
                            id        : '3456234114357679023',
                            // 用户名
                            name      : 'Humfrey',
                            // 用户头像
                            avatar    : 'http://39.105.229.249/ftp/ling/future/user/humry.webp',
                            // 用户状态
                            status    : 'online',
                            statusText: '在线'
                        },
                        {
                            // 用户id
                            id        : '345623411435767907',
                            // 用户名
                            name      : 'Cold Mint',
                            // 用户头像
                            avatar    : 'http://39.105.229.249/ftp/ling/future/user/cm.webp',
                            // 用户状态
                            status    : 'online',
                            statusText: '在线'
                        },
                        {
                            // 用户id
                            id        : '3456234161435767908',
                            // 用户名
                            name      : 'NaRiver',
                            // 用户头像
                            avatar    : 'http://39.105.229.249/ftp/ling/future/user/nr.webp',
                            // 用户状态
                            status    : 'idle',
                            statusText: '闲置'
                        },
                        {
                            // 用户id
                            id        : '3456234114357677908',
                            // 用户名
                            name      : 'Deep Water',
                            // 用户头像
                            avatar    : 'http://39.105.229.249/ftp/ling/future/user/dw.webp',
                            // 用户状态
                            status    : 'busy',
                            statusText: '忙碌'
                        },
                        {
                            // 用户id
                            id        : '3456234114357679088',
                            // 用户名
                            name      : 'EElainaya',
                            // 用户头像
                            avatar    : 'http://39.105.229.249/ftp/ling/future/user/eely.webp',
                            // 用户状态
                            status    : 'online',
                            statusText: '在线'
                        },
                        {
                            // 用户id
                            id        : '3456234114357679087',
                            // 用户名
                            name      : 'Mr.Smith',
                            // 用户头像
                            avatar    : 'http://39.105.229.249/ftp/ling/future/user/mrs.webp',
                            // 用户状态
                            status    : 'idle',
                            statusText: '闲置'
                        },
                        {
                            // 用户id
                            id        : '3456234114357679082',
                            // 用户名
                            name      : 'Ms.Timesiana',
                            // 用户头像
                            avatar    : 'http://39.105.229.249/ftp/ling/future/user/msx.webp',
                            // 用户状态
                            status    : 'busy',
                            statusText: '忙碌'
                        }
                    ]
                }
            };
        }
    }
];

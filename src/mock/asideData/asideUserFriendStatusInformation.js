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
                            avatar    : 'https://cdn.discordapp.com/avatars/1042734257149329418/5ab3131122ac145db5f2edf29e5a7730.webp?size=48',
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
                            avatar    : 'https://cdn.discordapp.com/avatars/891419145592266812/c8578ca93da963aa9edfdae6111a1a23.webp?size=128',
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
                            avatar    : 'https://cdn.discordapp.com/avatars/760729927552729119/20167f95c93ef46167737aee7201cb92.webp?size=48',
                            // 用户状态
                            status    : 'offline',
                            statusText: '离线'
                        },
                        {
                            // 用户id
                            id        : '345623411435767901',
                            // 用户名
                            name      : 'JDSA Ling',
                            // 用户头像
                            avatar    : 'https://cdn.discordapp.com/avatars/615354796781862913/11ec6f364a0e4b6ceef007fe18c382b3.webp?size=48',
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

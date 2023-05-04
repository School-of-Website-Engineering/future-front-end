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
                            status    : 'online',
                            statusText: '在线'
                        },
                        {
                            // 用户id
                            id        : '345623411435767901',
                            // 用户名
                            name      : 'Catand',
                            // 用户头像
                            avatar    : 'https://cdn.discordapp.com/avatars/616810767773335552/d730cfb881a0dbb685067cfa328f4bec.webp?size=100',
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
                            avatar    : 'https://cdn.discordapp.com/avatars/598588658177671188/df122ff3d7dfa25674aed205a043684f.webp?size=128',
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
                            avatar    : 'https://cdn.discordapp.com/avatars/763293201062035486/5396342ba4e3bf24661c146cdae526a1.webp?size=100',
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
                            avatar    : 'https://cdn.discordapp.com/avatars/1049673722434437160/23653805be14a796eb0fab4795cc6f7a.webp?size=100',
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
                            avatar    : 'https://cdn.discordapp.com/avatars/482216415147982848/c2b04dce7319282ff2cdc6275e13d52a.webp?size=128',
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
                            avatar    : 'https://cdn.discordapp.com/avatars/763298729762488330/6d1ec1e2b226fab6ee79231604cd87a7.webp?size=100',
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
                            avatar    : 'https://cdn.discordapp.com/avatars/511265015647436820/6db4e889181655645d92b70e53542dba.webp?size=100',
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
                            avatar    : 'https://cdn.discordapp.com/avatars/809486916612653129/95831cc675c39c894cc7c43af398c5f4.webp?size=100',
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

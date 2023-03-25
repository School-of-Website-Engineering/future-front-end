export default [
    // 查询好友
    {
        // 请求地址
        url     : '/user/friends',
        // 请求方法
        method  : 'get',
        // 响应数据
        response: () => {
            return {
                code   : 0,
                message: 'success',
                data   : {
                    friends: [
                        {
                            id      : 1,
                            username: 'admin',
                            avatar  : 'https://cdn.discordapp.com/avatars/307917208460460033/a_8e5acc68e72c83cba21286a27c4bbfa0.webp?size=128',
                            sign    : '管理员',
                            status  : 'online',
                            //     是否屏蔽
                            shield  : false
                        },
                        {
                            id      : 2,
                            username: 'user',
                            avatar  : 'https://cdn.discordapp.com/guilds/2963993561965527…rs/b22dedba1dac0fbcb9fc274e62238b08.webp?size=128',
                            status  : 'online',
                            shield  : false
                        },
                        {
                            id      : 3,
                            username: ':soiled',
                            avatar  : 'https://cdn.discordapp.com/avatars/714393480645967985/ebe1b411f87e82ae43822d1b157d8a2c.webp?size=128',
                            status  : 'online',
                            shield  : true
                        },
                        {
                            id      : 4,
                            username: 'Just an assassin enjoyer',
                            avatar  : 'https://cdn.discordapp.com/avatars/714393480645967985/ebe1b411f87e82ae43822d1b157d8a2c.webp?size=128',
                            status  : 'online',
                            shield  : false
                        },
                        {
                            id      : 5,
                            username: '@lighthouse64 [debug/sheep]',
                            avatar  : 'https://cdn.discordapp.com/avatars/217322331385757697/14dad810261ecdbcdcc8f78f6818c7f4.webp?size=128',
                            status  : 'online',
                            shield  : false
                        },
                        {
                            id      : 6,
                            username: 'Wand of hahaa 2.0',
                            avatar  : 'https://cdn.discordapp.com/guilds/2963993561965527…rs/b22dedba1dac0fbcb9fc274e62238b08.webp?size=128',
                            status  : 'online',
                            shield  : true
                        },
                        {
                            // 用户id
                            id    : '345623411435767898',
                            // 用户名
                            name  : 'liuliu',
                            // 用户头像
                            avatar: 'https://cdn.discordapp.com/avatars/1042734257149329418/5ab3131122ac145db5f2edf29e5a7730.webp?size=48',
                            // 用户状态
                            status: 'online',
                            shield: false
                        },
                        {
                            // 用户id
                            id    : '345623411435767899',
                            // 用户名
                            name  : 'Ye Ldzy>>',
                            // 用户头像
                            avatar: 'https://cdn.discordapp.com/avatars/891419145592266812/c8578ca93da963aa9edfdae6111a1a23.webp?size=128',
                            // 用户状态
                            status: 'idle',
                            shield: false
                        },
                        {
                            // 用户id
                            id    : '345623411435767900',
                            // 用户名
                            name  : '[ECM]HamSter',
                            // 用户头像
                            avatar: 'https://cdn.discordapp.com/avatars/760729927552729119/20167f95c93ef46167737aee7201cb92.webp?size=48',
                            // 用户状态
                            status: 'offline',
                            shield: false
                        },
                        {
                            // 用户id
                            id    : '345623411435767901',
                            // 用户名
                            name  : 'JDSA Ling',
                            // 用户头像
                            avatar: 'https://cdn.discordapp.com/avatars/615354796781862913/11ec6f364a0e4b6ceef007fe18c382b3.webp?size=48',
                            // 用户状态
                            status: 'busy',
                            shield: false
                        },
                        {
                            // 用户id
                            id    : '345623411435767902',
                            // 用户名
                            name  : 'JDSA Ling',
                            // 用户头像
                            avatar: 'https://cdn.discordapp.com/avatars/905665362400518224/21c6153c25cdbe4fc7499f558fe9dff8.webp?size=48',
                            // 用户状态
                            status: 'busy',
                            shield: false
                        }
                    ]
                }
            };
        }
    }
];

export default [
    // 查询好友
    {
        // 请求地址
        url: '/user/friends',
        // 请求方法
        method: 'get',
        // 响应数据
        response: () => {
            return {
                code: 0,
                message: 'success',
                data: {
                    friends: [
                        {
                            id: '345623411435767855',
                            name: 'Just an assassin enjoyer',
                            avatar: 'https://cdn.discordapp.com/avatars/714393480645967985/ebe1b411f87e82ae43822d1b157d8a2c.webp?size=128',
                            status: 'offline',
                        },
                        {
                            id: '345623411435767856',
                            name: '@lighthouse64',
                            avatar: 'https://cdn.discordapp.com/avatars/217322331385757697/14dad810261ecdbcdcc8f78f6818c7f4.webp?size=128',
                            status: 'online',
                        },
                        {
                            // 用户id
                            id: '345623411435767898',
                            // 用户名
                            name: 'liuliu',
                            // 用户头像
                            avatar: 'https://cdn.discordapp.com/avatars/1042734257149329418/5ab3131122ac145db5f2edf29e5a7730.webp?size=48',
                            // 用户状态
                            status: 'online',
                        },
                        {
                            // 用户id
                            id: '345623411435767899',
                            // 用户名
                            name: 'Ye Ldzy>>',
                            // 用户头像
                            avatar: 'https://cdn.discordapp.com/avatars/891419145592266812/c8578ca93da963aa9edfdae6111a1a23.webp?size=128',
                            // 用户状态
                            status: 'idle',
                        },
                        {
                            // 用户id
                            id: '345623411435767900',
                            // 用户名
                            name: '[ECM]HamSter',
                            // 用户头像
                            avatar: 'https://cdn.discordapp.com/avatars/760729927552729119/20167f95c93ef46167737aee7201cb92.webp?size=48',
                            // 用户状态
                            status: 'offline',
                        },
                        {
                            // 用户id
                            id: '345623411435767901',
                            // 用户名
                            name: 'JDSA Ling',
                            // 用户头像
                            avatar: 'https://cdn.discordapp.com/avatars/615354796781862913/11ec6f364a0e4b6ceef007fe18c382b3.webp?size=48',
                            // 用户状态
                            status: 'busy',
                        },
                        {
                            // 用户id
                            id: '345623411435767902',
                            // 用户名
                            name: 'Mason',
                            // 用户头像
                            avatar: 'https://cdn.discordapp.com/avatars/905665362400518224/21c6153c25cdbe4fc7499f558fe9dff8.webp?size=48',
                            // 用户状态
                            status: 'busy',
                        },
                        {
                            // 用户id
                            id: '345623411435767903',
                            // 用户名
                            name: 'duelists samwise gamgee',
                            // 用户头像
                            avatar: 'https://cdn.discordapp.com/avatars/406063120705126400/a765271a2e13bd42d0a0848c0af23bac.webp?size=128',
                            // 用户状态
                            status: 'busy',
                        },
                        {
                            // 用户id
                            id: '3456234114357679023',
                            // 用户名
                            name: 'Humfrey',
                            // 用户头像
                            avatar: 'https://cdn.discordapp.com/avatars/598588658177671188/df122ff3d7dfa25674aed205a043684f.webp?size=128',
                            // 用户状态
                            status: 'offline',
                        },
                        {
                            // 用户id
                            id: '345623411435767907',
                            // 用户名
                            name: 'KLjaksdjf',
                            // 用户头像
                            avatar: 'https://cdn.discordapp.com/avatars/958631735489359882/de9b28a508261d4e547d0a38e2d1ba72.webp?size=128',
                            // 用户状态
                            status: 'busy',
                        },
                        {
                            // 用户id
                            id: '3456234161435767908',
                            // 用户名
                            name: 'Wand of hahaa 2.0',
                            // 用户头像
                            avatar: 'https://cdn.discordapp.com/guilds/296399356196552705/users/895571799956410388/avatars/b22dedba1dac0fbcb9fc274e62238b08.webp?size=128',
                            // 用户状态
                            status: 'offline',
                        },
                        {
                            // 用户id
                            id: '3456234114357677908',
                            // 用户名
                            name: 'All Badges% Speedrunner',
                            // 用户头像
                            avatar: 'https://cdn.discordapp.com/avatars/482216415147982848/c2b04dce7319282ff2cdc6275e13d52a.webp?size=128',
                            // 用户状态
                            status: 'busy',
                        },
                        {
                            // 用户id
                            id: '3456234114357679088',
                            // 用户名
                            name: '484 Baahlkia',
                            // 用户头像
                            avatar: 'https://cdn.discordapp.com/avatars/390649893661966351/0da35f7486e4d7cb86b28454978c8376.webp?size=128',
                            // 用户状态
                            status: 'busy',
                        },
                        {
                            // 用户id
                            id: '3456234114357679087',
                            // 用户名
                            name: 'Wand of hahaa 2.0',
                            // 用户头像
                            avatar: 'https://cdn.discordapp.com/guilds/296399356196552705/users/895571799956410388/avatars/b22dedba1dac0fbcb9fc274e62238b08.webp?size=128',
                            // 用户状态
                            status: 'busy',
                        },
                        {
                            // 用户id
                            id: '3456234114357679082',
                            // 用户名
                            name: 'Trashbox Bobylev',
                            // 用户头像
                            avatar: 'https://cdn.discordapp.com/avatars/337268327896317962/59f764a760a1c96850f26e630f74aa42.webp?size=128',
                            // 用户状态
                            status: 'busy',
                        },
                    ],
                },
            };
        },
    },
];

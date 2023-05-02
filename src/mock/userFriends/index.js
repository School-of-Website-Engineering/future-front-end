// 用户信息
export default [
    {
        // 请求方式: 'get',
        method: 'get',
        // 请求路径: '/userFriends/getCurrentUser',
        url: '/userFriends/getCurrentUser',
        //响应数据
        response: () => {
            return {
                code: 200,
                message: 'success',
                data: {
                    id: '1235413251345132',
                    username: 'test',
                    email: '123@gmail.com',
                    createdAt: '2020-12-12',
                    updatedAt: '2020-12-12',
                    avatar: 'https://cdn.discordapp.com/avatars/615354796781862913/11ec6f364a0e4b6ceef007fe18c382b3.webp?size=240',
                    introduction: 'test',
                    role: 'admin',
                    status: 'online',
                },
            };
        },
    },
    //     根据当前好友id，查询共同加入的服务器数量与好友数量
    {
        url: '/userFriends/getCommonServerCount',
        method: 'get',
        response: ({ query }) => {
            const { friendId } = query;
            switch (friendId) {
                case '345623411435767898':
                    return {
                        code: 200,
                        message: 'success',
                        data: {
                            commonServer: [
                                {
                                    id: '437456121056741327',
                                    name: 'gpt',
                                    icon: 'https://cdn.discordapp.com/icons/974519864045756446/d7ec4ed5884437bae0333aa345a97160.webp?size=160',
                                },
                            ],
                            commonFriend: [
                                {
                                    id: '345623411435767900',
                                    name: '[ECM]HamSter',
                                    // 头像
                                    avatar: 'https://cdn.discordapp.com/avatars/760729927552729119/20167f95c93ef46167737aee7201cb92.webp?size=60',
                                },
                                {
                                    id: '760729927552729119',
                                    name: 'liuliu',
                                    avatar: 'https://cdn.discordapp.com/avatars/1042734257149329418/5ab3131122ac145db5f2edf29e5a7730.webp?size=48',
                                },
                            ],
                        },
                    };
                case '345623411435767899':
                    return {
                        code: 200,
                        message: 'success',
                        data: {
                            commonServer: [
                                {
                                    id: '437456121056741327',
                                    name: 'gpt',
                                    icon: 'https://cdn.discordapp.com/icons/974519864045756446/d7ec4ed5884437bae0333aa345a97160.webp?size=160',
                                },
                                {
                                    id: '437456121056741329',
                                    name: '只因',
                                    icon: 'https://cdn.discordapp.com/icons/356833056562348042/a_7908c43b1e2f91125a7404c7adcb7372.webp?size=160',
                                },
                            ],
                            commonFriend: [
                                {
                                    id: '345623411435767900',
                                    name: '[ECM]HamSter',
                                    // 头像
                                    avatar: 'https://cdn.discordapp.com/avatars/760729927552729119/20167f95c93ef46167737aee7201cb92.webp?size=60',
                                },
                                {
                                    id: '760729927552729119',
                                    name: 'liuliu',
                                    avatar: 'https://cdn.discordapp.com/avatars/1042734257149329418/5ab3131122ac145db5f2edf29e5a7730.webp?size=48',
                                },
                            ],
                        },
                    };
                case '345623411435767900':
                    return {
                        code: 200,
                        message: 'success',
                        data: {
                            commonServer: [
                                {
                                    id: '437456121056741327',
                                    name: 'gpt',
                                    icon: 'https://cdn.discordapp.com/icons/974519864045756446/d7ec4ed5884437bae0333aa345a97160.webp?size=160',
                                },
                                {
                                    id: '437456121056741329',
                                    name: '只因',
                                    icon: 'https://cdn.discordapp.com/icons/356833056562348042/a_7908c43b1e2f91125a7404c7adcb7372.webp?size=160',
                                },
                                {
                                    id: '437456121056741326',
                                    name: 'rw',
                                    icon: 'https://cdn.discordapp.com/icons/721156457630007316/4428a5c5f5d740b0280415fa2f16d247.webp?size=160',
                                },
                            ],
                            commonFriend: [
                                {
                                    id: '345623411435767900',
                                    name: '[ECM]HamSter',
                                    // 头像
                                    avatar: 'https://cdn.discordapp.com/avatars/760729927552729119/20167f95c93ef46167737aee7201cb92.webp?size=60',
                                },
                                {
                                    id: '760729927552729119',
                                    name: 'liuliu',
                                    avatar: 'https://cdn.discordapp.com/avatars/1042734257149329418/5ab3131122ac145db5f2edf29e5a7730.webp?size=48',
                                },
                            ],
                        },
                    };
                case '345623411435767901':
                    return {
                        code: 200,
                        message: 'success',
                        data: {
                            commonServer: [
                                {
                                    id: '437456121056741327',
                                    name: 'gpt',
                                    icon: 'https://cdn.discordapp.com/icons/974519864045756446/d7ec4ed5884437bae0333aa345a97160.webp?size=160',
                                },
                                {
                                    id: '437456121056741329',
                                    name: '只因',
                                    icon: 'https://cdn.discordapp.com/icons/356833056562348042/a_7908c43b1e2f91125a7404c7adcb7372.webp?size=160',
                                },
                                {
                                    id: '437456121056741326',
                                    name: 'rw',
                                    icon: 'https://cdn.discordapp.com/icons/721156457630007316/4428a5c5f5d740b0280415fa2f16d247.webp?size=160',
                                },
                                {
                                    id: '437456121056741328',
                                    name: 'cube',
                                    icon: 'https://cdn.discordapp.com/avatars/744562248101396611/da75138093c6594eee95135c955cb972.webp?size=128',
                                },
                            ],
                            commonFriend: [
                                {
                                    id: '345623411435767900',
                                    name: '[ECM]HamSter',
                                    // 头像
                                    avatar: 'https://cdn.discordapp.com/avatars/760729927552729119/20167f95c93ef46167737aee7201cb92.webp?size=60',
                                },
                                {
                                    id: '760729927552729119',
                                    name: 'liuliu',
                                    avatar: 'https://cdn.discordapp.com/avatars/1042734257149329418/5ab3131122ac145db5f2edf29e5a7730.webp?size=48',
                                },
                            ],
                        },
                    };
                case '3456234114357679023':
                    return {
                        code: 200,
                        message: 'success',
                        data: {
                            commonServer: [
                                {
                                    id: '437456121056741327',
                                    name: 'gpt',
                                    icon: 'https://cdn.discordapp.com/icons/974519864045756446/d7ec4ed5884437bae0333aa345a97160.webp?size=160',
                                },
                                {
                                    id: '437456121056741329',
                                    name: '只因',
                                    icon: 'https://cdn.discordapp.com/icons/356833056562348042/a_7908c43b1e2f91125a7404c7adcb7372.webp?size=160',
                                },
                            ],
                            commonFriend: [
                                {
                                    id: '345623411435767900',
                                    name: '[ECM]HamSter',
                                    // 头像
                                    avatar: 'https://cdn.discordapp.com/avatars/760729927552729119/20167f95c93ef46167737aee7201cb92.webp?size=60',
                                },
                                {
                                    id: '760729927552729119',
                                    name: 'liuliu',
                                    avatar: 'https://cdn.discordapp.com/avatars/1042734257149329418/5ab3131122ac145db5f2edf29e5a7730.webp?size=48',
                                },
                            ],
                        },
                    };
                default:
                    return {
                        code: 200,
                        message: 'success',
                        data: {
                            commonServer: [],
                            commonFriend: [],
                        },
                    };
            }
        },
    },
    //     根据当前好友id，查询好友的信息
    {
        url: '/user/getFriendInfo',
        method: 'get',
        response: ({ query }) => {
            const { friendId } = query;
            switch (friendId) {
                case '345623411435767898':
                    return {
                        code: 200,
                        message: 'success',
                        data: {
                            friendInfo: {
                                username: 'liuliu',
                                //自我介绍
                                introduction:
                                    "Hello, I'm Ling. \n" +
                                    'I mainly code in Web and Java. \n' +
                                    'Recently.I am learning C# in Study.',
                                //头像
                                avatar: 'https://cdn.discordapp.com/avatars/615354796781862913/11ec6f364a0e4b6ceef007fe18c382b3.webp?size=128',
                                //注册时间，返回一个随机的时间，范围在2020-2023年
                                registerTime:
                                    '202' +
                                    Math.floor(Math.random() * 4) +
                                    '-' +
                                    Math.floor(Math.random() * 12) +
                                    '-' +
                                    Math.floor(Math.random() * 30),
                                // 背景
                                background:
                                    'https://cdn.discordapp.com/banners/615354796781862913/282618b6abb252e59ec1acc0ba1dbc20.png?size=1024',
                                //个人标签
                                tags: [
                                    {
                                        tag: '爱旅游',
                                    },
                                    {
                                        tag: '美食',
                                    },
                                    {
                                        tag: '自由职业者',
                                    },
                                ],
                            },
                        },
                    };
                case '345623411435767899':
                    return {
                        code: 200,
                        message: 'success',
                        data: {
                            friendInfo: {
                                username: '只因',
                                //自我介绍
                                introduction:
                                    "Hello, I'm Ling. \n" +
                                    'I mainly code in Web and Java. \n' +
                                    'Recently.I am learning C# in Study.',
                                //头像
                                avatar: 'https://cdn.discordapp.com/avatars/615354796781862913/11ec6f364a0e4b6ceef007fe18c382b3.webp?size=128',
                                //注册时间，返回一个随机的时间，范围在2020-2023年
                                registerTime:
                                    '202' +
                                    Math.floor(Math.random() * 4) +
                                    '-' +
                                    Math.floor(Math.random() * 12) +
                                    '-' +
                                    Math.floor(Math.random() * 30),
                                // 背景
                                background:
                                    'https://cdn.discordapp.com/banners/615354796781862913/282618b6abb252e59ec1acc0ba1dbc20.png?size=1024',
                                //个人标签
                                tags: [
                                    {
                                        tag: '爱旅游',
                                    },
                                    {
                                        tag: '美食',
                                    },
                                    {
                                        tag: '自由职业者',
                                    },
                                ],
                            },
                        },
                    };
                default:
                    //查不到好友信息
                    return {
                        code: 200,
                        message: 'success',
                        data: {
                            friendInfo: {},
                        },
                    };
            }
        },
    },
];

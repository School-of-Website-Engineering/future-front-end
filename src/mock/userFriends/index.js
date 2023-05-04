// 用户信息
export default [
    {
        // 请求方式: 'get',
        method  : 'get',
        // 请求路径: '/userFriends/getCurrentUser',
        url     : '/userFriends/getCurrentUser',
        //响应数据
        response: () => {
            return {
                code   : 200,
                message: 'success',
                data   : {
                    id          : '1235413251345132',
                    username    : 'test',
                    email       : '123@gmail.com',
                    createdAt   : '2020-12-12',
                    updatedAt   : '2020-12-12',
                    avatar      : 'https://cdn.discordapp.com/avatars/615354796781862913/11ec6f364a0e4b6ceef007fe18c382b3.webp?size=240',
                    introduction: 'test',
                    role        : 'admin',
                    status      : 'online'
                }
            };
        }
    },
    //     根据当前好友id，查询共同加入的服务器数量与好友数量
    {
        url     : '/userFriends/getCommonServerCount',
        method  : 'get',
        response: ({ query }) => {
            const { friendId } = query;
            switch (friendId) {
                case '345623411435767898':
                    return {
                        code   : 200,
                        message: 'success',
                        data   : {
                            commonServer: [
                                {
                                    id   : '437456121056741327',
                                    name : 'Open AI Server',
                                    icon : 'https://cdn.discordapp.com/icons/974519864045756446/d7ec4ed5884437bae0333aa345a97160.webp?size=160',
                                    tagId: '1152'
                                }
                            ],
                            commonFriend: [
                                {
                                    id    : '345623411435767900',
                                    name  : '[ECM]HamSter',
                                    // 头像
                                    avatar: 'https://cdn.discordapp.com/avatars/760729927552729119/20167f95c93ef46167737aee7201cb92.webp?size=60',
                                    tagId : '1145'
                                },
                                {
                                    id    : '760729927552729119',
                                    name  : 'liuliu',
                                    avatar: 'https://cdn.discordapp.com/avatars/1042734257149329418/5ab3131122ac145db5f2edf29e5a7730.webp?size=48',
                                    tagId : '4546'
                                }
                            ]
                        }
                    };
                case '345623411435767899':
                    return {
                        code   : 200,
                        message: 'success',
                        data   : {
                            commonServer: [
                                {
                                    id  : '437456121056741327',
                                    name: 'Open AI Server',
                                    icon: 'https://cdn.discordapp.com/icons/974519864045756446/d7ec4ed5884437bae0333aa345a97160.webp?size=160'
                                },
                                {
                                    id  : '437456121056741329',
                                    name: 'Red2-Dot Game',
                                    icon: 'https://cdn.discordapp.com/icons/356833056562348042/a_7908c43b1e2f91125a7404c7adcb7372.webp?size=160'
                                }
                            ],
                            commonFriend: [
                                {
                                    id    : '345623411435767900',
                                    name  : '[ECM]HamSter',
                                    // 头像
                                    avatar: 'https://cdn.discordapp.com/avatars/760729927552729119/20167f95c93ef46167737aee7201cb92.webp?size=60',
                                    tagId : '1145'
                                },
                                {
                                    id    : '760729927552729119',
                                    name  : 'liuliu',
                                    avatar: 'https://cdn.discordapp.com/avatars/1042734257149329418/5ab3131122ac145db5f2edf29e5a7730.webp?size=48',
                                    tagId : '4546'
                                }
                            ]
                        }
                    };
                case '345623411435767900':
                    return {
                        code   : 200,
                        message: 'success',
                        data   : {
                            commonServer: [
                                {
                                    id  : '437456121056741327',
                                    name: 'Open AI Server',
                                    icon: 'https://cdn.discordapp.com/icons/974519864045756446/d7ec4ed5884437bae0333aa345a97160.webp?size=160'
                                },
                                {
                                    id  : '437456121056741329',
                                    name: 'Red Dot-Game',
                                    icon: 'https://cdn.discordapp.com/icons/356833056562348042/a_7908c43b1e2f91125a7404c7adcb7372.webp?size=160'
                                },
                                {
                                    id  : '437456121056741326',
                                    name: 'RwMod-StarRiver',
                                    icon: 'https://cdn.discordapp.com/icons/721156457630007316/4428a5c5f5d740b0280415fa2f16d247.webp?size=160'
                                }
                            ],
                            commonFriend: [
                                {
                                    id    : '345623411435767901',
                                    name  : 'Catand',
                                    // 头像
                                    avatar: 'https://cdn.discordapp.com/avatars/616810767773335552/d730cfb881a0dbb685067cfa328f4bec.webp?size=100'
                                }
                            ]
                        }
                    };
                case '345623411435767901':
                    return {
                        code   : 200,
                        message: 'success',
                        data   : {
                            commonServer: [
                                {
                                    id  : '437456121056741327',
                                    name: 'Open AI Server',
                                    icon: 'https://cdn.discordapp.com/icons/974519864045756446/d7ec4ed5884437bae0333aa345a97160.webp?size=160'
                                },
                                {
                                    id  : '437456121056741329',
                                    name: 'Red Dot-Game',
                                    icon: 'https://cdn.discordapp.com/icons/356833056562348042/a_7908c43b1e2f91125a7404c7adcb7372.webp?size=160'
                                },
                                {
                                    id  : '437456121056741326',
                                    name: 'RwMod-StarRiver',
                                    icon: 'https://cdn.discordapp.com/icons/721156457630007316/4428a5c5f5d740b0280415fa2f16d247.webp?size=160'
                                },
                                {
                                    id  : '437456121056741328',
                                    name: 'Cube',
                                    icon: 'https://cdn.discordapp.com/avatars/744562248101396611/da75138093c6594eee95135c955cb972.webp?size=128'
                                }
                            ],
                            commonFriend: [
                                {
                                    id    : '345623411435767900',
                                    name  : '[ECM]HamSter',
                                    // 头像
                                    avatar: 'https://cdn.discordapp.com/avatars/760729927552729119/20167f95c93ef46167737aee7201cb92.webp?size=60'
                                },
                                {
                                    id    : '3456234161435767908',
                                    name  : 'NaRiver',
                                    avatar: 'https://cdn.discordapp.com/avatars/1049673722434437160/23653805be14a796eb0fab4795cc6f7a.webp?size=100'
                                },
                                {
                                    id    : '3456234114357679088',
                                    name  : 'EElainaya',
                                    avatar: 'https://cdn.discordapp.com/avatars/763298729762488330/6d1ec1e2b226fab6ee79231604cd87a7.webp?size=100'
                                }
                            ]
                        }
                    };
                case '3456234114357679023':
                    return {
                        code   : 200,
                        message: 'success',
                        data   : {
                            commonServer: [
                                {
                                    id   : '437456121056741327',
                                    name : 'Open AI Server',
                                    icon : 'https://cdn.discordapp.com/icons/974519864045756446/d7ec4ed5884437bae0333aa345a97160.webp?size=160',
                                    //     标签id
                                    tagId: '1152'
                                },
                                {
                                    id   : '437456121056741329',
                                    name : 'Red-Dot Game',
                                    icon : 'https://cdn.discordapp.com/icons/356833056562348042/a_7908c43b1e2f91125a7404c7adcb7372.webp?size=160',
                                    tagId: '1492'
                                }
                            ],
                            commonFriend: [
                                {
                                    id    : '345623411435767900',
                                    name  : '[ECM]HamSter',
                                    // 头像
                                    avatar: 'https://cdn.discordapp.com/avatars/760729927552729119/20167f95c93ef46167737aee7201cb92.webp?size=60'
                                },
                                {
                                    id    : '760729927552729119',
                                    name  : 'liuliu',
                                    avatar: 'https://cdn.discordapp.com/avatars/1042734257149329418/5ab3131122ac145db5f2edf29e5a7730.webp?size=48'
                                }
                            ]
                        }
                    };
                default:
                    return {
                        code   : 200,
                        message: 'success',
                        data   : {
                            commonServer: [],
                            commonFriend: []
                        }
                    };
            }
        }
    },
    //     根据当前好友id，查询好友的信息
    {
        url     : '/user/getFriendInfo',
        method  : 'get',
        response: ({ query }) => {
            const { friendId } = query;
            switch (friendId) {
                case '345623411435767898':
                    return {
                        code   : 200,
                        message: 'success',
                        data   : {
                            friendInfo: {
                                username    : 'liuliu',
                                //自我介绍
                                introduction: '书山有路勤为径，学海无涯苦作舟。',
                                //头像
                                avatar      : 'https://cdn.discordapp.com/avatars/1042734257149329418/5ab3131122ac145db5f2edf29e5a7730.webp?size=48',
                                //注册时间，返回一个随机的时间，范围在2020-2023年
                                registerTime:
                                    '202' +
                                    Math.floor(Math.random() * 4) +
                                    '-' +
                                    Math.floor(Math.random() * 12) +
                                    '-' +
                                    Math.floor(Math.random() * 30),
                                // 背景
                                background   : '',
                                // 备注
                                remark       : '',
                                // 状态
                                /**
                                 * 在线 online
                                 * 离线 offline
                                 * 闲置 idle
                                 * 忙碌 dnd
                                 */
                                status       : 'online',
                                discriminator: '4546',
                                //个人标签
                                tags         : [
                                    {
                                        tag : 'Future-飞翔',
                                        link: 'https://cdn.discordapp.com/badge-icons/3aa41de486fa12454c3761e8e223442e.png'
                                    },
                                    {
                                        tag : 'Speed 徽章',
                                        link: 'https://cdn.discordapp.com/badge-icons/2ba85e8026a8614b640c2837bcdfe21b.png'
                                    },
                                    {
                                        tag : '钻石测试人员',
                                        link: 'https://cdn.discordapp.com/badge-icons/51040c70d4f20a921ad6674ff86fc95c.png'
                                    }
                                ]
                            }
                        }
                    };
                case '345623411435767899':
                    return {
                        code   : 200,
                        message: 'success',
                        data   : {
                            friendInfo: {
                                username    : 'Ye Ldzy>>',
                                //自我介绍
                                introduction: "Hello, I'm cat",
                                //头像
                                avatar      : 'https://cdn.discordapp.com/avatars/891419145592266812/c8578ca93da963aa9edfdae6111a1a23.webp?size=128',
                                //注册时间，返回一个随机的时间，范围在2020-2023年
                                registerTime:
                                    '202' +
                                    Math.floor(Math.random() * 4) +
                                    '-' +
                                    Math.floor(Math.random() * 12) +
                                    '-' +
                                    Math.floor(Math.random() * 30),
                                // 背景
                                background   : '',
                                discriminator: '2412',
                                //个人标签
                                tags         : [
                                    {
                                        tag : 'Future-勇气',
                                        link: 'https://cdn.discordapp.com/badge-icons/8a88d63823d8a71cd5e390baa45efa02.png'
                                    },
                                    {
                                        tag : '开发人员',
                                        link: 'https://cdn.discordapp.com/badge-icons/6f9e37f9029ff57aef81db857890005e.png'
                                    }
                                ]
                            }
                        }
                    };
                case '345623411435767900':
                    return {
                        code   : 200,
                        message: 'success',
                        data   : {
                            friendInfo: {
                                username    : '[ECM]HamSter',
                                //自我介绍
                                introduction: '你好，我是仓鼠。',
                                //头像
                                avatar      : 'https://cdn.discordapp.com/avatars/760729927552729119/20167f95c93ef46167737aee7201cb92.webp?size=48',
                                //注册时间，返回一个随机的时间，范围在2020-2023年
                                registerTime:
                                    '202' +
                                    Math.floor(Math.random() * 4) +
                                    '-' +
                                    Math.floor(Math.random() * 12) +
                                    '-' +
                                    Math.floor(Math.random() * 30),
                                // 背景
                                background   : '',
                                discriminator: '1145',
                                //个人标签
                                tags         : [
                                    {
                                        tag : 'Future-勇气',
                                        link: 'https://cdn.discordapp.com/badge-icons/8a88d63823d8a71cd5e390baa45efa02.png'
                                    },
                                    {
                                        tag : 'C++开发-[已认证]',
                                        link: 'https://cdn.discordapp.com/badge-icons/6f9e37f9029ff57aef81db857890005e.png'
                                    }
                                ]
                            }
                        }
                    };
                case '345623411435767901':
                    return {
                        code   : 200,
                        message: 'success',
                        data   : {
                            friendInfo: {
                                username    : 'Catand',
                                //自我介绍
                                introduction: '我是一只大老鼠，我最喜欢奶油和奶酪。',
                                //头像
                                avatar      : 'https://cdn.discordapp.com/avatars/616810767773335552/d730cfb881a0dbb685067cfa328f4bec.webp?size=100',
                                //注册时间，返回一个随机的时间，范围在2020-2023年
                                registerTime:
                                    '202' +
                                    Math.floor(Math.random() * 4) +
                                    '-' +
                                    Math.floor(Math.random() * 12) +
                                    '-' +
                                    Math.floor(Math.random() * 30),
                                // 背景
                                background   : '',
                                discriminator: '6531',
                                //个人标签
                                tags         : [
                                    {
                                        tag : 'Future-智慧',
                                        link: 'https://cdn.discordapp.com/badge-icons/011940fd013da3f7fb926e4a1cd2e618.png'
                                    },
                                    {
                                        tag : 'Java高级开发-[已认证]',
                                        link: 'https://cdn.discordapp.com/badge-icons/6f9e37f9029ff57aef81db857890005e.png'
                                    }
                                ]
                            }
                        }
                    };
                case '3456234114357679023':
                    return {
                        code   : 200,
                        message: 'success',
                        data   : {
                            friendInfo: {
                                username    : 'Humfrey',
                                //自我介绍
                                introduction: '诗与远方',
                                //头像
                                avatar      : 'https://cdn.discordapp.com/avatars/598588658177671188/df122ff3d7dfa25674aed205a043684f.webp?size=128',
                                //注册时间，返回一个随机的时间，范围在2020-2023年
                                registerTime:
                                    '202' +
                                    Math.floor(Math.random() * 4) +
                                    '-' +
                                    Math.floor(Math.random() * 12) +
                                    '-' +
                                    Math.floor(Math.random() * 30),
                                // 背景
                                background   : '',
                                discriminator: '6531',
                                //个人标签
                                tags         : [
                                    {
                                        tag : 'Future-智慧',
                                        link: 'https://cdn.discordapp.com/badge-icons/011940fd013da3f7fb926e4a1cd2e618.png'
                                    },
                                    {
                                        tag : 'Future-合作开发者',
                                        link: 'https://cdn.discordapp.com/badge-icons/6df5892e0f35b051f8b61eace34f4967.png'
                                    }
                                ]
                            }
                        }
                    };
                default:
                    //查不到好友信息
                    return {
                        code   : 200,
                        message: 'success',
                        data   : {
                            friendInfo: {}
                        }
                    };
            }
        }
    }
];

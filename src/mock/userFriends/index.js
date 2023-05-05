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
                                    avatar: 'https://cdn.discordapp.com/avatars/616810767773335552/d730cfb881a0dbb685067cfa328f4bec.webp?size=100',
                                    tagId : '6531'
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
                                    tagId : '1145',
                                    // 头像
                                    avatar: 'https://cdn.discordapp.com/avatars/760729927552729119/20167f95c93ef46167737aee7201cb92.webp?size=60'
                                },
                                {
                                    id    : '3456234161435767908',
                                    name  : 'NaRiver',
                                    tagId : '8731',
                                    avatar: 'https://cdn.discordapp.com/avatars/1049673722434437160/23653805be14a796eb0fab4795cc6f7a.webp?size=100'
                                },
                                {
                                    id    : '3456234114357679088',
                                    name  : 'EElainaya',
                                    tagId : '8312',
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
                                    tagId : '1145',
                                    // 头像
                                    avatar: 'https://cdn.discordapp.com/avatars/760729927552729119/20167f95c93ef46167737aee7201cb92.webp?size=60'
                                },
                                {
                                    id    : '760729927552729119',
                                    name  : 'liuliu',
                                    tagId : '4546',
                                    avatar: 'https://cdn.discordapp.com/avatars/1042734257149329418/5ab3131122ac145db5f2edf29e5a7730.webp?size=48'
                                }
                            ]
                        }
                    };
                case '3456234161435767908':
                    return {
                        code   : 200,
                        message: 'success',
                        data   : {
                            commonServer: [
                                {
                                    id   : '437456121056741327',
                                    name : "Sid Meier's Civilization VI",
                                    icon : 'https://img-macjb.mac89.com/ico/201804/19122848_d3fb92409b.png',
                                    //     标签id
                                    tagId: '1152'
                                }
                            ],
                            commonFriend: [
                                {
                                    id    : '345623411435767900',
                                    name  : '[ECM]HamSter',
                                    tagId : '1145',
                                    // 头像
                                    avatar: 'https://cdn.discordapp.com/avatars/760729927552729119/20167f95c93ef46167737aee7201cb92.webp?size=60'
                                },
                                {
                                    id    : '345623411435767901',
                                    name  : 'Catand',
                                    tagId : '6531',
                                    avatar: 'https://cdn.discordapp.com/avatars/616810767773335552/d730cfb881a0dbb685067cfa328f4bec.webp?size=100'
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
                                    // 系统从0开始，因此+1
                                    (Math.floor(Math.random() * 12) + 1) +
                                    '-' +
                                    (Math.floor(Math.random() * 30) + 1),
                                // 背景
                                background:
                                    'https://imgs.aixifan.com/newUpload/32226413_1d1791b36bb14a94b81ee95ebdb0dec8.jpg.gif',
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
                                        link: 'https://cdn.discordapp.com/badge-icons/ec92202290b48d0879b7413d2dde3bab.png'
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
                                status      : 'idle',
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
                                background:
                                    'https://cdn.discordapp.com/banners/189990173222764545/56cf7de243f9c51904b8a16c4351d8ae.png?size=600',
                                discriminator: '2412',
                                //个人标签
                                tags         : [
                                    {
                                        tag : 'Future-勇气',
                                        link: 'https://cdn.discordapp.com/badge-icons/8a88d63823d8a71cd5e390baa45efa02.png'
                                    },
                                    {
                                        tag : 'Python开发-[已认证]',
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
                                status      : 'online',
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
                                background:
                                    'https://img.mp.itc.cn/upload/20160929/e0ad6e7fb6714b0eb2f6b60598f124b9_th.jpg',
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
                                status      : 'dnd',
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
                                background   : 'https://images.chinatimes.com/newsphoto/2016-07-19/656/20160719006500.jpg',
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
                                    },
                                    {
                                        tag : 'Future-年度会员徽章',
                                        link: 'https://cdn.discordapp.com/badge-icons/bf01d1073931f921909045f3a39fd264.png'
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
                                status      : 'online',
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
                                background   : 'https://img.soogif.com/zz5o9U8NVHjJ8sw8kdPawzqG2OvIV25L.gif',
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
                                    },
                                    {
                                        tag : 'Future-年度会员徽章',
                                        link: 'https://cdn.discordapp.com/badge-icons/bf01d1073931f921909045f3a39fd264.png'
                                    }
                                ]
                            }
                        }
                    };
                case '345623411435767907':
                    return {
                        code   : 200,
                        message: 'success',
                        data   : {
                            friendInfo: {
                                username    : 'Cold Mint',
                                status      : 'online',
                                //自我介绍
                                introduction: '认识你很高兴。\n' + 'Nice to meet you.',
                                //头像
                                avatar      : 'https://cdn.discordapp.com/avatars/763293201062035486/5396342ba4e3bf24661c146cdae526a1.webp?size=100',
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
                                    'https://steamuserimages-a.akamaihd.net/ugc/854982622967037616/BD9B30C53B4FCC29CBA1C51924BE65D562E545DE/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
                                discriminator: '7321',
                                //个人标签
                                tags         : [
                                    {
                                        tag : 'Future-飞翔',
                                        link: 'https://cdn.discordapp.com/badge-icons/3aa41de486fa12454c3761e8e223442e.png'
                                    },
                                    {
                                        tag : 'Future-合作开发者',
                                        link: 'https://cdn.discordapp.com/badge-icons/6df5892e0f35b051f8b61eace34f4967.png'
                                    },
                                    {
                                        tag : 'Java高级开发-[已认证]',
                                        link: 'https://cdn.discordapp.com/badge-icons/6f9e37f9029ff57aef81db857890005e.png'
                                    },
                                    {
                                        tag : 'Future-年度会员徽章',
                                        link: 'https://cdn.discordapp.com/badge-icons/bf01d1073931f921909045f3a39fd264.png'
                                    }
                                ]
                            }
                        }
                    };
                case '3456234161435767908':
                    return {
                        code   : 200,
                        message: 'success',
                        data   : {
                            friendInfo: {
                                username    : 'NaRiver',
                                //自我介绍
                                introduction: '和Ling一起玩文明VI，这是计划的一部分',
                                status      : 'idle',
                                //头像
                                avatar      : 'https://cdn.discordapp.com/avatars/1049673722434437160/23653805be14a796eb0fab4795cc6f7a.webp?size=100',
                                //注册时间，返回一个随机的时间，范围在2020-2023年
                                registerTime:
                                    '202' +
                                    Math.floor(Math.random() * 4) +
                                    '-' +
                                    Math.floor(Math.random() * 12) +
                                    '-' +
                                    Math.floor(Math.random() * 30),
                                // 背景
                                background   : 'https://datoumaomi.github.io/pic/www/wenming6/logo.jpg',
                                discriminator: '8731',
                                //个人标签
                                tags         : [
                                    {
                                        tag : 'Future-勇气',
                                        link: 'https://cdn.discordapp.com/badge-icons/8a88d63823d8a71cd5e390baa45efa02.png'
                                    },
                                    {
                                        tag : 'Future-年度会员徽章',
                                        link: 'https://cdn.discordapp.com/badge-icons/bf01d1073931f921909045f3a39fd264.png'
                                    },
                                    {
                                        tag : '文明VI-捍卫者徽章(本体版全帝国胜利)',
                                        link: 'https://cdn.discordapp.com/badge-icons/fee1624003e2fee35cb398e125dc479b.png'
                                    }
                                ]
                            }
                        }
                    };
                case '3456234114357677908':
                    return {
                        code   : 200,
                        message: 'success',
                        data   : {
                            friendInfo: {
                                username    : 'Deep Water',
                                status      : 'dnd',
                                //自我介绍
                                introduction: '',
                                //头像
                                avatar      : 'https://cdn.discordapp.com/avatars/482216415147982848/c2b04dce7319282ff2cdc6275e13d52a.webp?size=128',
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
                                    'https://cdn.sputniknews.cn/img/102766/34/1027663447_0:257:2731:1793_1920x0_80_0_0_e115217d774edd7ab0314c48ba40b63a.jpg',
                                discriminator: '9250',
                                //个人标签
                                tags         : [
                                    {
                                        tag : 'Future-勇气',
                                        link: 'https://cdn.discordapp.com/badge-icons/8a88d63823d8a71cd5e390baa45efa02.png'
                                    },
                                    {
                                        tag : 'Future-年度会员徽章',
                                        link: 'https://cdn.discordapp.com/badge-icons/bf01d1073931f921909045f3a39fd264.png'
                                    }
                                ]
                            }
                        }
                    };
                case '3456234114357679088':
                    return {
                        code   : 200,
                        message: 'success',
                        data   : {
                            friendInfo: {
                                username    : 'EElainaya',
                                status      : 'online',
                                //自我介绍
                                introduction: '呐呐呐呐呐呐呐呐呐呐呐呐呐呐呐呐呐呐呐呐……',
                                //头像
                                avatar      : 'https://cdn.discordapp.com/avatars/763298729762488330/6d1ec1e2b226fab6ee79231604cd87a7.webp?size=100',
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
                                    'https://i.pinimg.com/originals/c1/93/04/c193049e8bd34b6b11f3b704ea390cc4.gif',
                                discriminator: '8312',
                                //个人标签
                                tags         : [
                                    {
                                        tag : 'Future-飞翔',
                                        link: 'https://cdn.discordapp.com/badge-icons/3aa41de486fa12454c3761e8e223442e.png'
                                    },
                                    {
                                        tag : 'Future-合作开发者',
                                        link: 'https://cdn.discordapp.com/badge-icons/6df5892e0f35b051f8b61eace34f4967.png'
                                    },
                                    {
                                        tag : 'Java高级开发-[已认证]',
                                        link: 'https://cdn.discordapp.com/badge-icons/6f9e37f9029ff57aef81db857890005e.png'
                                    },
                                    {
                                        tag : 'Future-年度会员徽章',
                                        link: 'https://cdn.discordapp.com/badge-icons/bf01d1073931f921909045f3a39fd264.png'
                                    }
                                ]
                            }
                        }
                    };
                case '3456234114357679087':
                    return {
                        code   : 200,
                        message: 'success',
                        data   : {
                            friendInfo: {
                                username: 'Mr.Smith',
                                status  : 'idle',
                                //自我介绍
                                introduction:
                                    '"We could be born to anything and now, and now\n' +
                                    'What you have done is terrible\n' +
                                    'And now you, and now you\n' +
                                    'Now you carry it with you"',
                                //头像
                                avatar: 'https://cdn.discordapp.com/avatars/511265015647436820/6db4e889181655645d92b70e53542dba.webp?size=100',
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
                                    'https://cdn.discordapp.com/banners/511265015647436820/b8ef6dddb0b1fb3762ba642558ca401c.png?size=600',
                                discriminator: '3312',
                                //个人标签
                                tags         : [
                                    {
                                        tag : 'Future-飞翔',
                                        link: 'https://cdn.discordapp.com/badge-icons/3aa41de486fa12454c3761e8e223442e.png'
                                    },
                                    {
                                        tag : 'Java高级开发-[已认证]',
                                        link: 'https://cdn.discordapp.com/badge-icons/6f9e37f9029ff57aef81db857890005e.png'
                                    },
                                    {
                                        tag : 'Future-年度会员徽章',
                                        link: 'https://cdn.discordapp.com/badge-icons/bf01d1073931f921909045f3a39fd264.png'
                                    }
                                ]
                            }
                        }
                    };
                case '3456234114357679082':
                    return {
                        code   : 200,
                        message: 'success',
                        data   : {
                            friendInfo: {
                                username    : 'Ms.Timesiana',
                                status      : 'online',
                                //自我介绍
                                introduction: '首先要认清自己，然后才能进步。',
                                //头像
                                avatar      : 'https://cdn.discordapp.com/avatars/809486916612653129/95831cc675c39c894cc7c43af398c5f4.webp?size=100',
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
                                    'https://cdn.discordapp.com/banners/165047934113677312/ce18db518c121a6259e6ff7c49b0bada.png?size=600',
                                discriminator: '9285',
                                //个人标签
                                tags         : [
                                    {
                                        tag : 'Future-勇气',
                                        link: 'https://cdn.discordapp.com/badge-icons/8a88d63823d8a71cd5e390baa45efa02.png'
                                    },
                                    {
                                        tag : 'Java&C++全栈高级开发-[已认证]',
                                        link: 'https://cdn.discordapp.com/badge-icons/6bdc42827a38498929a4920da12695d9.png'
                                    },
                                    {
                                        tag : 'Future-年度会员徽章',
                                        link: 'https://cdn.discordapp.com/badge-icons/bf01d1073931f921909045f3a39fd264.png'
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

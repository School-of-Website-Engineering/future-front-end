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
                    avatar      : 'http://39.105.229.249/ftp/ling/future/user/ling.webp',
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
                            commonServer: [],
                            commonFriend: [
                                {
                                    id    : '345623411435767900',
                                    name  : '[ECM]HamSter',
                                    // 头像
                                    avatar: 'http://39.105.229.249/ftp/ling/future/user/ecm.webp',
                                    tagId : '1145'
                                },
                                {
                                    id    : '760729927552729119',
                                    name  : 'liuliu',
                                    avatar: 'http://39.105.229.249/ftp/ling/future/user/liuliu.webp',
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
                                    icon: 'http://39.105.229.249/ftp/ling/future/server/gpt.webp'
                                },
                                {
                                    id  : '437456121056741329',
                                    name: 'Red2-Dot Game',
                                    icon: 'http://39.105.229.249/ftp/ling/future/server/l2.webp'
                                }
                            ],
                            commonFriend: [
                                {
                                    id    : '345623411435767900',
                                    name  : '[ECM]HamSter',
                                    // 头像
                                    avatar: 'http://39.105.229.249/ftp/ling/future/user/ecm.webp',
                                    tagId : '1145'
                                },
                                {
                                    id    : '760729927552729119',
                                    name  : 'liuliu',
                                    avatar: 'http://39.105.229.249/ftp/ling/future/user/liuliu.webp',
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
                                    icon: 'http://39.105.229.249/ftp/ling/future/server/gpt.webp'
                                },
                                {
                                    id  : '437456121056741329',
                                    name: 'Red Dot-Game',
                                    icon: 'http://39.105.229.249/ftp/ling/future/server/l2.webp'
                                },
                                {
                                    id  : '437456121056741326',
                                    name: 'RwMod-StarRiver',
                                    icon: 'http://39.105.229.249/ftp/ling/future/server/star.webp'
                                }
                            ],
                            commonFriend: [
                                {
                                    id    : '345623411435767901',
                                    name  : 'Catand',
                                    // 头像
                                    avatar: 'http://39.105.229.249/ftp/ling/future/user/catand.webp',
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
                                    icon: 'http://39.105.229.249/ftp/ling/future/server/gpt.webp'
                                },
                                {
                                    id  : '437456121056741329',
                                    name: 'Red Dot-Game',
                                    icon: 'http://39.105.229.249/ftp/ling/future/server/l2.webp'
                                },
                                {
                                    id  : '437456121056741326',
                                    name: 'RwMod-StarRiver',
                                    icon: 'http://39.105.229.249/ftp/ling/future/server/star.webp'
                                },
                                {
                                    id  : '437456121056741328',
                                    name: 'Cube',
                                    icon: 'http://39.105.229.249/ftp/ling/future/server/cube.webp'
                                }
                            ],
                            commonFriend: [
                                {
                                    id    : '345623411435767900',
                                    name  : '[ECM]HamSter',
                                    tagId : '1145',
                                    // 头像
                                    avatar: 'http://39.105.229.249/ftp/ling/future/user/ecm.webp'
                                },
                                {
                                    id    : '3456234161435767908',
                                    name  : 'NaRiver',
                                    tagId : '8731',
                                    avatar: 'http://39.105.229.249/ftp/ling/future/user/nr.webp'
                                },
                                {
                                    id    : '3456234114357679088',
                                    name  : 'EElainaya',
                                    tagId : '8312',
                                    avatar: 'http://39.105.229.249/ftp/ling/future/user/eely.webp'
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
                                    icon : 'http://39.105.229.249/ftp/ling/future/server/gpt.webp',
                                    //     标签id
                                    tagId: '1152'
                                },
                                {
                                    id   : '437456121056741329',
                                    name : 'Red-Dot Game',
                                    icon : 'http://39.105.229.249/ftp/ling/future/server/l2.webp',
                                    tagId: '1492'
                                }
                            ],
                            commonFriend: [
                                {
                                    id    : '345623411435767900',
                                    name  : '[ECM]HamSter',
                                    tagId : '1145',
                                    // 头像
                                    avatar: 'http://39.105.229.249/ftp/ling/future/user/ecm.webp'
                                },
                                {
                                    id    : '760729927552729119',
                                    name  : 'liuliu',
                                    tagId : '4546',
                                    avatar: 'http://39.105.229.249/ftp/ling/future/user/liuliu.webp'
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
                                    icon : 'http://39.105.229.249/ftp/ling/future/server/svi.png',
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
                                    avatar: 'http://39.105.229.249/ftp/ling/future/user/ecm.webp'
                                },
                                {
                                    id    : '345623411435767901',
                                    name  : 'Catand',
                                    tagId : '6531',
                                    avatar: 'http://39.105.229.249/ftp/ling/future/user/catand.webp'
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
                                avatar      : 'http://39.105.229.249/ftp/ling/future/user/liuliu.webp',
                                //注册时间，返回一个随机的时间，范围在2020-2023年
                                registerTime:
                                    '202' +
                                    Math.floor(Math.random() * 3) +
                                    '-' +
                                    // 系统从0开始，因此+1
                                    (Math.floor(Math.random() * 12) + 1) +
                                    '-' +
                                    (Math.floor(Math.random() * 30) + 1),
                                // 背景
                                background   : 'http://39.105.229.249/ftp/ling/future/background/fox.gif',
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
                                        link: 'http://39.105.229.249/ftp/ling/future/badges/fly.png'
                                    },
                                    {
                                        tag : 'Speed 徽章',
                                        link: 'http://39.105.229.249/ftp/ling/future/badges/spend.png'
                                    },
                                    {
                                        tag : '钻石测试人员',
                                        link: 'http://39.105.229.249/ftp/ling/future/badges/dimand.png'
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
                                avatar      : 'http://39.105.229.249/ftp/ling/future/user/yedz.webp',
                                //注册时间，返回一个随机的时间，范围在2020-2023年
                                registerTime:
                                    '202' +
                                    Math.floor(Math.random() * 3) +
                                    '-' +
                                    // 系统从0开始，因此+1
                                    (Math.floor(Math.random() * 12) + 1) +
                                    '-' +
                                    (Math.floor(Math.random() * 30) + 1),
                                // 背景
                                background   : 'http://39.105.229.249/ftp/ling/future/background/cat.png',
                                discriminator: '2412',
                                //个人标签
                                tags         : [
                                    {
                                        tag : 'Future-勇气',
                                        link: 'http://39.105.229.249/ftp/ling/future/badges/good.png'
                                    },
                                    {
                                        tag : 'Python开发-[已认证]',
                                        link: 'http://39.105.229.249/ftp/ling/future/badges/code.png'
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
                                avatar      : 'http://39.105.229.249/ftp/ling/future/user/ecm.webp',
                                //注册时间，返回一个随机的时间，范围在2020-2023年
                                registerTime:
                                    '202' +
                                    Math.floor(Math.random() * 3) +
                                    '-' +
                                    // 系统从0开始，因此+1
                                    (Math.floor(Math.random() * 12) + 1) +
                                    '-' +
                                    (Math.floor(Math.random() * 30) + 1),
                                // 背景
                                background   : 'http://39.105.229.249/ftp/ling/future/background/road.jpg',
                                discriminator: '1145',
                                //个人标签
                                tags         : [
                                    {
                                        tag : 'Future-勇气',
                                        link: 'http://39.105.229.249/ftp/ling/future/badges/good.png'
                                    },
                                    {
                                        tag : 'C++开发-[已认证]',
                                        link: 'http://39.105.229.249/ftp/ling/future/badges/code.png'
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
                                avatar      : 'http://39.105.229.249/ftp/ling/future/user/catand.webp',
                                //注册时间，返回一个随机的时间，范围在2020-2023年
                                registerTime:
                                    '202' +
                                    Math.floor(Math.random() * 3) +
                                    '-' +
                                    // 系统从0开始，因此+1
                                    (Math.floor(Math.random() * 12) + 1) +
                                    '-' +
                                    (Math.floor(Math.random() * 30) + 1),
                                // 背景
                                background   : 'http://39.105.229.249/ftp/ling/future/background/xp.jpg',
                                discriminator: '6531',
                                //个人标签
                                tags         : [
                                    {
                                        tag : 'Future-智慧',
                                        link: 'http://39.105.229.249/ftp/ling/future/badges/smart.png'
                                    },
                                    {
                                        tag : 'Java高级开发-[已认证]',
                                        link: 'http://39.105.229.249/ftp/ling/future/badges/code.png'
                                    },
                                    {
                                        tag : 'Future-年度会员徽章',
                                        link: 'http://39.105.229.249/ftp/ling/future/badges/vip.png'
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
                                avatar      : 'http://39.105.229.249/ftp/ling/future/user/humry.webp',
                                //注册时间，返回一个随机的时间，范围在2020-2023年
                                registerTime:
                                    '202' +
                                    Math.floor(Math.random() * 3) +
                                    '-' +
                                    // 系统从0开始，因此+1
                                    (Math.floor(Math.random() * 12) + 1) +
                                    '-' +
                                    (Math.floor(Math.random() * 30) + 1),
                                // 背景
                                background   : 'http://39.105.229.249/ftp/ling/future/background/gqj.gif',
                                discriminator: '6531',
                                //个人标签
                                tags         : [
                                    {
                                        tag : 'Future-智慧',
                                        link: 'http://39.105.229.249/ftp/ling/future/badges/smart.png'
                                    },
                                    {
                                        tag : 'Future-合作开发者',
                                        link: 'http://39.105.229.249/ftp/ling/future/badges/collents.png'
                                    },
                                    {
                                        tag : 'Future-年度会员徽章',
                                        link: 'http://39.105.229.249/ftp/ling/future/badges/vip.png'
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
                                avatar      : 'http://39.105.229.249/ftp/ling/future/user/cm.webp',
                                //注册时间，返回一个随机的时间，范围在2020-2023年
                                registerTime:
                                    '202' +
                                    Math.floor(Math.random() * 3) +
                                    '-' +
                                    // 系统从0开始，因此+1
                                    (Math.floor(Math.random() * 12) + 1) +
                                    '-' +
                                    (Math.floor(Math.random() * 30) + 1),
                                // 背景
                                background   : 'http://39.105.229.249/ftp/ling/future/background/bg.jpg',
                                discriminator: '7321',
                                //个人标签
                                tags         : [
                                    {
                                        tag : 'Future-飞翔',
                                        link: 'http://39.105.229.249/ftp/ling/future/badges/fly.png'
                                    },
                                    {
                                        tag : 'Future-合作开发者',
                                        link: 'http://39.105.229.249/ftp/ling/future/badges/collents.png'
                                    },
                                    {
                                        tag : 'Java高级开发-[已认证]',
                                        link: 'http://39.105.229.249/ftp/ling/future/badges/code.png'
                                    },
                                    {
                                        tag : 'Future-年度会员徽章',
                                        link: 'http://39.105.229.249/ftp/ling/future/badges/vip.png'
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
                                avatar      : 'http://39.105.229.249/ftp/ling/future/user/nr.webp',
                                //注册时间，返回一个随机的时间，范围在2020-2023年
                                registerTime:
                                    '202' +
                                    Math.floor(Math.random() * 3) +
                                    '-' +
                                    // 系统从0开始，因此+1
                                    (Math.floor(Math.random() * 12) + 1) +
                                    '-' +
                                    (Math.floor(Math.random() * 30) + 1),
                                // 背景
                                background   : 'http://39.105.229.249/ftp/ling/future/background/vi.jpg',
                                discriminator: '8731',
                                //个人标签
                                tags         : [
                                    {
                                        tag : 'Future-勇气',
                                        link: 'http://39.105.229.249/ftp/ling/future/badges/good.png'
                                    },
                                    {
                                        tag : 'Future-年度会员徽章',
                                        link: 'http://39.105.229.249/ftp/ling/future/badges/vip.png'
                                    },
                                    {
                                        tag : '文明VI-捍卫者徽章(本体版全帝国胜利)',
                                        link: 'http://39.105.229.249/ftp/ling/future/badges/vi.png'
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
                                avatar      : 'http://39.105.229.249/ftp/ling/future/user/dw.webp',
                                //注册时间，返回一个随机的时间，范围在2020-2023年
                                registerTime:
                                    '202' +
                                    Math.floor(Math.random() * 3) +
                                    '-' +
                                    // 系统从0开始，因此+1
                                    (Math.floor(Math.random() * 12) + 1) +
                                    '-' +
                                    (Math.floor(Math.random() * 30) + 1),
                                // 背景
                                background   : 'http://39.105.229.249/ftp/ling/future/background/water.jpg',
                                discriminator: '9250',
                                //个人标签
                                tags         : [
                                    {
                                        tag : 'Future-勇气',
                                        link: 'http://39.105.229.249/ftp/ling/future/badges/good.png'
                                    },
                                    {
                                        tag : 'Future-年度会员徽章',
                                        link: 'http://39.105.229.249/ftp/ling/future/badges/vip.png'
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
                                avatar      : 'http://39.105.229.249/ftp/ling/future/user/eely.webp',
                                //注册时间，返回一个随机的时间，范围在2020-2023年
                                registerTime:
                                    '202' +
                                    Math.floor(Math.random() * 3) +
                                    '-' +
                                    // 系统从0开始，因此+1
                                    (Math.floor(Math.random() * 12) + 1) +
                                    '-' +
                                    (Math.floor(Math.random() * 30) + 1),
                                // 背景
                                background   : 'http://39.105.229.249/ftp/ling/future/background/eel.gif',
                                discriminator: '8312',
                                //个人标签
                                tags         : [
                                    {
                                        tag : 'Future-飞翔',
                                        link: 'http://39.105.229.249/ftp/ling/future/badges/fly.png'
                                    },
                                    {
                                        tag : 'Future-合作开发者',
                                        link: 'http://39.105.229.249/ftp/ling/future/badges/collents.png'
                                    },
                                    {
                                        tag : 'Java高级开发-[已认证]',
                                        link: 'http://39.105.229.249/ftp/ling/future/badges/code.png'
                                    },
                                    {
                                        tag : 'Future-年度会员徽章',
                                        link: 'http://39.105.229.249/ftp/ling/future/badges/vip.png'
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
                                avatar: 'http://39.105.229.249/ftp/ling/future/user/mrs.webp',
                                //注册时间，返回一个随机的时间，范围在2020-2023年
                                registerTime:
                                    '202' +
                                    Math.floor(Math.random() * 3) +
                                    '-' +
                                    // 系统从0开始，因此+1
                                    (Math.floor(Math.random() * 12) + 1) +
                                    '-' +
                                    (Math.floor(Math.random() * 30) + 1),
                                // 背景
                                background   : 'http://39.105.229.249/ftp/ling/future/background/crosscode.png',
                                discriminator: '3312',
                                //个人标签
                                tags         : [
                                    {
                                        tag : 'Future-飞翔',
                                        link: 'http://39.105.229.249/ftp/ling/future/badges/fly.png'
                                    },
                                    {
                                        tag : 'Java高级开发-[已认证]',
                                        link: 'http://39.105.229.249/ftp/ling/future/badges/code.png'
                                    },
                                    {
                                        tag : 'Future-年度会员徽章',
                                        link: 'http://39.105.229.249/ftp/ling/future/badges/vip.png'
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
                                avatar      : 'http://39.105.229.249/ftp/ling/future/user/msx.webp',
                                //注册时间，返回一个随机的时间，范围在2020-2023年
                                registerTime:
                                    '202' +
                                    Math.floor(Math.random() * 3) +
                                    '-' +
                                    // 系统从0开始，因此+1
                                    (Math.floor(Math.random() * 12) + 1) +
                                    '-' +
                                    (Math.floor(Math.random() * 30) + 1),
                                // 背景
                                background   : 'http://39.105.229.249/ftp/ling/future/background/red.png',
                                discriminator: '9285',
                                //个人标签
                                tags         : [
                                    {
                                        tag : 'Future-勇气',
                                        link: 'http://39.105.229.249/ftp/ling/future/badges/good.png'
                                    },
                                    {
                                        tag : 'Java&C++全栈高级开发-[已认证]',
                                        link: 'http://39.105.229.249/ftp/ling/future/badges/allcode.png'
                                    },
                                    {
                                        tag : 'Future-年度会员徽章',
                                        link: 'http://39.105.229.249/ftp/ling/future/badges/vip.png'
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

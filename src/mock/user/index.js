// 用户信息
export default [
    {
        // 请求方式: 'get',
        method  : 'get',
        // 请求路径: '/user/getCurrentUser',
        url     : '/user/getCurrentUser',
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
    //     根据当前好友id，查询共同加入的服务器数量
    {
        url     : '/user/getCommonServerCount',
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
                                    id  : '437456121056741327',
                                    name: 'gpt',
                                    icon: 'https://cdn.discordapp.com/icons/974519864045756446/d7ec4ed5884437bae0333aa345a97160.webp?size=160'
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
                                    name: 'gpt',
                                    icon: 'https://cdn.discordapp.com/icons/974519864045756446/d7ec4ed5884437bae0333aa345a97160.webp?size=160'
                                },
                                {
                                    id  : '437456121056741329',
                                    name: '只因',
                                    icon: 'https://cdn.discordapp.com/icons/356833056562348042/a_7908c43b1e2f91125a7404c7adcb7372.webp?size=160'
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
                                    name: 'gpt',
                                    icon: 'https://cdn.discordapp.com/icons/974519864045756446/d7ec4ed5884437bae0333aa345a97160.webp?size=160'
                                },
                                {
                                    id  : '437456121056741329',
                                    name: '只因',
                                    icon: 'https://cdn.discordapp.com/icons/356833056562348042/a_7908c43b1e2f91125a7404c7adcb7372.webp?size=160'
                                },
                                {
                                    id  : '437456121056741326',
                                    name: 'rw',
                                    icon: 'https://cdn.discordapp.com/icons/721156457630007316/4428a5c5f5d740b0280415fa2f16d247.webp?size=160'
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
                                    name: 'gpt',
                                    icon: 'https://cdn.discordapp.com/icons/974519864045756446/d7ec4ed5884437bae0333aa345a97160.webp?size=160'
                                },
                                {
                                    id  : '437456121056741329',
                                    name: '只因',
                                    icon: 'https://cdn.discordapp.com/icons/356833056562348042/a_7908c43b1e2f91125a7404c7adcb7372.webp?size=160'
                                },
                                {
                                    id  : '437456121056741326',
                                    name: 'rw',
                                    icon: 'https://cdn.discordapp.com/icons/721156457630007316/4428a5c5f5d740b0280415fa2f16d247.webp?size=160'
                                },
                                {
                                    id  : '437456121056741328',
                                    name: 'cube',
                                    icon: 'https://cdn.discordapp.com/avatars/744562248101396611/da75138093c6594eee95135c955cb972.webp?size=128'
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
                                    id  : '437456121056741327',
                                    name: 'gpt',
                                    icon: 'https://cdn.discordapp.com/icons/974519864045756446/d7ec4ed5884437bae0333aa345a97160.webp?size=160'
                                },
                                {
                                    id  : '437456121056741329',
                                    name: '只因',
                                    icon: 'https://cdn.discordapp.com/icons/356833056562348042/a_7908c43b1e2f91125a7404c7adcb7372.webp?size=160'
                                }
                            ]
                        }
                    };
                default:
                    return {
                        code   : 200,
                        message: 'success',
                        data   : {
                            commonServer: []
                        }
                    };
            }
        }
    }
];

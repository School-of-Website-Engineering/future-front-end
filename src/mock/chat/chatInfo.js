// 聊天记录
export default {
    // 根据id查询聊天记录请求地址
    url     : '/chat/:id',
    // 请求方法
    method  : 'get',
    // 响应数据
    response: (options) => {
        // 根据id查询聊天记录逻辑
        // 使用策略模式
        const chatData = {
            // 345623411435767855
            '345623411435767898': {
                code   : 200,
                message: 'success',
                data   : {
                    // 用户id
                    id     : '3456234114357677908',
                    // 用户名
                    name   : 'All Badges% Speedrunner',
                    // 用户头像
                    avatar : 'https://cdn.discordapp.com/avatars/482216415147982848/c2b04dce7319282ff2cdc6275e13d52a.webp?size=128',
                    // 消息内容
                    message: [
                        {
                            // 消息内容
                            content    : 'Hello',
                            // 消息类型
                            messageType: 'text',
                            // 消息发送时间
                            time       : '2020-10-10 10:10:10',
                            // 消息发送方
                            messageFrom: 'self'
                        },
                        {
                            content    : 'How are you?',
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : "I'm fine, thank you!",
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : 'And you?',
                            messageType: 'text',
                            time       : '2020-4-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : "I'm fine, thank you!",
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : 'And you?',
                            messageType: 'text',
                            time       : '2020-4-10 10:10:10',
                            messageFrom: 'self'
                        }
                    ]
                }
            },
            '345623411435767899': {
                code   : 200,
                message: 'success',
                data   : {
                    // 用户id
                    id     : '3456234114357677908',
                    // 用户名
                    name   : 'All Badges% Speedrunner',
                    // 用户头像
                    avatar : 'https://cdn.discordapp.com/avatars/482216415147982848/c2b04dce7319282ff2cdc6275e13d52a.webp?size=128',
                    // 消息内容
                    message: [
                        {
                            // 消息内容
                            content    : 'Hello',
                            // 消息类型
                            messageType: 'text',
                            // 消息发送时间
                            time       : '2020-10-10 10:10:10',
                            // 消息发送方
                            messageFrom: 'self'
                        },
                        {
                            content    : 'How are you?',
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : "I'm fine, thank you!",
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : 'And you?',
                            messageType: 'text',
                            time       : '2020-4-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : "I'm fine, thank you!",
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : 'And you?',
                            messageType: 'text',
                            time       : '2020-4-10 10:10:10',
                            messageFrom: 'self'
                        }
                    ]
                }
            },
            345623411435767900: {
                code   : 200,
                message: 'success',
                data   : {
                    // 用户id
                    id     : '3456234114357677908',
                    // 用户名
                    name   : 'All Badges% Speedrunner',
                    // 用户头像
                    avatar : 'https://cdn.discordapp.com/avatars/482216415147982848/c2b04dce7319282ff2cdc6275e13d52a.webp?size=128',
                    // 消息内容
                    message: [
                        {
                            // 消息内容
                            content    : 'Hello',
                            // 消息类型
                            messageType: 'text',
                            // 消息发送时间
                            time       : '2020-10-10 10:10:10',
                            // 消息发送方
                            messageFrom: 'self'
                        },
                        {
                            content    : 'How are you?',
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : "I'm fine, thank you!",
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : 'And you?',
                            messageType: 'text',
                            time       : '2020-4-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : "I'm fine, thank you!",
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : 'And you?',
                            messageType: 'text',
                            time       : '2020-4-10 10:10:10',
                            messageFrom: 'self'
                        }
                    ]
                }
            },
            '345623411435767901': {
                code   : 200,
                message: 'success',
                data   : {
                    // 用户id
                    id     : '3456234114357677908',
                    // 用户名
                    name   : 'All Badges% Speedrunner',
                    // 用户头像
                    avatar : 'https://cdn.discordapp.com/avatars/482216415147982848/c2b04dce7319282ff2cdc6275e13d52a.webp?size=128',
                    // 消息内容
                    message: [
                        {
                            // 消息内容
                            content    : 'Hello',
                            // 消息类型
                            messageType: 'text',
                            // 消息发送时间
                            time       : '2020-10-10 10:10:10',
                            // 消息发送方
                            messageFrom: 'self'
                        },
                        {
                            content    : 'How are you?',
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : "I'm fine, thank you!",
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : 'And you?',
                            messageType: 'text',
                            time       : '2020-4-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : "I'm fine, thank you!",
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : 'And you?',
                            messageType: 'text',
                            time       : '2020-4-10 10:10:10',
                            messageFrom: 'self'
                        }
                    ]
                }
            },
            '345623411435767902': {
                code   : 200,
                message: 'success',
                data   : {
                    // 用户id
                    id     : '3456234114357677908',
                    // 用户名
                    name   : 'All Badges% Speedrunner',
                    // 用户头像
                    avatar : 'https://cdn.discordapp.com/avatars/482216415147982848/c2b04dce7319282ff2cdc6275e13d52a.webp?size=128',
                    // 消息内容
                    message: [
                        {
                            // 消息内容
                            content    : 'Hello',
                            // 消息类型
                            messageType: 'text',
                            // 消息发送时间
                            time       : '2020-10-10 10:10:10',
                            // 消息发送方
                            messageFrom: 'self'
                        },
                        {
                            content    : 'How are you?',
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : "I'm fine, thank you!",
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : 'And you?',
                            messageType: 'text',
                            time       : '2020-4-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : "I'm fine, thank you!",
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : 'And you?',
                            messageType: 'text',
                            time       : '2020-4-10 10:10:10',
                            messageFrom: 'self'
                        }
                    ]
                }
            },
            '345623411435767903': {
                code   : 200,
                message: 'success',
                data   : {
                    // 用户id
                    id     : '3456234114357677908',
                    // 用户名
                    name   : 'All Badges% Speedrunner',
                    // 用户头像
                    avatar : 'https://cdn.discordapp.com/avatars/482216415147982848/c2b04dce7319282ff2cdc6275e13d52a.webp?size=128',
                    // 消息内容
                    message: [
                        {
                            // 消息内容
                            content    : 'Hello',
                            // 消息类型
                            messageType: 'text',
                            // 消息发送时间
                            time       : '2020-10-10 10:10:10',
                            // 消息发送方
                            messageFrom: 'self'
                        },
                        {
                            content    : 'How are you?',
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : "I'm fine, thank you!",
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : 'And you?',
                            messageType: 'text',
                            time       : '2020-4-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : "I'm fine, thank you!",
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : 'And you?',
                            messageType: 'text',
                            time       : '2020-4-10 10:10:10',
                            messageFrom: 'self'
                        }
                    ]
                }
            },
            '3456234114357679023': {
                code   : 200,
                message: 'success',
                data   : {
                    // 用户id
                    id     : '3456234114357677908',
                    // 用户名
                    name   : 'All Badges% Speedrunner',
                    // 用户头像
                    avatar : 'https://cdn.discordapp.com/avatars/482216415147982848/c2b04dce7319282ff2cdc6275e13d52a.webp?size=128',
                    // 消息内容
                    message: [
                        {
                            // 消息内容
                            content    : 'Hello',
                            // 消息类型
                            messageType: 'text',
                            // 消息发送时间
                            time       : '2020-10-10 10:10:10',
                            // 消息发送方
                            messageFrom: 'self'
                        },
                        {
                            content    : 'How are you?',
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : "I'm fine, thank you!",
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : 'And you?',
                            messageType: 'text',
                            time       : '2020-4-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : "I'm fine, thank you!",
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : 'And you?',
                            messageType: 'text',
                            time       : '2020-4-10 10:10:10',
                            messageFrom: 'self'
                        }
                    ]
                }
            },
            '3456234161435767908': {
                code   : 200,
                message: 'success',
                data   : {
                    // 用户id
                    id     : '3456234114357677908',
                    // 用户名
                    name   : 'All Badges% Speedrunner',
                    // 用户头像
                    avatar : 'https://cdn.discordapp.com/avatars/482216415147982848/c2b04dce7319282ff2cdc6275e13d52a.webp?size=128',
                    // 消息内容
                    message: [
                        {
                            // 消息内容
                            content    : 'Hello',
                            // 消息类型
                            messageType: 'text',
                            // 消息发送时间
                            time       : '2020-10-10 10:10:10',
                            // 消息发送方
                            messageFrom: 'self'
                        },
                        {
                            content    : 'How are you?',
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : "I'm fine, thank you!",
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : 'And you?',
                            messageType: 'text',
                            time       : '2020-4-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : "I'm fine, thank you!",
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : 'And you?',
                            messageType: 'text',
                            time       : '2020-4-10 10:10:10',
                            messageFrom: 'self'
                        }
                    ]
                }
            },
            '3456234114357677908': {
                code   : 200,
                message: 'success',
                data   : {
                    // 用户id
                    id     : '3456234114357677908',
                    // 用户名
                    name   : 'All Badges% Speedrunner',
                    // 用户头像
                    avatar : 'https://cdn.discordapp.com/avatars/482216415147982848/c2b04dce7319282ff2cdc6275e13d52a.webp?size=128',
                    // 消息内容
                    message: [
                        {
                            // 消息内容
                            content    : 'Hello',
                            // 消息类型
                            messageType: 'text',
                            // 消息发送时间
                            time       : '2020-10-10 10:10:10',
                            // 消息发送方
                            messageFrom: 'self'
                        },
                        {
                            content    : 'How are you?',
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : "I'm fine, thank you!",
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : 'And you?',
                            messageType: 'text',
                            time       : '2020-4-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : "I'm fine, thank you!",
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : 'And you?',
                            messageType: 'text',
                            time       : '2020-4-10 10:10:10',
                            messageFrom: 'self'
                        }
                    ]
                }
            },
            '3456234114357679088': {
                code   : 200,
                message: 'success',
                data   : {
                    // 用户id
                    id     : '3456234114357677908',
                    // 用户名
                    name   : 'All Badges% Speedrunner',
                    // 用户头像
                    avatar : 'https://cdn.discordapp.com/avatars/482216415147982848/c2b04dce7319282ff2cdc6275e13d52a.webp?size=128',
                    // 消息内容
                    message: [
                        {
                            // 消息内容
                            content    : 'Hello',
                            // 消息类型
                            messageType: 'text',
                            // 消息发送时间
                            time       : '2020-10-10 10:10:10',
                            // 消息发送方
                            messageFrom: 'self'
                        },
                        {
                            content    : 'How are you?',
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : "I'm fine, thank you!",
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : 'And you?',
                            messageType: 'text',
                            time       : '2020-4-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : "I'm fine, thank you!",
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : 'And you?',
                            messageType: 'text',
                            time       : '2020-4-10 10:10:10',
                            messageFrom: 'self'
                        }
                    ]
                }
            },
            '3456234114357679087': {
                code   : 200,
                message: 'success',
                data   : {
                    // 用户id
                    id     : '3456234114357677908',
                    // 用户名
                    name   : 'All Badges% Speedrunner',
                    // 用户头像
                    avatar : 'https://cdn.discordapp.com/avatars/482216415147982848/c2b04dce7319282ff2cdc6275e13d52a.webp?size=128',
                    // 消息内容
                    message: [
                        {
                            // 消息内容
                            content    : 'Hello',
                            // 消息类型
                            messageType: 'text',
                            // 消息发送时间
                            time       : '2020-10-10 10:10:10',
                            // 消息发送方
                            messageFrom: 'self'
                        },
                        {
                            content    : 'How are you?',
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : "I'm fine, thank you!",
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : 'And you?',
                            messageType: 'text',
                            time       : '2020-4-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : "I'm fine, thank you!",
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : 'And you?',
                            messageType: 'text',
                            time       : '2020-4-10 10:10:10',
                            messageFrom: 'self'
                        }
                    ]
                }
            },
            '3456234114357679082': {
                code   : 200,
                message: 'success',
                data   : {
                    // 用户id
                    id     : '3456234114357677908',
                    // 用户名
                    name   : 'All Badges% Speedrunner',
                    // 用户头像
                    avatar : 'https://cdn.discordapp.com/avatars/482216415147982848/c2b04dce7319282ff2cdc6275e13d52a.webp?size=128',
                    // 消息内容
                    message: [
                        {
                            // 消息内容
                            content    : 'Hello',
                            // 消息类型
                            messageType: 'text',
                            // 消息发送时间
                            time       : '2020-10-10 10:10:10',
                            // 消息发送方
                            messageFrom: 'self'
                        },
                        {
                            content    : 'How are you?',
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : "I'm fine, thank you!",
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : 'And you?',
                            messageType: 'text',
                            time       : '2020-4-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : "I'm fine, thank you!",
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : 'And you?',
                            messageType: 'text',
                            time       : '2020-4-10 10:10:10',
                            messageFrom: 'self'
                        }
                    ]
                }
            },
            '345623411435767855': {
                code   : 200,
                message: 'success',
                data   : {
                    // 用户id
                    id     : '3456234114357677908',
                    // 用户名
                    name   : 'All Badges% Speedrunner',
                    // 用户头像
                    avatar : 'https://cdn.discordapp.com/avatars/482216415147982848/c2b04dce7319282ff2cdc6275e13d52a.webp?size=128',
                    // 消息内容
                    message: [
                        {
                            // 消息内容
                            content    : 'Hello',
                            // 消息类型
                            messageType: 'text',
                            // 消息发送时间
                            time       : '2020-10-10 10:10:10',
                            // 消息发送方
                            messageFrom: 'self'
                        },
                        {
                            content    : 'How are you?',
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : "I'm fine, thank you!",
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : 'And you?',
                            messageType: 'text',
                            time       : '2020-4-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : "I'm fine, thank you!",
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : 'And you?',
                            messageType: 'text',
                            time       : '2020-4-10 10:10:10',
                            messageFrom: 'self'
                        }
                    ]
                }
            },
            '345623411435767856': {
                code   : 200,
                message: 'success',
                data   : {
                    // 用户id
                    id     : '3456234114357677908',
                    // 用户名
                    name   : 'All Badges% Speedrunner',
                    // 用户头像
                    avatar : 'https://cdn.discordapp.com/avatars/482216415147982848/c2b04dce7319282ff2cdc6275e13d52a.webp?size=128',
                    // 消息内容
                    message: [
                        {
                            // 消息内容
                            content    : 'Hello',
                            // 消息类型
                            messageType: 'text',
                            // 消息发送时间
                            time       : '2020-10-10 10:10:10',
                            // 消息发送方
                            messageFrom: 'self'
                        },
                        {
                            content    : 'How are you?',
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : "I'm fine, thank you!",
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : 'And you?',
                            messageType: 'text',
                            time       : '2020-4-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : "I'm fine, thank you!",
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self'
                        },
                        {
                            content    : 'And you?',
                            messageType: 'text',
                            time       : '2020-4-10 10:10:10',
                            messageFrom: 'self'
                        }
                    ]
                }
            }
        };
        // 获取用户id
        const id = options.url.match(/\/chat\/(\d+)/)[1];
        // 根据用户id获取聊天记录
        const data = chatData[id];
        // 返回聊天记录
        return data;
    }
};

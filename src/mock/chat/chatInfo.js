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
                    id     : '345623411435767708',
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
                            messageFrom: 'self',
                            // 消息id
                            messageId  : '34562341914357677908'
                        },
                        {
                            content    : 'How are you?',
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self',
                            messageId  : '356234114357677909'
                        },
                        {
                            content    : "I'm fine, thank you!",
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self',
                            messageId  : '34562341143576077908'
                        },
                        {
                            content    : 'And you?',
                            messageType: 'text',
                            time       : '2020-4-10 10:10:10',
                            messageFrom: 'self',
                            messageId  : '345623411435777909'
                        },
                        {
                            content    : "I'm fine, thank you!",
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self',
                            messageId  : '3456234114357677910'
                        },
                        {
                            content    : 'And you?',
                            messageType: 'text',
                            time       : '2020-4-10 10:10:10',
                            messageFrom: 'self',
                            messageId  : '3456234114357677911'
                        }
                    ],
                    time: new Date().getTime()
                }
            },
            '345623411435767899': {
                code   : 200,
                message: 'success',
                data   : {
                    // 用户id
                    id     : '345623411435i7677908',
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
                            messageFrom: 'self',
                            // 消息id
                            messageId  : '3456234114357677912'
                        },
                        {
                            content    : 'How are you?',
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self',
                            messageId  : '3456234114357677913'
                        },
                        {
                            content    : "I'm fine, thank you!",
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self',
                            messageId  : '3456234114357677914'
                        },
                        {
                            content    : 'And you?',
                            messageType: 'text',
                            time       : '2020-4-10 10:10:10',
                            messageFrom: 'self',
                            messageId  : '3456234114357677915'
                        },
                        {
                            content    : "I'm fine, thank you!",
                            messageType: 'text',
                            time       : '2020-10-10 10:10:10',
                            messageFrom: 'self',
                            messageId  : '3456234114357677916'
                        },
                        {
                            content    : 'And you?',
                            messageType: 'text',
                            time       : '2020-4-10 10:10:10',
                            messageFrom: 'self',
                            messageId  : '3456234114357677917'
                        }
                    ],
                    time: new Date().getTime()
                }
            },
            345623411435767900: {
                code   : 200,
                message: 'success',
                data   : {
                    // 用户id
                    id     : '34562341143i57677908',
                    // 用户名
                    name   : 'All Badges% Speedrunner',
                    // 用户头像
                    avatar : 'https://cdn.discordapp.com/avatars/482216415147982848/c2b04dce7319282ff2cdc6275e13d52a.webp?size=128',
                    // 消息内容
                    message: [
                        {
                            content    : '你好',
                            messageType: 'text',
                            time       : '2022-7',
                            messageFrom: 'self',
                            messageId  : '3456234114357677918'
                        },
                        {
                            content    : '晚上好',
                            messageType: 'text',
                            time       : '2022-11',
                            messageFrom: 'self',
                            messageId  : '3456234114357677919'
                        },
                        {
                            content    : '哈喽',
                            messageType: 'text',
                            time       : '2023-3',
                            messageFrom: 'me',
                            messageId  : '3456234114357677920'
                        },
                        {
                            content    : '早安',
                            messageType: 'text',
                            time       : '2023-1',
                            messageFrom: 'me',
                            messageId  : '3456234114357677921'
                        },
                        {
                            content    : '吃饭了吗？',
                            messageType: 'text',
                            time       : '2022-9',
                            messageFrom: 'self',
                            messageId  : '3456234114357677922'
                        }
                    ],
                    time: new Date().getTime()
                }
            },
            '345623411435767901': {
                code   : 200,
                message: 'success',
                data   : {
                    // 用户id
                    id     : '345623411435777908',
                    // 用户名
                    name   : 'All Badges% Speedrunner',
                    // 用户头像
                    avatar : 'https://cdn.discordapp.com/avatars/482216415147982848/c2b04dce7319282ff2cdc6275e13d52a.webp?size=128',
                    // 消息内容
                    message: [
                        {
                            content    : '好久不见',
                            messageType: 'text',
                            time       : '2023-4',
                            messageFrom: 'me',
                            messageId  : '3456234114357677923'
                        },
                        {
                            content    : '想你了',
                            messageType: 'text',
                            time       : '2023-2',
                            messageFrom: 'me',
                            messageId  : '3456234114357677924'
                        }
                    ],
                    time: new Date().getTime()
                }
            },
            '345623411435767902': {
                code   : 200,
                message: 'success',
                data   : {
                    // 用户id
                    id     : '45623411435767908',
                    // 用户名
                    name   : 'All Badges% Speedrunner',
                    // 用户头像
                    avatar : 'https://cdn.discordapp.com/avatars/482216415147982848/c2b04dce7319282ff2cdc6275e13d52a.webp?size=128',
                    // 消息内容
                    message: [
                        {
                            content    : '约吗？',
                            messageType: 'text',
                            time       : '2023-5',
                            messageFrom: 'self',
                            messageId  : '3456234114357677925'
                        },
                        {
                            content    : '出去走走吧',
                            messageType: 'text',
                            time       : '2022-10',
                            messageFrom: 'self',
                            messageId  : '3456234114357677926'
                        },
                        {
                            content    : '晚安',
                            messageType: 'text',
                            time       : '2023-4',
                            messageFrom: 'me',
                            messageId  : '3456234114357677927'
                        },
                        {
                            content    : '你喜欢吃什么？',
                            messageType: 'text',
                            time       : '2023-3',
                            messageFrom: 'self',
                            messageId  : '3456234114357677928'
                        },
                        {
                            content    : '我在看电影，你呢？',
                            messageType: 'text',
                            time       : '2022-12',
                            messageFrom: 'self',
                            messageId  : '3456234114357677929'
                        },
                        {
                            content    : '天气不错',
                            messageType: 'text',
                            time       : '2023-1',
                            messageFrom: 'self',
                            messageId  : '3456234114357677930'
                        },
                        {
                            content    : '有时间一起吃饭吧',
                            messageType: 'text',
                            time       : '2022-8',
                            messageFrom: 'self',
                            messageId  : '3456234114357677931'
                        },
                        {
                            content    : '上午好',
                            messageType: 'text',
                            time       : '2022-6',
                            messageFrom: 'self',
                            messageId  : '3456234114357677932'
                        }
                    ],
                    time: new Date().getTime()
                }
            },
            '345623411435767903': {
                code   : 200,
                message: 'success',
                data   : {
                    // 用户id
                    id     : '34564114357677908',
                    // 用户名
                    name   : 'All Badges% Speedrunner',
                    // 用户头像
                    avatar : 'https://cdn.discordapp.com/avatars/482216415147982848/c2b04dce7319282ff2cdc6275e13d52a.webp?size=128',
                    // 消息内容
                    message: [
                        {
                            content    : '你在干什么呢？',
                            messageType: 'text',
                            time       : '2023-5',
                            messageFrom: 'me',
                            messageId  : '3456234114357677933'
                        },
                        {
                            content    : '有新消息吗？',
                            messageType: 'text',
                            time       : '2022-10',
                            messageFrom: 'me',
                            messageId  : '3456234114357677934'
                        },
                        {
                            content    : '下雪了',
                            messageType: 'text',
                            time       : '2023-4',
                            messageFrom: 'self',
                            messageId  : '3456234114357677935'
                        },
                        {
                            content    : '回家了',
                            messageType: 'text',
                            time       : '2023-3',
                            messageFrom: 'self',
                            messageId  : '3456234114357677936'
                        }
                    ],
                    time: new Date().getTime()
                }
            },
            '3456234114357679023': {
                code   : 200,
                message: 'success',
                data   : {
                    // 用户id
                    id     : '345624114357677908',
                    // 用户名
                    name   : 'All Badges% Speedrunner',
                    // 用户头像
                    avatar : 'https://cdn.discordapp.com/avatars/482216415147982848/c2b04dce7319282ff2cdc6275e13d52a.webp?size=128',
                    // 消息内容
                    message: [
                        {
                            content    : '你吃了吗？',
                            messageType: 'text',
                            time       : '2023-5',
                            messageFrom: 'me',
                            messageId  : '3456234114357677937'
                        },
                        {
                            content    : '今天天气怎么样？',
                            messageType: 'text',
                            time       : '2022-10',
                            messageFrom: 'me',
                            messageId  : '3456234114357677938'
                        },
                        {
                            content    : '好久不见了，最近怎么样？',
                            messageType: 'text',
                            time       : '2023-4',
                            messageFrom: 'me',
                            messageId  : '3456234114357677939'
                        }
                    ],
                    time: new Date().getTime()
                }
            },
            '3456234161435767908': {
                code   : 200,
                message: 'success',
                data   : {
                    // 用户id
                    id     : '3ionklbklk',
                    // 用户名
                    name   : 'All Badges% Speedrunner',
                    // 用户头像
                    avatar : 'https://cdn.discordapp.com/avatars/482216415147982848/c2b04dce7319282ff2cdc6275e13d52a.webp?size=128',
                    // 消息内容
                    message: [
                        {
                            content    : '你在哪里？',
                            messageType: 'text',
                            time       : '2023-5',
                            messageFrom: 'self',
                            messageId  : '3456234114357677940'
                        },
                        {
                            content    : '我有点忙，待会儿再聊？',
                            messageType: 'text',
                            time       : '2022-10',
                            messageFrom: 'self',
                            messageId  : '3456234114357677941'
                        },
                        {
                            content    : '明天一起去看电影吧',
                            messageType: 'text',
                            time       : '2023-4',
                            messageFrom: 'self',
                            messageId  : '3456234114357677942'
                        },
                        {
                            content    : '周末有什么安排？',
                            messageType: 'text',
                            time       : '2023-3',
                            messageFrom: 'self',
                            messageId  : '3456234114357677943'
                        },
                        {
                            content    : '好久不见了，近况怎么样？',
                            messageType: 'text',
                            time       : '2022-12',
                            messageFrom: 'self',
                            messageId  : '3456234114357677944'
                        },
                        {
                            content    : '中午一起去吃饭吧',
                            messageType: 'text',
                            time       : '2023-1',
                            messageFrom: 'self',
                            messageId  : '3456234114357677945'
                        },
                        {
                            content    : '你喜欢喝茶还是咖啡？',
                            messageType: 'text',
                            time       : '2022-8',
                            messageFrom: 'self',
                            messageId  : '3456234114357677946'
                        },
                        {
                            content    : '加油，你可以的！',
                            messageType: 'text',
                            time       : '2022-6',
                            messageFrom: 'self',
                            messageId  : '3456234114357677947'
                        },
                        {
                            content    : '我在看书，你呢？',
                            messageType: 'text',
                            time       : '2023-2',
                            messageFrom: 'self',
                            messageId  : '3456234114357677948'
                        },
                        {
                            content    : '晚上一起吃饭吧',
                            messageType: 'text',
                            time       : '2022-9',
                            messageFrom: 'self',
                            messageId  : '3456234114357677949'
                        },
                        {
                            content    : '最近有什么新鲜事？',
                            messageType: 'text',
                            time       : '2023-7',
                            messageFrom: 'self',
                            messageId  : '3456234114357677950'
                        },
                        {
                            content    : '今天的工作完成了吗？',
                            messageType: 'text',
                            time       : '2023-8',
                            messageFrom: 'self',
                            messageId  : '3456234114357677951'
                        }
                    ],
                    time: new Date().getTime()
                }
            },
            '3456234114357677908': {
                code   : 200,
                message: 'success',
                data   : {
                    // 用户id
                    id     : '345623411435767908',
                    // 用户名
                    name   : 'All Badges% Speedrunner',
                    // 用户头像
                    avatar : 'https://cdn.discordapp.com/avatars/482216415147982848/c2b04dce7319282ff2cdc6275e13d52a.webp?size=128',
                    // 消息内容
                    message: [
                        {
                            content    : '早上好，今天该干什么呢？',
                            messageType: 'text',
                            time       : '2023-5',
                            messageFrom: 'self',
                            messageId  : '345234114357677932'
                        },
                        {
                            content    : '下午有时间一起喝茶吗？',
                            messageType: 'text',
                            time       : '2022-10',
                            messageFrom: 'me',
                            messageId  : '345634114357677933'
                        },
                        {
                            content    : '晚上有空一起去打台球吗？',
                            messageType: 'text',
                            time       : '2023-4',
                            messageFrom: 'self',
                            messageId  : '345624114357677934'
                        }
                    ],
                    time: new Date().getTime()
                }
            },
            '3456234114357679088': {
                code   : 200,
                message: 'success',
                data   : {
                    // 用户id
                    id     : '345623411357677908',
                    // 用户名
                    name   : 'All Badges% Speedrunner',
                    // 用户头像
                    avatar : 'https://cdn.discordapp.com/avatars/482216415147982848/c2b04dce7319282ff2cdc6275e13d52a.webp?size=128',
                    // 消息内容
                    message: [
                        {
                            content    : '你今天心情怎样？',
                            messageType: 'text',
                            time       : '2023-5',
                            messageFrom: 'self',
                            messageId  : '3456234114357677932'
                        },
                        {
                            content    : '想不想来一场说走就走的旅行？',
                            messageType: 'text',
                            time       : '2022-10',
                            messageFrom: 'me',
                            messageId  : '3456234114357677933'
                        },
                        {
                            content    : '如果有一百万，你会怎么花？',
                            messageType: 'text',
                            time       : '2023-4',
                            messageFrom: 'self',
                            messageId  : '3456234114357677934'
                        },
                        {
                            content    : '在你的人生中，最重要的事情是什么？',
                            messageType: 'text',
                            time       : '2023-3',
                            messageFrom: 'self',
                            messageId  : '3456234114357677935'
                        },
                        {
                            content    : '今天午饭吃什么好呢？',
                            messageType: 'text',
                            time       : '2022-12',
                            messageFrom: 'me',
                            messageId  : '3456234114357677936'
                        }
                    ],
                    time: new Date().getTime()
                }
            },
            '3456234114357679087': {
                code   : 200,
                message: 'success',
                data   : {
                    // 用户id
                    id     : '3562341157677908',
                    // 用户名
                    name   : 'All Badges% Speedrunner',
                    // 用户头像
                    avatar : 'https://cdn.discordapp.com/avatars/482216415147982848/c2b04dce7319282ff2cdc6275e13d52a.webp?size=128',
                    // 消息内容
                    message: [
                        {
                            content:
                                '最近忙得有点疲惫，但还是坚持每天多花一点时间学习。学到的新知识让我感到异常兴奋，也让我更有信心应对未来的挑战。',
                            messageType: 'text',
                            time       : '2023-5',
                            messageFrom: 'self',
                            messageId  : '3456234114357677037'
                        },
                        {
                            content:
                                '生活中有很多难以避免的起伏和波折，但这也是成长的过程。我们需要学会相信自己，保持积极向上的态度，勇敢面对挑战。',
                            messageType: 'text',
                            time       : '2022-10',
                            messageFrom: 'me',
                            messageId  : '3456234114357677038'
                        },
                        {
                            content:
                                '做任何事情都需要有目标和计划，但也需要随时调整。适当的改变和调整可以让我们更好地适应环境，实现更大的进步。',
                            messageType: 'text',
                            time       : '2023-4',
                            messageFrom: 'self',
                            messageId  : '3456234114357677039'
                        },
                        {
                            content:
                                '人生的旅途中，我们会遇到各种各样的人。有些人只是短暂的路人，有些人却能和我们一起走很远很远的路。无论是哪种人，都值得我们珍惜和感激。',
                            messageType: 'text',
                            time       : '2023-3',
                            messageFrom: 'me',
                            messageId  : '3456234114357677040'
                        }
                    ],
                    time: new Date().getTime()
                }
            },
            '3456234114357679082': {
                code   : 200,
                message: 'success',
                data   : {
                    // 用户id
                    id     : '345623414357677908',
                    // 用户名
                    name   : 'All Badges% Speedrunner',
                    // 用户头像
                    avatar : 'https://cdn.discordapp.com/avatars/482216415147982848/c2b04dce7319282ff2cdc6275e13d52a.webp?size=128',
                    // 消息内容
                    message: [
                        {
                            content:
                                '生命中的每一个瞬间都是宝贵的，我们需要学会珍惜每一个当下。无论是快乐的时刻还是痛苦的挣扎，都是我们成长路上的重要一步。',
                            messageType: 'text',
                            time       : '2023-5',
                            messageFrom: 'me',
                            messageId  : '345234114357677037'
                        },
                        {
                            content:
                                '有梦想和追求是非常重要的事情。人生短暂，我们需要在自己能力范围内尽可能地去追求自己想要的东西。',
                            messageType: 'text',
                            time       : '2022-10',
                            messageFrom: 'self',
                            messageId  : '345234114357677038'
                        },
                        {
                            content:
                                '成功的背后往往隐藏着不为人知的故事。要想成功，就必须要有毅力和耐心，始终保持对目标的坚定信念。',
                            messageType: 'text',
                            time       : '2023-4',
                            messageFrom: 'me',
                            messageId  : '345234114357677039'
                        },
                        {
                            content:
                                '有时候我们需要跳出自己的舒适区，尝试新的事物。这样做既可以帮助我们更好地了解自己，也可以让我们更快地成长。',
                            messageType: 'text',
                            time       : '2023-3',
                            messageFrom: 'self',
                            messageId  : '345234114357677040'
                        },
                        {
                            content:
                                '人生是一场漫长的旅途，我们需要学会承受孤独和寂寞。孤独并不可怕，它可以让我们更好地思考和认识自己。',
                            messageType: 'text',
                            time       : '2022-12',
                            messageFrom: 'me',
                            messageId  : '345234114357677041'
                        }
                    ],
                    time: new Date().getTime()
                }
            },
            '345623411435767855': {
                code   : 200,
                message: 'success',
                data   : {
                    // 用户id
                    id     : '345623411357677908',
                    // 用户名
                    name   : 'All Badges% Speedrunner',
                    // 用户头像
                    avatar : 'https://cdn.discordapp.com/avatars/482216415147982848/c2b04dce7319282ff2cdc6275e13d52a.webp?size=128',
                    // 消息内容
                    message: [
                        {
                            content:
                                '生活中会有很多无法预料的事情发生，但我们可以掌握自己的态度。保持积极乐观的心态，让自己更有信心应对未来的挑战。',
                            messageType: 'text',
                            time       : '2023-5',
                            messageFrom: 'me',
                            messageId  : '3456234114357677042'
                        },
                        {
                            content:
                                '成长需要付出代价，但这也是人生中最值得做的事情之一。打磨自己，追求进步，不断学习和探索，让自己变得更加出色。',
                            messageType: 'text',
                            time       : '2022-10',
                            messageFrom: 'self',
                            messageId  : '3456234114357677043'
                        },
                        {
                            content:
                                '在追求梦想的路上，我们会遭遇种种困难和挫折。但正是这些挫折让我们更加坚定自己的目标，让我们更加热爱追求自己的梦想。',
                            messageType: 'text',
                            time       : '2023-4',
                            messageFrom: 'me',
                            messageId  : '3456234114357677044'
                        },
                        {
                            content:
                                '每个人都有自己的长处和短处，我们需要学会认识并包容自己。不要去比较和攀比，每个人都是独一无二的，都有自己的价值和意义。',
                            messageType: 'text',
                            time       : '2023-3',
                            messageFrom: 'self',
                            messageId  : '3456234114357677045'
                        },
                        {
                            content:
                                '人生中有很多值得我们感恩的时刻。感恩的心态可以让我们更加开心和满足，让我们更好地看待自己的生活和成就。',
                            messageType: 'text',
                            time       : '2022-12',
                            messageFrom: 'me',
                            messageId  : '3456234114357677046'
                        },
                        {
                            content:
                                '时间是最珍贵的财富，我们需要学会合理利用自己的时间。把握当下，做自己想做的事情，让自己的人生更加充实和有意义。',
                            messageType: 'text',
                            time       : '2023-8',
                            messageFrom: 'self',
                            messageId  : '3456234114357677047'
                        },
                        {
                            content:
                                '学习是一种终身的追求，我们需要不断地更新自己的知识和技能。只有不断提升自己，才能在这个竞争激烈的社会中立于不败之地。',
                            messageType: 'text',
                            time       : '2022-11',
                            messageFrom: 'me',
                            messageId  : '3456234114357677048'
                        },
                        {
                            content:
                                '每个人都有自己的故事和经历，我们需要多一些理解和包容。尊重别人的价值观和选择，让自己更加开放和宽容。',
                            messageType: 'text',
                            time       : '2023-2',
                            messageFrom: 'self',
                            messageId  : '3456234114357677049'
                        },
                        {
                            content:
                                '人生中有很多机会和挑战，我们需要学会把握机遇，挑战自己的极限。只有不断地向前迈进，才能实现自己的梦想和目标。',
                            messageType: 'text',
                            time       : '2023-6',
                            messageFrom: 'me',
                            messageId  : '3456234114357677050'
                        },
                        {
                            content:
                                '生命真的很短暂，我们需要珍惜每一刻。放下心中的怨念和负面情绪，让自己过得更加美好和幸福。',
                            messageType: 'text',
                            time       : '2022-9',
                            messageFrom: 'self',
                            messageId  : '3456234114357677051'
                        },
                        {
                            content:
                                '在追求自己的梦想和目标的路上，我们需要有冷静和定力。任何事情都需要付出时间和努力，只有坚持不懈，才能实现自己的理想。',
                            messageType: 'text',
                            time       : '2023-1',
                            messageFrom: 'me',
                            messageId  : '3456234114357677052'
                        },
                        {
                            content:
                                '人生中最重要的事情就是呵护自己的心灵。学会宽容和感恩，保持内心的平和和冷静，让自己过得更加美好和有意义。',
                            messageType: 'text',
                            time       : '2023-7',
                            messageFrom: 'self',
                            messageId  : '3456234114357677053'
                        }
                    ],
                    time: new Date().getTime()
                }
            },
            '345623411435767856': {
                code   : 200,
                message: 'success',
                data   : {
                    // 用户id
                    id     : '345623414357677908',
                    // 用户名
                    name   : 'All Badges% Speedrunner',
                    // 用户头像
                    avatar : 'https://cdn.discordapp.com/avatars/482216415147982848/c2b04dce7319282ff2cdc6275e13d52a.webp?size=128',
                    // 消息内容
                    message: [
                        {
                            content:
                                '我们生活在一个快节奏的社会中，每个人都需要承担不少的压力和责任。但是，当你感到有些力不从心的时候，不妨停下来好好休息一下，用一些方法来缓解自己的压力。',
                            messageType: 'text',
                            time       : '2023-04-25 08:12:36',
                            messageFrom: 'me',
                            messageId  : '345623411435767857'
                        },
                        {
                            content:
                                '有时候，我们的人生道路上会遇到很多的波折和坎坷，但是，只要我们坚持自己的信念，积极面对生活中的挑战，就一定能够走过难关，迎接美好的未来。',
                            messageType: 'text',
                            time       : '2023-04-25 09:25:48',
                            messageFrom: 'self',
                            messageId  : '345623411435767858'
                        },
                        {
                            content:
                                '家庭是我们在这个世界上最温暖、最安全的港湾，是我们成长路上必不可少的支撑。无论何时何地，只要我们坚定地守护着这份感情，就一定能够让家庭更加幸福、温馨。',
                            messageType: 'text',
                            time       : '2023-04-25 10:58:21',
                            messageFrom: 'me',
                            messageId  : '345623411435767859'
                        },
                        {
                            content:
                                '成功需要不断地努力和积累，只有在你拥有了足够的知识和技能之后，才能够在工作和生活中游刃有余。所以，无论何时，都应该努力学习，提升自己的个人素质。',
                            messageType: 'text',
                            time       : '2023-04-25 12:06:31',
                            messageFrom: 'self',
                            messageId  : '345623411435767860'
                        },
                        {
                            content:
                                '爱是一种美好而又神圣的情感，在我们的生命中起到了不可替代的作用。无论是家人、朋友还是恋人，只有在我们充满爱心的关怀下，他们才能够感受到真正的幸福。',
                            messageType: 'text',
                            time       : '2023-04-25 13:45:09',
                            messageFrom: 'me',
                            messageId  : '345623411435767861'
                        }
                    ],
                    time: new Date().getTime()
                }
            },
            '345623411435767907': {
                code   : 200,
                message: 'success',
                data   : null
            }
        };
        // 获取用户id
        const id = options.url.match(/\/chat\/(\d+)/)[1];
        // 为 null 或 undefined 时返回错误信息
        if (!id) {
            return {
                code   : 404,
                message: '用户id不能为空',
                data   : null
            };
        }
        // 根据用户id获取聊天记录
        const data = chatData[id];
        // 返回聊天记录
        return data;
    }
};

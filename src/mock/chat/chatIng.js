// 实时聊天数据

export default {
    // 收到的消息，并根据id进行不同的处理
    url     : '/chat/ing',
    method  : 'post',
    //post的参数为：content:"阿瑟的发生大",id:"3456234114357679088",public async getChatSend(data: object): Promise<Response<{ data: IChatSendResponse }>> {
    response: ({ body }) => {
        // 返回一个随机id的函数，返回id如345623411435767999
        function generateRandomId() {
            const randomNum = Math.floor(Math.random() * 100000000000); // 生成一个14位的随机整数
            return '345623411435767' + randomNum.toString().substring(3); // 返回id
        }

        const { id, content } = body;
        let data = {};
        // 无法识别的消息随机返回一个消息
        const randomMessage = [
            '???',
            '?',
            '??',
            '你干嘛',
            '你发的什么？',
            '你说啥',
            '你说的啥',
            '你说的是啥',
            '你说的是什么',
            '你说的是什么？',
            '你说的是什么意思',
            '你说的是什么意思？',
            '你说的是什么意思啊',
            '你说的是什么意思啊？',
            '你说的是什么意思啊？？',
            '你说的是什么意思啊？？？',
            '你说的是什么意思啊？？？？',
            '你说的是什么意思啊？？？？？',
            '你说的是什么意思啊？？？？？？',
            '你说的是什么意思啊？？？？？？？'
        ];
        const randomIndex = Math.floor(Math.random() * randomMessage.length);
        // 根据content进行不同的处理
        if (content.match(/^(你好|您好|hello|hi|哈喽|早上好|下午好|晚上好)$/i)) {
            // 处理问好语句的逻辑
            data = {
                content    : '我是xxx',
                messageType: 'text',
                time       : new Date().toLocaleString(),
                messageFrom: 'self',
                messageId  : generateRandomId().toString()
            };
        } else if (content.match(/^(你是谁|你叫什么名字|你叫啥|你是谁啊|你是谁呀|你是谁呢|你是谁的|你是)$/i)) {
            // 处理问名字的逻辑
            data = {
                content    : '我是xxx',
                messageType: 'text',
                time       : new Date().getTime(),
                messageFrom: 'self',
                messageId  : generateRandomId().toString()
            };
        } else {
            // 处理其他消息的逻辑
            data = {
                content    : randomMessage[randomIndex],
                messageType: 'text',
                time       : new Date().getTime().toLocaleString(),
                messageFrom: 'self',
                messageId  : generateRandomId().toString()
            };
        }
        //     根据id进行不同的处理
        // id   // ' 345623411435767898'
        // ' 345623411435767899'
        // ' 345623411435767901'
        // ' 345623411435767902'
        // ' 345623411435767903'
        // ' 3456234114357679023'
        // 3456234161435767908
        // ' 3456234114357677908 '
        // ' 3456234114357679088 '
        // ' 3456234114357679087'
        // ' 3456234114357679082'
        // ' 345623411435767855'
        // ' 345623411435767856'
        // ' 345623411435767907'
        const strategy = {
            '345623411435767898': () => {
                return {
                    code   : 200,
                    message: 'success',
                    // 修改data的avatar与name
                    data   : {
                        avatar : 'https://cdn.discordapp.com/avatars/1042734257149329418/5ab3131122ac145db5f2edf29e5a7730.webp?size=48',
                        id     : '345623411435767898',
                        message: data,
                        name   : 'liuliu',
                        time   : new Date().getTime().toLocaleString()
                    }
                };
            },
            '345623411435767899': () => {
                return {
                    code   : 200,
                    message: 'success',
                    data   : {
                        avatar : 'https://cdn.discordapp.com/avatars/891419145592266812/c8578ca93da963aa9edfdae6111a1a23.webp?size=128',
                        id     : '345623411435767899',
                        message: data,
                        name   : 'Ye Ldzy>>',
                        time   : new Date().getTime().toLocaleString()
                    }
                };
            },
            345623411435767900: () => {
                return {
                    code   : 200,
                    message: 'success',
                    data   : {
                        avatar : 'https://cdn.discordapp.com/avatars/760729927552729119/20167f95c93ef46167737aee7201cb92.webp?size=48',
                        id     : '345623411435767900',
                        message: data,
                        name   : '[ECM]HamSter',
                        time   : new Date().getTime().toLocaleString()
                    }
                };
            },
            '345623411435767901': () => {
                return {
                    code   : 200,
                    message: 'success',
                    data   : {
                        avatar : 'https://cdn.discordapp.com/avatars/616810767773335552/d730cfb881a0dbb685067cfa328f4bec.webp?size=100',
                        id     : '345623411435767901',
                        message: data,
                        name   : 'Catand',
                        time   : new Date().getTime().toLocaleString()
                    }
                };
            },
            '345623411435767902': () => {
                return {
                    code   : 200,
                    message: 'success',
                    data   : {
                        avatar : 'https://cdn.discordapp.com/guilds/296399356196552705/users/895571799956410388/avatars/b22dedba1dac0fbcb9fc274e62238b08.webp?size=128',
                        id     : '345623411435767902',
                        message: data,
                        name   : 'Wand Of Haha 2.0',
                        time   : new Date().getTime().toLocaleString()
                    }
                };
            },
            '3456234114357679023': () => {
                return {
                    code   : 200,
                    message: 'success',
                    data   : {
                        avatar : 'https://cdn.discordapp.com/avatars/598588658177671188/df122ff3d7dfa25674aed205a043684f.webp?size=128',
                        id     : '3456234114357679023',
                        message: data,
                        name   : 'Humfrey',
                        time   : new Date().getTime().toLocaleString()
                    }
                };
            },
            '3456234161435767908': () => {
                return {
                    code   : 200,
                    message: 'success',
                    data   : {
                        avatar : 'https://cdn.discordapp.com/avatars/1049673722434437160/23653805be14a796eb0fab4795cc6f7a.webp?size=100',
                        id     : '3456234161435767908',
                        message: data,
                        name   : 'NaRiver',
                        time   : new Date().getTime().toLocaleString()
                    }
                };
            },
            '3456234114357677908': () => {
                return {
                    code   : 200,
                    message: 'success',
                    data   : {
                        avatar : 'https://cdn.discordapp.com/avatars/482216415147982848/c2b04dce7319282ff2cdc6275e13d52a.webp?size=128',
                        id     : '3456234161435767908',
                        message: data,
                        name   : 'Deep Water',
                        time   : new Date().getTime().toLocaleString()
                    }
                };
            },
            '345623411435767907': () => {
                return {
                    code   : 200,
                    message: 'success',
                    data   : {
                        avatar : 'https://cdn.discordapp.com/avatars/763293201062035486/5396342ba4e3bf24661c146cdae526a1.webp?size=100',
                        id     : '345623411435767907',
                        message: data,
                        name   : 'Cold Day',
                        time   : new Date().getTime().toLocaleString()
                    }
                };
            },
            '345623411435767856': () => {
                return {
                    code   : 200,
                    message: 'success',
                    data   : {
                        avatar : 'https://cdn.discordapp.com/avatars/1005775211590860840/d2daab62c08bd91e3d2ac55487748819.webp?size=100',
                        id     : '345623411435767856',
                        message: data,
                        name   : 'KaiDe-E',
                        time   : new Date().getTime().toLocaleString()
                    }
                };
            },
            '345623411435767903': () => {
                return {
                    code   : 200,
                    message: 'success',
                    data   : {
                        avatar : 'https://cdn.discordapp.com/avatars/815320694229434389/edee656091571282d3feef2edfd9e1f4.webp?size=100',
                        id     : '345623411435767903',
                        message: data,
                        name   : 'YoSaRi',
                        time   : new Date().getTime().toLocaleString()
                    }
                };
            },
            '345623411435767904': () => {
                return {
                    code   : 200,
                    message: 'success',
                    data   : {
                        avatar : 'https://cdn.discordapp.com/avatars/741484940893487175/e698fba6dd66c30abd648cb23c3f5ee7.webp?size=100',
                        id     : '345623411435767904',
                        message: data,
                        name   : 'Ob-Sir',
                        time   : new Date().getTime().toLocaleString()
                    }
                };
            },
            '3456234114357679088': () => {
                return {
                    code   : 200,
                    message: 'success',
                    data   : {
                        avatar : 'https://cdn.discordapp.com/avatars/763298729762488330/6d1ec1e2b226fab6ee79231604cd87a7.webp?size=100',
                        id     : '3456234114357679088',
                        message: data,
                        name   : 'EElainaya',
                        time   : new Date().getTime().toLocaleString()
                    }
                };
            },
            '3456234114357679087': () => {
                return {
                    code   : 200,
                    message: 'success',
                    data   : {
                        avatar : 'https://cdn.discordapp.com/avatars/511265015647436820/6db4e889181655645d92b70e53542dba.webp?size=100',
                        id     : '3456234114357679087',
                        message: data,
                        name   : 'Mr.Smith',
                        time   : new Date().getTime().toLocaleString()
                    }
                };
            },
            '3456234114357679082': () => {
                return {
                    code   : 200,
                    message: 'success',
                    data   : {
                        avatar : 'https://cdn.discordapp.com/avatars/809486916612653129/95831cc675c39c894cc7c43af398c5f4.webp?size=100',
                        id     : '3456234114357679082',
                        message: data,
                        name   : 'Ms.Timesiana',
                        time   : new Date().getTime().toLocaleString()
                    }
                };
            },
            '345623411435767855': () => {
                return {
                    code   : 200,
                    message: 'success',
                    data   : {
                        avatar : 'https://cdn.discordapp.com/avatars/951779489984151622/11a40f8c62e5c0ec02e2dc49e6289642.webp?size=100',
                        id     : '345623411435767855',
                        message: data,
                        name   : 'Mizuki',
                        time   : new Date().getTime().toLocaleString()
                    }
                };
            },
            default: () => {
                return {
                    code   : 200,
                    message: 'success',
                    data
                };
            }
        };

        const handleId = (id) => {
            const handler = strategy[id] || strategy['default'];
            return handler();
        };

        const result = handleId(id);
        return result;
    }
};

// 实时聊天数据
export default {
    // 收到的消息，并根据id进行不同的处理
    url     : '/chat/ing',
    method  : 'post',
    //post的参数为：content:"阿瑟的发生大",id:"3456234114357679088",public async getChatSend(data: object): Promise<Response<{ data: IChatSendResponse }>> {
    response: ({ body }) => {
        // 返回一个随机id的函数，返回id如345623411435767999
        function generateRandomId() {
            const randomNum = Math.floor(Math.random() * 1000000000000000); // 生成一个14位的随机整数
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
                // message: "你好，我是小助手，有什么可以帮助你的吗？"
                //     遵守类型
                //     content: string;
                //     messageType: string;
                //     time: string;
                //     messageFrom: string;
                //     messageId: string;随机生成
                //     isShow?: boolean;
                //     isEdit?: boolean;
                content    : '你好',
                messageType: 'text',
                time       : new Date().getTime(),
                messageFrom: 'me',
                messageId  : generateRandomId().toString()
            };
        } else if (content.match(/^(你是谁|你叫什么名字|你叫啥|你是谁啊|你是谁呀|你是谁呢|你是谁的|\?\|你是)$/i)) {
            // 处理问名字的逻辑
            data = {
                content    : '我是xxx',
                messageType: 'text',
                time       : new Date().getTime(),
                messageFrom: 'me',
                messageId  : generateRandomId
            };
        } else {
            // 处理其他消息的逻辑
            data = {
                content    : randomMessage[randomIndex],
                messageType: 'text',
                time       : new Date().getTime(),
                messageFrom: 'me',
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
                    data
                };
            },
            '345623411435767899': () => {
                return {
                    code   : 200,
                    message: 'success',
                    data
                };
            },
            '345623411435767901': () => {
                return {
                    code   : 200,
                    message: 'success',
                    data
                };
            },
            '345623411435767902': () => {
                return {
                    code   : 200,
                    message: 'success',
                    data
                };
            },
            '3456234114357679023': () => {
                return {
                    code   : 200,
                    message: 'success',
                    data
                };
            },
            '3456234161435767908': () => {
                return {
                    code   : 200,
                    message: 'success',
                    data
                };
            },
            '3456234114357677908': () => {
                return {
                    code   : 200,
                    message: 'success',
                    data
                };
            },
            '345623411435767907': () => {
                return {
                    code   : 200,
                    message: 'success',
                    data
                };
            },
            '345623411435767856': () => {
                return {
                    code   : 200,
                    message: 'success',
                    data
                };
            },
            '345623411435767903': () => {
                return {
                    code   : 200,
                    message: 'success',
                    data
                };
            },
            '345623411435767904': () => {
                return {
                    code   : 200,
                    message: 'success',
                    data
                };
            },
            '3456234114357679088': () => {
                return {
                    code   : 200,
                    message: 'success',
                    data
                };
            },
            '3456234114357679087': () => {
                return {
                    code   : 200,
                    message: 'success',
                    data
                };
            },
            '3456234114357679082': () => {
                return {
                    code   : 200,
                    message: 'success',
                    data
                };
            },
            '345623411435767855': () => {
                return {
                    code   : 200,
                    message: 'success',
                    data
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

// 实时聊天数据

export default {
    // 收到的消息，并根据id进行不同的处理
    url: '/chat/ing',
    method: 'post',
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
            '不好意思，我没太听懂你说什么，能不能再解释一下呢？',
            '这个问题好像比较复杂啊，得想一想怎么才能回答呢。',
            '等一下啊，我看看怎么回答比较好。',
            '这个问题好像需要更多的背景信息才能回答。',
            '嗯...你的问题让我有些犹豫，需要再考虑一下。',
            '可能是我太笨了，能不能请你再解释一下呢？',
            '（小声）其实我也不是很懂呢。',
            '这个问题不太好回答啊，需要再想想。',
            '我觉得你这个问题很有意思，但我不太确定自己能不能回答。',
            '这个问题好像比较博大精深，不过我会尽力而为的。',
            '哇，你问得真是有深度！让我想一想怎么最好回答。',
            '这个问题确实让我有点难以回答，不过我会尽快给你答复。',
            '啊，让我想想怎么回答比较好。',
            '呜呜...这个问题不太好回答啊！',
        ];
        const randomIndex = Math.floor(Math.random() * randomMessage.length);
        // 根据content进行不同的处理
        if (content.match(/^(你好|您好|hello|hi|哈喽|早上好|下午好|晚上好)$/i)) {
            // 处理问好语句的逻辑
            data = {
                content: '你好，JDSALing。',
                messageType: 'text',
                time: new Date().toLocaleString(),
                messageFrom: 'self',
                messageId: generateRandomId().toString(),
            };
        } else if (content.match(/^(静态)$/i)) {
            // 处理问名字的逻辑
            data = {
                content:
                    'Java中，静态可以用于变量、代码块、方法和内部类（Nested Class）。它的作用就是将成员与特定的一个类或接口关联起来，而不是具体的对象。以下是几种静态的使用方式：\n' +
                    '\n' +
                    '    1.静态变量：使用 static 关键字修饰，在类被加载时就已经被初始化，被该类的全部实例共享，且可通过类名直接访问。\n' +
                    '\n' +
                    '    2.静态代码块：使用 static 关键字声明，在类被加载时执行，主要用于对静态变量进行初始化赋值或创建静态资源等。\n' +
                    '\n' +
                    '    3.静态方法：使用 static 关键字修饰，属于类级别的方法，可以通过类名直接调用，在调用它时无需创建对象实例。\n' +
                    '\n' +
                    '    4.静态内部类：使用 static 关键字修饰，属于外部类的静态成员，与外部对象不相关，可以直接通过外部类名访问，其内部只能包含静态成员并且不能访问外部对象的非静态成员。\n' +
                    '\n' +
                    '需要注意的是，不推荐在静态方法和静态代码块中使用非静态的变量和方法，因为它们在该类第一次初始化时被调用，而此时非静态成员还没有被创建出来。\n',
                messageType: 'text',
                time: new Date().toLocaleString(),
                messageFrom: 'self',
                messageId: generateRandomId().toString(),
            };
        } else if (content.match(/^(学习)$/i)) {
            // 处理问名字的逻辑
            data = {
                content: '我觉得，你需要持之以恒：坚持在学习上花费时间和精力，不断自我提高和进步。',
                messageType: 'text',
                time: new Date().toLocaleString(),
                messageFrom: 'self',
                messageId: generateRandomId().toString(),
            };
        } else {
            // 处理其他消息的逻辑
            data = {
                content: randomMessage[randomIndex],
                messageType: 'text',
                time: new Date().toLocaleString(),
                messageFrom: 'self',
                messageId: generateRandomId().toString(),
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
                    code: 200,
                    message: 'success',
                    // 修改data的avatar与name
                    data: {
                        avatar: 'http://39.105.229.249/ftp/ling/future/user/liuliu.webp',
                        id: '345623411435767898',
                        message: data,
                        name: 'liuliu',
                        time: new Date().getTime().toLocaleString(),
                    },
                };
            },
            '345623411435767899': () => {
                return {
                    code: 200,
                    message: 'success',
                    data: {
                        avatar: 'http://39.105.229.249/ftp/ling/future/user/yedz.webp',
                        id: '345623411435767899',
                        message: data,
                        name: 'Ye Ldzy>>',
                        time: new Date().getTime().toLocaleString(),
                    },
                };
            },
            345623411435767900: () => {
                return {
                    code: 200,
                    message: 'success',
                    data: {
                        avatar: 'http://39.105.229.249/ftp/ling/future/user/ecm.webp',
                        id: '345623411435767900',
                        message: data,
                        name: '[ECM]HamSter',
                        time: new Date().getTime().toLocaleString(),
                    },
                };
            },
            '345623411435767901': () => {
                return {
                    code: 200,
                    message: 'success',
                    data: {
                        avatar: 'http://39.105.229.249/ftp/ling/future/user/catand.webp',
                        id: '345623411435767901',
                        message: data,
                        name: 'Catand',
                        time: new Date().getTime().toLocaleString(),
                    },
                };
            },
            '3456234114357679023': () => {
                return {
                    code: 200,
                    message: 'success',
                    data: {
                        avatar: 'http://39.105.229.249/ftp/ling/future/user/humry.webp',
                        id: '3456234114357679023',
                        message: data,
                        name: 'Humfrey',
                        time: new Date().getTime().toLocaleString(),
                    },
                };
            },
            '3456234161435767908': () => {
                return {
                    code: 200,
                    message: 'success',
                    data: {
                        avatar: 'http://39.105.229.249/ftp/ling/future/user/nr.webp',
                        id: '3456234161435767908',
                        message: data,
                        name: 'NaRiver',
                        time: new Date().getTime().toLocaleString(),
                    },
                };
            },
            '3456234114357677908': () => {
                return {
                    code: 200,
                    message: 'success',
                    data: {
                        avatar: 'http://39.105.229.249/ftp/ling/future/user/dw.webp',
                        id: '3456234161435767908',
                        message: data,
                        name: 'Deep Water',
                        time: new Date().getTime().toLocaleString(),
                    },
                };
            },
            '345623411435767907': () => {
                return {
                    code: 200,
                    message: 'success',
                    data: {
                        avatar: 'http://39.105.229.249/ftp/ling/future/user/cm.webp',
                        id: '345623411435767907',
                        message: data,
                        name: 'Cold Mint',
                        time: new Date().getTime().toLocaleString(),
                    },
                };
            },
            '3456234114357679088': () => {
                return {
                    code: 200,
                    message: 'success',
                    data: {
                        avatar: 'http://39.105.229.249/ftp/ling/future/user/eely.webp',
                        id: '3456234114357679088',
                        message: data,
                        name: 'EElainaya',
                        time: new Date().getTime().toLocaleString(),
                    },
                };
            },
            '3456234114357679087': () => {
                return {
                    code: 200,
                    message: 'success',
                    data: {
                        avatar: 'http://39.105.229.249/ftp/ling/future/user/mrs.webp',
                        id: '3456234114357679087',
                        message: data,
                        name: 'Mr.Smith',
                        time: new Date().getTime().toLocaleString(),
                    },
                };
            },
            '3456234114357679082': () => {
                return {
                    code: 200,
                    message: 'success',
                    data: {
                        avatar: 'http://39.105.229.249/ftp/ling/future/user/msx.webp',
                        id: '3456234114357679082',
                        message: data,
                        name: 'Ms.Timesiana',
                        time: new Date().getTime().toLocaleString(),
                    },
                };
            },
            default: () => {
                return {
                    code: 200,
                    message: 'success',
                    data,
                };
            },
        };

        const handleId = (id) => {
            const handler = strategy[id] || strategy['default'];
            return handler();
        };

        const result = handleId(id);
        return result;
    },
};

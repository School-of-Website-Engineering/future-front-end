// 实时聊天数据
export default {
    // 收到的消息，并根据id进行不同的处理
    url     : '/chat/ing',
    method  : 'post',
    response: ({ query }) => {
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
        switch (id) {
            case '345623411435767898':
        }
        const { id, content } = query;
        let data = {};
        // 根据content进行不同的处理
        if (content.match(/^你好$|^hi$|^hello$/i)) {
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
                content    : '你好，我是小助手，有什么可以帮助你的吗？',
                messageType: 'text',
                time       : new Date().getTime(),
                messageFrom: 'me',
                messageId  : '345623411435767656'
            };
        } else {
            // 处理其他消息的逻辑
            data = {
                content    : '暂时无法识别您的意图，请换种方式表达。',
                messageType: 'text',
                time       : new Date().getTime(),
                messageFrom: 'me',
                messageId  : '345623411435767999'
            };
        }
        return { data };
    }
};

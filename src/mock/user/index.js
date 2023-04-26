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
        response: (param) => {
            switch (param.id) {
                case '123':
                    return {
                        code   : 200,
                        message: 'success',
                        data   : {
                            count: 1
                        }
                    };
                case '456':
                    return {
                        code   : 200,
                        message: 'success',
                        data   : {
                            count: 2
                        }
                    };
                case '789':
                    return {
                        code   : 200,
                        message: 'success',
                        data   : {
                            count: 3
                        }
                    };
            }
        }
    }
];

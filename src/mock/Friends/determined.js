// 待定好友mock
export default [
    // 查询好友
    {
        // 请求地址
        url     : '/user/friends/pending',
        // 请求方法
        method  : 'get',
        // 响应数据
        response: () => {
            // 待定好友列表
            const friends = [
                {
                    id          : '345623411435767852',
                    name        : '484 Phking',
                    avatar      : 'http://39.105.229.249/ftp/ling/future/user/484.webp',
                    isInitiative: false
                },
                {
                    id          : '345623411435767855',
                    name        : 'Just an assassin enjoyer',
                    avatar      : 'http://39.105.229.249/ftp/ling/future/user/blx.webp',
                    isInitiative: true
                }
            ];

            return {
                code   : 0,
                message: 'success',
                data   : {
                    friends
                }
            };
        }
    },
    {
        // 删除特定待定好友请求
        url     : '/user/friends/:id',
        // 请求方法
        method  : 'delete',
        // 响应数据
        response: () => {
            return {
                code   : 0,
                message: 'success'
            };
        }
    }
];

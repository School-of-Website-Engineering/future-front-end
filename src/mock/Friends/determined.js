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
                    avatar      : 'https://cdn.discordapp.com/avatars/307917208460460033/a_8e5acc68e72c83cba21286a27c4bbfa0.webp?size=128',
                    isInitiative: false
                },
                {
                    id          : '345623411435767855',
                    name        : 'Just an assassin enjoyer',
                    avatar      : 'https://cdn.discordapp.com/avatars/714393480645967985/ebe1b411f87e82ae43822d1b157d8a2c.webp?size=128',
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

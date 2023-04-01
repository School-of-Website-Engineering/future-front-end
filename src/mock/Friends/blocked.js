// 屏蔽好友列表
export default {
    //     请求地址
    url     : '/user/friends/blocked',
    //     请求方式
    method  : 'get',
    //     响应数据
    response: () => {
        return {
            code   : 0,
            message: 'success',
            data   : {
                friends: [
                    {
                        id    : '345623411435767858',
                        name  : 'Verify',
                        avatar: 'https://cdn.discordapp.com/avatars/548410451818708993/7e6dc28f38ae71f76c6dcdd879ddbe29.webp?size=128'
                    },
                    {
                        id    : '345623411435767856',
                        name  : 'RankBot',
                        avatar: 'https://cdn.discordapp.com/avatars/384768829684711434/01e0e6fd58445abb947b02f4d6118ed7.webp?size=48'
                    },
                    {
                        id    : '345623411435767898',
                        name  : 'Uchufox GD',
                        avatar: 'https://cdn.discordapp.com/avatars/748558833143644211/cbbdfa6dfe322437ab5239b0baab826b.webp?size=48'
                    },
                    {
                        id    : '345623411435767899',
                        name  : 'Zepparian',
                        avatar: 'https://cdn.discordapp.com/icons/541484311354933258/cfc562be431184efc63ce67daf2fe646.webp?size=160'
                    },
                    {
                        id    : '345623411435767900',
                        name  : 'Stoikk',
                        avatar: 'https://cdn.discordapp.com/avatars/900411299010334780/dbc93759a66504edf078ec273c6b074a.webp?size=48'
                    }
                ]
            }
        };
    }
};

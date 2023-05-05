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
                        avatar: 'http://39.105.229.249/ftp/ling/future/user/dx.webp'
                    },
                    {
                        id    : '345623411435767856',
                        name  : 'RankBot',
                        avatar: 'http://39.105.229.249/ftp/ling/future/user/ed.webp'
                    },
                    {
                        id    : '345623411435767898',
                        name  : 'Uchufox GD',
                        avatar: 'http://39.105.229.249/ftp/ling/future/user/fox.webp'
                    },
                    {
                        id    : '345623411435767900',
                        name  : 'Stoikk',
                        avatar: 'http://39.105.229.249/ftp/ling/future/user/ok.webp'
                    }
                ]
            }
        };
    }
};

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
                        avatar: 'https://rust.coldmint.top/ftp/ling/future/user/dx.webp'
                    },
                    {
                        id    : '345623411435767856',
                        name  : 'RankBot',
                        avatar: 'https://rust.coldmint.top/ftp/ling/future/user/ed.webp'
                    },
                    {
                        id    : '345623411435767898',
                        name  : 'Uchufox GD',
                        avatar: 'https://rust.coldmint.top/ftp/ling/future/user/fox.webp'
                    },
                    {
                        id    : '345623411435767900',
                        name  : 'Stoikk',
                        avatar: 'https://rust.coldmint.top/ftp/ling/future/user/ok.webp'
                    }
                ]
            }
        };
    }
};

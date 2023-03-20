// 侧边栏列表数据
export default [
    // 用户登录
    {
        // 请求地址
        url     : '/aside/sidebarList',
        // 请求方法
        method  : 'get',
        // 响应数据
        response: () => {
            return {
                code   : 0,
                message: 'success',
                // 侧边栏频道数据
                data   : [
                    {
                        id   : '437456121056741323',
                        name : '私信',
                        //     消息数量
                        count: 0,
                        //     图标
                        img  : 'https://img.yzcdn.cn/vant/user-inactive.png'
                    },
                    {
                        id   : '437456121056741324',
                        name : '通知',
                        count: 21,
                        img  : 'https://img.yzcdn.cn/vant/user-inactive.png'
                    },
                    {
                        id   : '437456121056741325',
                        name : '收藏',
                        count: 13,
                        img  : 'https://img.yzcdn.cn/vant/user-inactive.png'
                    },
                    {
                        id   : '437456121056741326',
                        name : '草稿',
                        count: 456,
                        img  : 'https://img.yzcdn.cn/vant/user-inactive.png'
                    }
                ]
            };
        }
    }
];

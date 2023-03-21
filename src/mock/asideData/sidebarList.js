// 侧边栏列表数据
export default [
    // 用户登录
    {
        // 请求地址
        url: '/aside/sidebarList',
        // 请求方法
        method: 'get',
        // 响应数据
        response: () => {
            return {
                code: 0,
                message: 'success',
                // 侧边栏频道数据
                data: [
                    {
                        id: '437456121056741323',
                        name: '私信',
                        //     消息数量
                        count: 0,
                        //     图标
                        img: 'https://cdn.discordapp.com/icons/330141901279985665/14c13550d95d23ad7d3ab772dfbba89d.webp?size=160',
                    },
                    {
                        id: '437456121056741324',
                        name: '通知',
                        count: 21,
                        img: 'https://cdn.discordapp.com/icons/296399356196552705/c7ff3ef74552e6ebbea46a5fbbded337.webp?size=160',
                    },
                    {
                        id: '437456121056741325',
                        name: '收藏',
                        count: 13,
                        img: 'https://cdn.discordapp.com/icons/548866437931073570/e6a690365223bab617de902853612bb3.webp?size=160',
                    },
                    {
                        id: '437456121056741326',
                        name: '草稿',
                        count: 456,
                        img: '\thttps://cdn.discordapp.com/icons/721156457630007316/3531587942f5cfdba2ba702c2659fd1e.webp?size=160',
                    },
                ],
            };
        },
    },
];

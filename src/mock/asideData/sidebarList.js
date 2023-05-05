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
                        name: 'Rusted Warfare',
                        //     消息数量
                        count: 0,
                        //     图标
                        img: 'http://39.105.229.249/ftp/ling/future/server/rusted.webp',
                    },
                    {
                        id: '437456121056741324',
                        name: 'Pixel Dungeon',
                        count: 21,
                        img: 'http://39.105.229.249/ftp/ling/future/server/pd.webp',
                    },
                    {
                        id: '437456121056741325',
                        name: 'Not Tiled',
                        count: 13,
                        img: 'http://39.105.229.249/ftp/ling/future/server/nt.webp',
                    },
                    {
                        id: '437456121056741326',
                        name: 'RW-StarRiver',
                        count: 456,
                        img: 'http://39.105.229.249/ftp/ling/future/server/star.webp',
                    },
                    {
                        id: '437456121056741327',
                        name: 'Open AI Server',
                        count: 0,
                        img: 'http://39.105.229.249/ftp/ling/future/server/gpt.webp',
                    },
                    {
                        id: '437456121056741328',
                        name: 'Cube',
                        count: 10,
                        img: 'http://39.105.229.249/ftp/ling/future/server/cube.webp',
                    },
                    {
                        id: '437456121056741329',
                        name: "Sid Meier's Civilization VI",
                        count: 30,
                        img: 'http://39.105.229.249/ftp/ling/future/server/svi.png',
                    },
                ],
            };
        },
    },
];

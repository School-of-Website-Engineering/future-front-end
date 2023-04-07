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
                        img  : 'https://cdn.discordapp.com/icons/330141901279985665/14c13550d95d23ad7d3ab772dfbba89d.webp?size=160'
                    },
                    {
                        id   : '437456121056741324',
                        name : '通知',
                        count: 21,
                        img  : 'https://cdn.discordapp.com/icons/296399356196552705/c7ff3ef74552e6ebbea46a5fbbded337.webp?size=160'
                    },
                    {
                        id   : '437456121056741325',
                        name : '收藏',
                        count: 13,
                        img  : 'https://cdn.discordapp.com/icons/548866437931073570/e6a690365223bab617de902853612bb3.webp?size=160'
                    },
                    {
                        id   : '437456121056741326',
                        name : '草稿',
                        count: 456,
                        img  : 'https://cdn.discordapp.com/icons/721156457630007316/4428a5c5f5d740b0280415fa2f16d247.webp?size=160'
                    },
                    {
                        id   : '437456121056741327',
                        name : '服务器',
                        count: 0,
                        img  : 'https://cdn.discordapp.com/icons/974519864045756446/d7ec4ed5884437bae0333aa345a97160.webp?size=160'
                    },
                    {
                        id   : '437456121056741328',
                        name : '好友',
                        count: 10,
                        img  : 'https://cdn.discordapp.com/icons/541484311354933258/a_8d6214652c64574bfdde14e05dde7708.webp?size=160'
                    },
                    {
                        id   : '437456121056741329',
                        name : '群组',
                        count: 30,
                        img  : 'https://cdn.discordapp.com/icons/356833056562348042/a_7908c43b1e2f91125a7404c7adcb7372.webp?size=160'
                    },
                    {
                        id   : '437456121056741330',
                        name : '频道',
                        count: 40,
                        img  : 'https://cdn.discordapp.com/icons/706661525439512597/a_03113c74d072403ee7d7e78c1775bbc1.webp?size=160'
                    },
                    {
                        id   : '437456121056741331',
                        name : 'DM',
                        count: 450,
                        img  : 'https://cdn.discordapp.com/icons/251072485095636994/a_37069f32ec5e98ad8bf0e8334df18594.webp?size=160'
                    }
                ]
            };
        }
    }
];

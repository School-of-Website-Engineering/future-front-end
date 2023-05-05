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
                        name : 'Rusted Warfare',
                        //     消息数量
                        count: 0,
                        //     图标
                        img  : 'https://cdn.discordapp.com/icons/330141901279985665/14c13550d95d23ad7d3ab772dfbba89d.webp?size=160'
                    },
                    {
                        id   : '437456121056741324',
                        name : 'Pixel Dungeon',
                        count: 21,
                        img  : 'https://cdn.discordapp.com/icons/296399356196552705/c7ff3ef74552e6ebbea46a5fbbded337.webp?size=160'
                    },
                    {
                        id   : '437456121056741325',
                        name : 'Not Tiled',
                        count: 13,
                        img  : 'https://cdn.discordapp.com/icons/548866437931073570/e6a690365223bab617de902853612bb3.webp?size=160'
                    },
                    {
                        id   : '437456121056741326',
                        name : 'RW-StarRiver',
                        count: 456,
                        img  : 'https://cdn.discordapp.com/icons/721156457630007316/4428a5c5f5d740b0280415fa2f16d247.webp?size=160'
                    },
                    {
                        id   : '437456121056741327',
                        name : 'Open AI Server',
                        count: 0,
                        img  : 'https://cdn.discordapp.com/icons/974519864045756446/d7ec4ed5884437bae0333aa345a97160.webp?size=160'
                    },
                    {
                        id   : '437456121056741328',
                        name : 'Cube',
                        count: 10,
                        img  : 'https://cdn.discordapp.com/avatars/744562248101396611/da75138093c6594eee95135c955cb972.webp?size=128'
                    },
                    {
                        id   : '437456121056741329',
                        name : "Sid Meier's Civilization VI",
                        count: 30,
                        img  : 'https://img-macjb.mac89.com/ico/201804/19122848_d3fb92409b.png'
                    }
                ]
            };
        }
    }
];

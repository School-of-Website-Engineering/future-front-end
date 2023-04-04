// 通过用户id查询用户信息
export default {
    url     : '/friends/searchFriends',
    type    : 'post',
    response: (config) => {
        const { id } = config.query;
        return {
            code: 200,
            data: {
                mapKey: {
                    id           : '1',
                    username     : 'Alpaͩcͤaͮ',
                    email        : '234532789ui@qq.com',
                    discriminator: '123456',
                    password     : 'LJjkiajBJLGljbJHGIulbjkUIJ2',
                    createdAt    : '2020-05-01T08:00:00.000Z',
                    updatedAt    : '2020-05-01T08:00:00.000Z',
                    role         : 'user',
                    img          : 'https://cdn.discordapp.com/avatars/107490111414882304/63e409984bde44efca2ba1889b863ed6.webp?size=128'
                }
            }
        };
    }
};

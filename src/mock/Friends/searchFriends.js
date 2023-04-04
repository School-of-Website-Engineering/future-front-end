// 通过用户id查询用户信息
export default {
    url     : '/relationships/getFriendByUserId2',
    type    : 'post',
    response: () => {
        return {
            code  : 200,
            reason: 'success',
            data  : {
                mapKey: {
                    id           : '2',
                    username     : '2',
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

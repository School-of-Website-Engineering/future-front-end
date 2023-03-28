// 登录注册mock
// 电子邮箱登录，登录时检查是否已经注册，如果没有注册则自动注册，如果已经注册则直接登录，登录成功后返回用户信息和token
import Mock from 'mockjs/dist/mock.js';

export default [
    {
        url: '/user/login',
        method: 'post',
        /**
         * @param {Object} config - 请求配置对象
         * @param {Object} config.body - 请求体对象
         * @param {string} config.body.email - 电子邮箱地址
         * @param {string} config.body.password - 密码
         */
        response: (config) => {
            const { email, password } = config.body;

            // users是一个数组，数组中的每一项都是一个用户对象
            const users = [
                {
                    id: '345623411435767898',
                    email: '41231@dfasd.com',
                    name: 'liuliu',
                    avatar: 'https://cdn.discordapp.com/avatars/1042734257149329418/5ab3131122ac145db5f2edf29e5a7730.webp?size=48',
                    status: 'online',
                },
            ];

            // 查询用户是否已经注册
            const user = users.find((user) => user.email === email);

            // 如果没有注册则自动注册
            if (!user) {
                users.push({
                    id: Mock.Random.guid(),
                    email: email,
                    password: password,
                    name: Mock.Random.cname(),
                    avatar: Mock.Random.image(
                        '48x48',
                        Mock.Random.color(),
                        '#757575',
                        'png',
                        Mock.Random.cname().substr(0, 1),
                    ),
                    status: 'online',
                });
            }

            // 登录成功后返回用户信息和token
            return {
                code: 0,
                message: 'success',
                data: {
                    user: {
                        id: user.id,
                        email: user.email,
                        name: user.name,
                        avatar: user.avatar,
                        status: user.status,
                        token: Mock.Random.guid(),
                        introduction: '我是一名前端开发工程师',
                        roles: ['admin'],
                    },
                },
            };
        },
    },
];

// 登录注册mock
// 电子邮箱登录，登录时检查是否已经注册，如果没有注册则自动注册，如果已经注册则直接登录，登录成功后返回用户信息和token

/**
 * 生成6位随机数
 * @returns {string}
 * */
const mailCode = '123456';
export default [
    // 登录
    {
        url: '/auth/login',
        method: 'post',
        response: (config) => {
            //     校验邮件验证码
            const { smsCode } = config.body;
            if (smsCode !== mailCode) {
                return {
                    code: 200,
                    reason: '登录成功',
                };
            }
        },
    },
    //     电子邮件验证码
    {
        url: '/auth/verify-code',
        method: 'post',
        response: (config) => {
            return {
                code: 200,
                reason: '电子邮件验证码发送成功',
                data: {
                    code: mailCode,
                },
            };
        },
    },
    // 退出登录
    {
        url: '/auth/logout',
        method: 'post',
        response: (config) => {
            return {
                code: 200,
                reason: '退出成功',
            };
        },
    },
    //注册
    {
        url: '/auth/register',
        method: 'post',
        response: (config) => {
            return {
                code: 200,
                reason: '注册成功',
            };
        },
    },
];

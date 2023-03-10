import userService from './demoApi';

userService
    .login({ username: 'admin', password: '123456' })
    .then((token) => {
        console.log('登录成功！', token);
    })
    .catch((error) => {
        console.error('登录失败：', error);
    });

userService
    .getInfo()
    .then((userInfo) => {
        console.log('用户信息：', userInfo);
    })
    .catch((error) => {
        console.error('获取用户信息失败：', error);
    });

userService
    .logout()
    .then(() => {
        console.log('退出登录成功！');
    })
    .catch((error) => {
        console.error('退出登录失败：', error);
    });
// userService.getAddress(1).then(addressInfo => {
//     console.log('用户地址：', addressInfo);
// }).catch(error => {
//     console.error('获取用户地址失败：', error);
// });
//使用async/await
// 获取用户address
async function getAddress(userId: number) {
    try {
        const addressInfo = await userService.getAddress(userId);
        console.log('用户地址：', addressInfo);
    } catch (error) {
        console.error('获取用户地址失败：', error);
    }
}
getAddress(1);

import { defineStore } from 'pinia';
import LoginService, { ILoginResponse, ILoginUserInput } from '@/api/login-register';

/**
 * 用于管理用户信息的 Pinia 存储。
 */
export const useUserLoginRegisterStore = defineStore('login-register-register', {
    state: () => ({
        // 用户信息
        user: {} as ILoginResponse
    }),
    getters: {},
    actions: {
        /**
         * 登录
         * @param userForm.username 用户名
         * @param userForm.password 密码
         * @param userForm.userEmail 用户邮箱
         * @param userForm.smsCode 验证码
         * @returns Promise 对象，解析为类型为 Response<ILoginResponse> 的响应结果
         */
        // 调用： userLoginRegisterStore.userLogin(loginForm);
        async userLogin(userForm: ILoginUserInput) {
            const { code, data } = await LoginService.getLogin(userForm);
            if (code === 200) {
                this.user = data;
            }
        }
    }
});

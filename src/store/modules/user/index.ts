import { defineStore } from 'pinia';
import UserLoginService, { UserState } from '@/api/userTset';

export const useUserStore = defineStore('user', {
    state: (): UserState => ({
        username: '',
        token   : ''
    }),
    getters: {
        hello: (state): string => 'Hello!' + state.username
    },
    actions: {
        // 异步 action，一般用来处理异步逻辑
        async login(userData: object): Promise<void> {
            const data = await UserLoginService.getUserLogin<Response>(userData);
            console.log(data);
        },
        //同步 action
        logout(): void {
            this.token = '';
            this.username = '';
        }
    }
});

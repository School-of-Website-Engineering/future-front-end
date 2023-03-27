import { defineStore } from 'pinia';
import UserFriendsService, { IUserFriendsResponse } from '@/api/friends';

export const useUserFriendsStore = defineStore('menu', {
    state: () => {
        return {
            friends: [] as IUserFriendsResponse[]
        };
    },
    getters: {},
    actions: {
        //     异步请求
        async getFriends(): Promise<void> {
            const { data, code } = await UserFriendsService.getUserFriends();
            if (code === 0) {
                this.friends = data.friends || [];
            }
        }
    }
});

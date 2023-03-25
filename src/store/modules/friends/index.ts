import { defineStore } from 'pinia';
import UserFriendsService, { IUserFriendsResponse } from '@/api/friends';

export const useUserFriendsStore = defineStore('menu', {
    state: () => {
        return {
            friends: [] as any,
        };
    },
    getters: {},
    actions: {
        //     异步请求
        async getFriends(): Promise<void> {
            const { data, code } = await UserFriendsService.getUserFriends();
            if (data) {
                this.friends = data.friends;
            }
        },
    },
});

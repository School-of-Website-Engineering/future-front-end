import { defineStore } from 'pinia';
import UserFriendsService, { IUserFriendsResponse } from '@/api/friends';

/**
 * 用于管理用户好友的 Pinia 存储。
 */
export const useUserFriendsStore = defineStore('menu', {
    state: () => ({
        /**
         * 用户好友列表。
         *
         * @type {UserFriend[]}
         */
        friends: [] as IUserFriendsResponse[],
    }),

    getters: {},

    actions: {
        /**
         * 异步从 API 检索用户好友列表，并设置“friends”状态属性。
         *
         * @async
         */
        async getFriends() {
            /**
             * 检索用户好友 API 调用的响应对象。
             *
             * @type {object}
             * @property {UserFriendsResponse} data - 包含用户好友列表的响应数据。
             * @property {number} code - 表示成功或失败的响应代码。
             */
            const { data, code } = await UserFriendsService.getUserFriends();

            if (code === 0) {
                this.friends = data.friends || [];
            }
        },
    },
});

import { defineStore } from 'pinia';
import UserFriendsService, {
    IUserFriendsBlockedResponse,
    IUserFriendsPendingResponse,
    IUserFriendsResponse
} from '@/api/friends';

/**
 * 用于管理用户好友的 Pinia 存储。
 */
export const useUserFriendsStore = defineStore('friends', {
    state: () => ({
        /**
         * 用户好友列表。
         * @type {IUserFriendsResponse[]}
         **/ friends                  : <IUserFriendsResponse[]>[],
        /**
         * 用户待定好友列表。
         * @type {IUserFriendsPendingResponse[]}
         */ pendingFriends           : <IUserFriendsPendingResponse[]>[],
        /**
         * 用户待定好友排序后的列表
         * @type {IUserFriendsPendingResponse[]}
         * */ pendingFriendsList       : <IUserFriendsPendingResponse[]>[],
        /**
         * 待定好友列表中的好友请求列表
         * @type {IUserFriendsPendingResponse[]}
         * */ pendingFriendsRequestList: <IUserFriendsPendingResponse[]>[],
        /**
         * 在线好友列表
         * @type {IUserFriendsResponse[]}
         * */ onlineFriendsList        : <IUserFriendsResponse[]>[],
        /**
         * 用户屏蔽的好友列表
         * @type {IUserFriendsBlockedResponse[]}
         * */ blockedFriends           : <IUserFriendsBlockedResponse[]>[]
    }),

    getters: {
        //将pendingFriends列表中为isInitiative: false的排到前面,并赋值给this.pendingFriendsList
        handlePendingFriendsList(state): IUserFriendsPendingResponse[] {
            state.pendingFriendsList = state.pendingFriends
                .filter((item) => !item.isInitiative)
                .concat(state.pendingFriends.filter((item) => item.isInitiative));
            return state.pendingFriendsList;
        },
        //将pendingFriends列表中为isInitiative: false的装入pendingFriendsRequestList
        handlePendingFriendsRequestList(state): IUserFriendsPendingResponse[] {
            state.pendingFriendsRequestList = state.pendingFriends.filter((item) => !item.isInitiative);
            return state.pendingFriendsRequestList;
        },
        //将friends列表中值为offline的剔除然后将其他的展开装入onlineFriendsList
        handleOnlineFriendsList(state): IUserFriendsResponse[] {
            state.onlineFriendsList = state.friends.filter((item) => item.status !== 'offline');
            return state.onlineFriendsList;
        }
    },

    actions: {
        /**
         * 异步从 API 检索用户好友列表，并设置“friends”状态属性。
         * @async
         */
        async getFriends() {
            /**
             * 检索用户好友 API 调用的响应对象。
             * @type {object}
             * @property {IUserFriendsResponse} data - 包含用户好友列表的响应数据。
             * @property {number} code - 表示成功或失败的响应代码。
             */
            const { data, code } = await UserFriendsService.getUserFriends();

            if (code === 0) {
                this.friends = data.friends || [];
            }
        },
        /**
         * 异步从 API 检索用户待定好友列表，并设置“pendingFriends”状态属性。
         * @async
         */
        async getPendingFriends() {
            /**
             * 检索用户待定好友 API 调用的响应对象。
             * @type {object}
             * @property {IUserFriendsPendingResponse} data - 包含用户待定好友列表的响应数据。
             * @property {number} code - 表示成功或失败的响应代码。
             */
            const { data, code } = await UserFriendsService.getUserFriendsPending();

            if (code === 0) {
                this.pendingFriends = data.friends || [];
                console.log('---------待定好友列表---------');
                console.log('pendingFriends', this.pendingFriends);
                console.log('---------待定好友列表排序后---------');
                console.log('pendingFriendsList', this.pendingFriendsList);
            }
        },
        /**
         * 异步从 API 检索用户屏蔽的好友列表，并设置“blockedFriends”状态属性。
         * @async
         */
        async getBlockedFriends() {
            /**
             * 检索用户屏蔽的好友 API 调用的响应对象。
             * @type {object}
             * @property {IUserFriendsBlockedResponse} data - 包含用户屏蔽的好友列表的响应数据。
             * @property {number} code - 表示成功或失败的响应代码。
             */
            const { data, code } = await UserFriendsService.getUserFriendsBlocked();
            if (code === 0) {
                this.blockedFriends = data.friends || [];
            }
        }
    }
});

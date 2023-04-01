import { defineStore } from 'pinia';
import { useUserFriendsStore } from '@/store/modules/friends';

/**
 * 用于管理私信数量显示的 Pinia 存储。
 */
interface IPrivateLetterCount {
    [key: string]: any;
}

export const usePrivateLetterStore = defineStore('privateLetter', {
    state: () => ({
        /**
         * 私信数量
         * @type {number}
         **/ privateLetterCount: [] as Array<IPrivateLetterCount>
    }),
    getters: {
        /**
         * 获取私信数量
         */
        getPrivateLetterCount(state): Array<IPrivateLetterCount> {
            //将useUserFriendsStore中handlePendingFriendsRequestList的数组装入privateLetterCount，并返回
            state.privateLetterCount = useUserFriendsStore().handlePendingFriendsRequestList;
            return state.privateLetterCount;
        }
    },
    actions: {}
});

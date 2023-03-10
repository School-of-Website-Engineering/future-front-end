import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    // 开启数据缓存
    persist: {
        storage: sessionStorage
    },
    // id: 'demo', // id必填，且需要唯一。两种写法
    state: () => {
        return {
            name: '张三'
        };
    },
    getters: {
        nameLength: (state) => state.name.length,
        fullName  : (state) => {
            return state.name + '丰';
        }
    },
    actions: {
        updateName(name: string) {
            this.name = name;
        }
    }
});

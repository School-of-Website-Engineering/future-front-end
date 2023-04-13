<template>
    <!-- 顶部搜索 -->
    <div class="search-box-header-top" style="width: 770px">
        <div class="search-box">
            <el-input
                class="search-box-input"
                v-model="search"
                placeholder="搜索"
                @keyup.enter.native="searchFriend"
            ></el-input>
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <h2 class="title-x4dI75 container-q97qHp">{{ props.titleText }} — {{ props.list.length }}</h2>
    </div>
    <div class="placeholder" v-if="props.list.length === 0"></div>
    <template v-else>
        <div
            class="friends-list"
            v-for="(item, index) in props.list"
            :key="index"
            @click="toChat(item)"
            style="width: 755px"
        >
            <!-- 好友列表 -->
            <Friend
                :item="item"
                :statusMap="statusMap"
                :isInitiativeMap="isInitiativeMap"
                :icon-left="props.iconLeft as string"
                :icon-right="props.iconRight as string"
                :status="props.status as string"
            ></Friend>
        </div>
    </template>
    <!-- 弹出框 -->
    <el-dialog v-model="dialogTableVisible" title="Shipping address">
        <el-table :data="gridData">
            <el-table-column property="date" label="Date" width="150" />
            <el-table-column property="name" label="Name" width="200" />
            <el-table-column property="address" label="Address" />
        </el-table>
    </el-dialog>
</template>

<script setup lang="ts">
import { defineComponent, defineProps, ref } from 'vue';
import Friend from './FriendList.vue';
import router from '@/router';

const search = ref<string>('');
const dialogTableVisible = ref<boolean>(false);
// 表格数据
const gridData = [
    {
        date   : '2016-05-02',
        name   : 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District'
    },
    {
        date   : '2016-05-04',
        name   : 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District'
    },
    {
        date   : '2016-05-01',
        name   : 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District'
    },
    {
        date   : '2016-05-03',
        name   : 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District'
    }
];

defineComponent({
    name      : 'FriendsDisplay',
    components: {
        Friend
    }
});

const props = defineProps({
    titleText: {
        type   : String,
        default: ''
    },
    status: {
        type   : String,
        default: 'online'
    },
    list: {
        type   : Array as () => Array<any>,
        default: () => []
    },
    iconLeft: {
        type   : String,
        default: ''
    },
    iconRight: {
        type   : String,
        default: ''
    }
});

/**
 @description: 用于存储不同状态下的文字信息
 */ const statusMap = {
    online : '在线',
    offline: '离线',
    busy   : '忙碌',
    away   : '离开'
};
/**
 @description: 用于存储待定好友的文字信息
 */ const isInitiativeMap = {
    true : '送出的好友请求',
    false: '收到好友请求'
};

const searchFriend = () => {
    console.log(search.value);
};

/**
 * 跳转到聊天页面
 * @param {IAsideLPrivateResponse} item
 * @returns {Promise<void>}
 * */
const toChat = asyncTryCatch(async(item) => {
    console.log('----------跳转到聊天页面---------');
    console.log(item);
    // 如果是待定好友和已屏蔽就不跳转
    const validStatus = ['addFriend', 'blocked', 'ToBeDetermined'];

    if (validStatus.includes(props.status)) {
        dialogTableVisible.value = true;
        return;
    }

    await router.push(`/main/@me/${item.id}`);
});
</script>

<style lang="scss" scoped>
.search-box-header-top {
    padding-top: 15px;
    height: 90px;
    width: 100%;
    //固定至顶部
    position: sticky;
    top: 0;
    //    使其不会被遮挡
    z-index: 999;
    background-color: #313338;
}

.placeholder {
    height: 45px; /* 固定元素高度 */
    width: 100%;
}

.friends-list {
    clear: both;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 12px 0;
    margin: 0 8px 0 8px;
    border-top: 1px solid #3f4147;

    &:first-child {
        margin-top: 40px;
    }

    &:hover {
        background-color: #393c41;
        cursor: pointer;
        border-radius: 10px;

        .friends-more {
            span {
                background-color: #1e1f22;
            }
        }

        .friends-info {
            .friends-name {
                p {
                    display: block;
                }
            }
        }
    }

    .friends-info {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 35px;
        width: 390px;
        position: relative;

        .friends-name {
            display: flex;
            justify-content: flex-start;
            font-size: 14px;
            font-weight: bold;
            color: #f2f3f5;

            p {
                display: none;
                font-weight: unset;
                color: #b5bac1;
                font-size: 12px;
            }
        }

        .friends-status {
            display: flex;
            font-size: 12px;
            color: #b5bac1;
        }

        //登录状态定位
        :deep(.friendStatus) {
            position: absolute;
            left: -24px;
            top: 22px;
        }
    }

    .friends-avatar {
        width: 460px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        .avatar {
            width: 35px;
            height: 35px;
        }
    }

    .friends-more {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100px;

        span {
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            margin: 0 5px;
            cursor: pointer;
            color: #b5bac1;
            font-size: 18px;
            background-color: #2b2d31;
        }
    }
}

.title-x4dI75 {
    padding: 25px 0 15px 0;
}

.container-q97qHp {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.02em;
    font-weight: 600;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    color: #b5bac1;
    position: absolute;
    width: 100%;
    background-color: #313338;
    text-align: left;
}

.search-box {
    background-color: #313338;

    .search-box-input {
        width: 100%;
        height: 35px;
        border-radius: 3px;
        font-size: 14px;
        color: #333;
        background-color: #1e1f22;

        .is-focus {
            box-shadow: unset;
        }

        &::placeholder {
            color: #999;
            font-size: 20px;
        }
    }

    .fa-magnifying-glass {
        position: absolute;
        top: 32%;
        right: 10px;
        transform: translateY(-50%);
        font-size: 18px;
        color: #b5bac1;
        cursor: pointer;
    }
}

:deep(.el-input__wrapper) {
    background-color: #1e1f22;
    box-shadow: unset;
}

:deep(.is-focus) {
    box-shadow: unset;
}

.deleteFriends {
    .span-hover1:hover {
        color: #f23f42;
    }
}

.addFriends {
    .span-hover2:hover {
        color: #23a559;
    }
}
</style>

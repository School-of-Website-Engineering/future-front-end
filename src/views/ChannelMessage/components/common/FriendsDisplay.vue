<!--如果数组为空则显示空白组件，如果不为空则显示好友列表-->
<template>
    <div class="search-box-header-top">
        <div class="search-box">
            <el-input
                class="search-box-input"
                v-model="search"
                placeholder="搜索"
                @keyup.enter.native="searchFriend"
            ></el-input>
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <h2 class="title-x4dI75 container-q97qHp">好友总数 — {{ list.length }}</h2>
    </div>
    <div class="placeholder"></div>
    <div class="friends-list" v-for="(item, index) in list" :key="index">
        <div class="friends-avatar">
            <el-avatar class="avatar" :src="item.avatar"></el-avatar>
            <div class="friends-info">
                <div class="friends-name">
                    {{ item.name }}
                    <p>#{{ item.id }}</p>
                </div>
                <div :class="[statusMap[item.status], 'friends-status']">
                    {{ statusMap[item.status] }}
                </div>
                <FriendStatus :status="item.status" />
            </div>
        </div>
        <!-- 图标 -->
        <div class="friends-more" v-if="iconLeft || iconRight">
            <el-tooltip :enterable="false" class="box-item" effect="dark" content="消息" placement="top">
                <span v-if="iconLeft">
                    <i :class="iconLeft"></i>
                </span>
            </el-tooltip>
            <el-tooltip :enterable="false" class="box-item" effect="dark" content="更多" placement="top">
                <span v-if="iconRight">
                    <i :class="iconRight"></i>
                </span>
            </el-tooltip>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineComponent, defineProps, ref } from 'vue';

defineComponent({
    name: 'FriendsDisplay',
});
defineProps({
    status: {
        type: String,
        default: 'online',
    },
    list: {
        type: Array as () => Array<any>,
        default: () => [],
    },
    iconLeft: {
        type: String,
        default: '',
    },
    iconRight: {
        type: String,
        default: '',
    },
});

interface StatusMap {
    [key: string]: string;
}

// statusMap
const statusMap: StatusMap = {
    online: '在线',
    offline: '离线',
    busy: '忙碌',
    away: '离开',
};
const searchFriend = () => {
    console.log(search);
};
const search = ref('');
</script>

<style lang="scss" scoped>
.search-box-header-top {
    padding-top: 15px;
    height: 50px;
    width: 100%;
    //固定至顶部
    position: sticky;
    top: 0px;
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
    margin: 0px 8px 0px 8px;
    border-top: 1px solid #3f4147;

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
        justify-content: space-evenly;
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
        top: 50%;
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
</style>

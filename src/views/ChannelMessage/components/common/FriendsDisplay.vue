<template>
    <div class="search-box">
        <el-input
            class="search-box-input"
            v-model="search"
            placeholder="搜索"
            @keyup.enter.native="searchFriend"
        ></el-input>
        <i class="fa-solid fa-magnifying-glass"></i>
    </div>
    <div>
        <h2 class="title-x4dI75 container-q97qHp">{{ text }}</h2>
    </div>
    <div class="friends-list">
        <div class="friends-avatar">
            <el-avatar
                class="avatar"
                src="https://cdn.discordapp.com/avatars/307917208460460033/a_8e5acc68e72c83cba21286a27c4bbfa0.webp?size=128"
            ></el-avatar>
            <div class="friends-info">
                <div class="friends-name">
                    小明
                    <p>#121</p>
                </div>
                <div class="friends-status">在线</div>
                <FriendStatus :status-text="'Friend'" :status="'online'" />
            </div>
        </div>
        <div class="friends-more">
            <el-tooltip :enterable="false" class="box-item" effect="dark" content="消息" placement="top">
                <span>
                    <i class="fa-solid fa-comments"></i>
                </span>
            </el-tooltip>
            <el-tooltip :enterable="false" class="box-item" effect="dark" content="更多" placement="top">
                <span>
                    <i class="fa-solid fa-bars"></i>
                </span>
            </el-tooltip>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineComponent, defineProps } from 'vue';
defineComponent({
    name: 'FriendsDisplay'
});
defineProps({
    text: {
        type   : String,
        default: '好友'
    },
    status: {
        type   : String,
        default: 'online'
    }
});
const searchFriend = () => {
    console.log(search);
};
const search = ref('');
</script>

<style lang="scss" scoped>
.friends-list {
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
        width: 55px;
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
        width: 125px;
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
    margin: 0px 16px 20px 16px;
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
}

.search-box {
    position: relative;
    width: 100%;
    height: 35px;
    margin: 0px 16px 20px 16px;

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
        right: 11px;
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

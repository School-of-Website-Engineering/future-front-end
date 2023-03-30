<template>
    <el-container>
        <el-header class="main-box-right-header2">
            <el-row>
                <el-col :span="19" class="header-left">
                    <div class="header-left-left">
                        <span>
                            <i class="fa-solid fa-user"></i>
                            好友
                        </span>
                        <div class="divider-q3P9HC"></div>
                        <span :class="{ 'is-active': activeIndex === 1 }" @click="activeIndex = 1"> 在线 </span>
                        <span :class="{ 'is-active': activeIndex === 2 }" @click="activeIndex = 2"> 全部 </span>
                        <span :class="{ 'is-active': activeIndex === 3 }" @click="activeIndex = 3"> 待定 </span>
                        <span :class="{ 'is-active': activeIndex === 4 }" @click="activeIndex = 4"> 已屏蔽 </span>
                        <span :class="{ 'is-active-add': activeIndex === 5 }" @click="activeIndex = 5"> 添加好友 </span>
                    </div>
                </el-col>
                <el-col :span="5" class="header-right">
                    <div class="header-right-right">
                        <el-tooltip class="box-item" effect="dark" content="Top Center prompts info" placement="bottom">
                            <span>
                                <i class="fa-solid fa-message"></i>
                            </span>
                        </el-tooltip>
                        <div class="divider-q3P9HC"></div>
                        <el-tooltip class="box-item" effect="dark" content="Top Center prompts info" placement="bottom">
                            <span>
                                <i class="fa-solid fa-inbox"></i>
                            </span>
                        </el-tooltip>
                        <el-tooltip class="box-item" effect="dark" content="Top Center prompts info" placement="bottom">
                            <span>
                                <i class="fa-solid fa-circle-question"></i>
                            </span>
                        </el-tooltip>
                    </div>
                </el-col>
            </el-row>
        </el-header>
        <el-row class="main-box-right-main2">
            <el-col :span="17">
                <el-container>
                    <el-main class="main-box-right-main2-main1">
                        <template v-for="(component, index) in components">
                            <el-row v-if="activeIndex === index + 1" :key="index">
                                <component :is="component" />
                            </el-row>
                        </template>
                    </el-main>
                </el-container>
            </el-col>
            <el-col :span="7">
                <el-container>
                    <el-main class="main-box-right-main2-main2">Main</el-main>
                </el-container>
            </el-col>
        </el-row>
    </el-container>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useUserFriendsStore } from '@/store/modules/friends';
import AddFriend from '@/views/ChannelMessage/components/AddFriend.vue';
import All from '@/views/ChannelMessage/components/All.vue';
import Online from '@/views/ChannelMessage/components/Online.vue';
import Blocked from '@/views/ChannelMessage/components/Blocked.vue';
import ToBeDetermined from '@/views/ChannelMessage/components/ToBeDetermined.vue';

// 切换的索引
const activeIndex = ref(1);
const userFriends = useUserFriendsStore();
// 组件
const components = markRaw([Online, All, ToBeDetermined, Blocked, AddFriend]);

// statusMap[newVal]接口
interface IStatusMap {
    [key: number]: string;
}

userFriends.getFriends();

watch(
    activeIndex,
    (newVal) => {
        //     如果是在线，请求在线好友数据
        const statusMap: IStatusMap = {
            1: '在线',
            2: '全部',
            3: '待定',
            4: '已屏蔽',
            5: '添加好友',
        };
        userFriends.getFriends();
        console.log('-------------好友切换--------------');
        console.log(statusMap[newVal]);
    },
    { immediate: true },
);
</script>

<style lang="scss" scoped>
.header-left {
    .header-left-left {
        display: flex;
        height: 50px;
        align-items: center;
        justify-content: space-evenly;
        width: 440px;

        span {
            &:first-child {
                font-size: 16px;
                font-weight: bold;
                color: #f2f3f5;

                .fa-user {
                    color: #80848e;
                }

                svg {
                    margin-right: 4px;
                }
            }

            &:not(:first-child) {
                padding: 1.8px 8px;
                font-size: 16px;
                color: #b5bac1;

                &:hover:not(:first-child :last-child) {
                    background-color: #393c41;
                    border-radius: 3px;
                    cursor: pointer;
                    color: #d6d6dc;
                }

                &:hover:last-child {
                    cursor: pointer;
                }
            }

            &:last-child {
                background-color: #248046;
                border-radius: 3px;
                color: #fffff3;
            }
        }
    }
}

.header-right {
    .header-right-right {
        display: flex;
        height: 50px;
        align-items: center;
        justify-content: flex-end;
        width: 100%;

        span {
            margin: 0 10px;
            font-size: 17.5px;
            color: #b5bac1;

            &:hover {
                background-color: #393c41;
                border-radius: 3px;
                cursor: pointer;
                color: #d6d6dc;
            }
        }
    }
}

.el-container {
    height: 100%;
}

.main-box {
    height: 100vh;

    .channel-sidebar {
        background-color: #1e1f22;
    }

    .main-box-right {
        flex: 1;
    }

    .main-box-right-main1,
    .main-box-right-main2 {
        position: relative;
        height: 100%;
        padding: unset;
        background-color: #313338;

        &.main-box-right-main1 {
            background-color: #2b2d31;
            //将盒子的内容放在底部
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
        }
    }

    .main-box-right-header1,
    .main-box-right-header2 {
        height: 50px;

        &.main-box-right-header1 {
            background-color: #2b2d31;
            border-bottom: solid 1.5px #1f2123;
        }

        &.main-box-right-header2 {
            background-color: #313338;
            border-bottom: solid 1.5px #2c2e33;
        }
    }

    .main-box-right-main2-main1 {
        padding-top: unset;
        //    固定定位
        position: absolute;
        width: 820px;
        height: 100%;
        //    使其不会被遮挡
        z-index: 1;
        //超出视口滚动条
        overflow-y: auto;
        //    美化滚动条
        &::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #3f4147;
            border-radius: 4px;
        }

        &::-webkit-scrollbar-track {
            background-color: #313338;
            border-radius: 4px;
        }
    }

    .main-box-right-main2-main1,
    .main-box-right-main2-main2 {
        &.main-box-right-main2-main1 {
            background-color: #313338;
            border-right: 1.5px solid #3f4147;
        }

        &.main-box-right-main2-main2 {
            background-color: #313338;
        }
    }
}

.el-header,
.el-footer {
    background-color: #b3c0d1;
    color: #616161;
    text-align: center;
}

.el-aside {
    background-color: #d3dce6;
    color: #616161;
    text-align: center;
}

.el-main {
    background-color: #e9eef3;
    color: #616161;
    text-align: center;
}

body > .el-container {
    margin-bottom: 40px;
}

.is-active {
    background-color: #43444b;
    border-radius: 3px;
    color: #f2f3f5 !important;
}

.is-active-add {
    background-color: unset !important;
    border-radius: 3px;
    color: #2dc770 !important;
}

.divider-q3P9HC {
    width: 1px;
    height: 24px;
    margin: 0 8px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    background: #3f4147;
}
</style>

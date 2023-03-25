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
                        <el-row v-show="activeIndex === 1">
                            <Online />
                        </el-row>
                        <el-row v-show="activeIndex === 2">
                            <All />
                        </el-row>
                        <el-row v-show="activeIndex === 3">
                            <ToBeDetermined />
                        </el-row>
                        <el-row v-show="activeIndex === 4">
                            <Blocked />
                        </el-row>
                        <el-row v-show="activeIndex === 5">
                            <AddFriend />
                        </el-row>
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
import AddFriend from '@/views/ChannelMessage/components/AddFriend.vue';
import All from '@/views/ChannelMessage/components/All.vue';
import Online from '@/views/ChannelMessage/components/Online.vue';
import Blocked from '@/views/ChannelMessage/components/Blocked.vue';
import ToBeDetermined from '@/views/ChannelMessage/components/ToBeDetermined.vue';

// 切换的索引
const activeIndex = ref(1);
// watch一上来就执行
watch(
    activeIndex,
    (newVal) => {
        //     如果是在线，请求在线好友数据
        if (newVal === 1) {
            console.log('在线');
        } else if (newVal === 2) {
            console.log('全部');
        } else if (newVal === 3) {
            console.log('待定');
        } else if (newVal === 4) {
            console.log('已屏蔽');
        } else if (newVal === 5) {
            console.log('添加好友');
        }
    },
    { immediate: true }
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
        height: 100%;
        padding: unset;

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

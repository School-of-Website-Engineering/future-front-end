<template>
    <el-container>
        <el-header class="main-box-right-header1">
            <!-- Message Box 消息弹出框 -->
            <el-button class="search-btn" text @click="dialogTableVisible = true">寻找或开始新的对话 </el-button>
            <!-- 弹出框 -->
            <el-dialog v-model="dialogTableVisible" title="Shipping address">
                <el-table :data="gridData">
                    <el-table-column property="date" label="Date" width="150" />
                    <el-table-column property="name" label="Name" width="200" />
                    <el-table-column property="address" label="Address" />
                </el-table>
            </el-dialog>
        </el-header>
        <el-main class="main-box-right-main1">
            <el-container class="main-box-right-main1-flex">
                <el-header class="Friends-private-message">
                    <el-container class="friends-top">
                        <el-row
                            :class="['friends-top-flex', $route.path === '/@me' ? 'is-active' : '']"
                            @click="
                                () => {
                                    $router.push('@me');
                                }
                            "
                        >
                            <el-col :span="12">
                                <el-icon>
                                    <Location />
                                </el-icon>
                                <span>好友</span>
                            </el-col>
                        </el-row>
                        <el-row
                            :class="['friends-top-flex', $route.path === '/store' ? 'is-active' : '']"
                            @click="
                                () => {
                                    $router.push('/store');
                                }
                            "
                        >
                            <el-col :span="12">
                                <el-icon>
                                    <Location />
                                </el-icon>
                                <span>好友</span>
                            </el-col>
                        </el-row>
                    </el-container>
                    <el-container class="friends-top">
                        <el-row class="friends-top-title">
                            <span>私信</span>
                            <el-tooltip class="box-item" effect="dark" content="创建私信" placement="top">
                                <span>+</span>
                            </el-tooltip>
                        </el-row>
                        <el-row class="friends-top-flex">
                            <div class="private-message-user-box">
                                <div class="private-message-user-box-flex">
                                    <div class="private-message-user-box-flex-left">
                                        <img
                                            width="30px"
                                            src="	https://cdn.discordapp.com/avatars/1042734257149329418/5ab3131122ac145db5f2edf29e5a7730.webp?size=48"
                                            alt=""
                                        />
                                    </div>
                                    <div class="private-message-user-box-flex-right">
                                        <div class="private-message-user-box-flex-right-top">
                                            <span>zhengguorong</span>
                                            <span>2021-07-23 15:36:31</span>
                                        </div>
                                        <div class="private-message-user-box-flex-right-bottom">
                                            <span>你好</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </el-row>
                        <el-row class="friends-top-flex"> </el-row>
                    </el-container>
                </el-header>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-main>
    </el-container>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { Location } from '@element-plus/icons-vue';

const dialogTableVisible = ref(false);

const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
});

const gridData = [
    {
        date: '2016-05-02',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District',
    },
    {
        date: '2016-05-04',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District',
    },
    {
        date: '2016-05-01',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District',
    },
    {
        date: '2016-05-03',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District',
    },
];
</script>

<style lang="scss" scoped>
.main-box-right-main1 {
    .main-box-right-main1-flex {
        display: flex;
        justify-content: space-between;

        .Friends-private-message {
            height: 300px;
            margin-top: 10px;
            background-color: unset;
            padding: 0 8px !important;

            .friends-top {
                width: 100%;
                height: 80px;
                display: flex;
                flex-direction: column;
                //第二个元素高度
                &:nth-child(2) {
                    height: 110px;

                    .friends-top-title {
                        height: 30px;
                        line-height: 30px;
                        font-size: 16px;
                        color: #949ba4;
                        padding: 3.5px 10px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        &:hover {
                            span {
                                &:nth-child(1) {
                                    color: #dbdee1;
                                }
                            }
                        }

                        span {
                            &:nth-child(1) {
                                flex: 1;
                                display: flex;
                                justify-content: flex-start;
                                font-style: inherit;
                                font-family: inherit;
                                vertical-align: baseline;
                                font-size: 13.5px;
                                font-weight: bold;
                            }

                            &:nth-child(2) {
                                height: 10px;
                                font-size: 23px;
                                cursor: pointer;
                                line-height: 10px;
                                text-align: center;
                            }
                        }
                    }
                }

                .friends-top-flex {
                    .private-message-user-box {
                    }

                    width: 100%;
                    height: 80px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    //鼠标悬停时的样式背景：35373C，控制.el-col下的.el-icon 和span颜色为：DBDEE1
                    &:hover {
                        background-color: #35373c;
                        border-radius: 5px;
                        cursor: pointer;

                        .el-col {
                            .el-icon {
                                color: #dbdee1;
                            }

                            span {
                                color: #dbdee1;
                            }
                        }
                    }

                    .el-col {
                        width: 80px;
                        display: flex;
                        justify-content: space-around;
                        align-items: center;

                        .el-icon {
                            font-size: 20px;
                            font-style: inherit;
                            font-family: inherit;
                            vertical-align: baseline;
                            color: #949ba4;
                        }

                        span {
                            color: #949ba4;
                            font-size: 16px;
                            font-style: inherit;
                            font-family: inherit;
                            vertical-align: baseline;
                        }
                    }
                }
            }
        }
    }
}

.main-box-right-header1 {
    // 居中
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 8px !important;

    .search-btn {
        width: 100%;
        height: 28px;
        overflow: hidden;
        border-radius: 4px;
        -webkit-box-shadow: none;
        box-shadow: none;
        background-color: #1e1f22;
        color: #949b98;
        text-align: left;
        text-overflow: ellipsis;
        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
        white-space: nowrap;
        // hover时的样式背景色和颜色相反
        &:hover {
            background-color: #949b98;
            color: #1e1f22;
        }
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

    &.main-box-right-main2 {
    }
}

.el-header,
.el-footer {
    background-color: #b3c0d1;
    color: #616161;
    text-align: center;
}

.is-active {
    background-color: #35373c;
    border-radius: 5px;
    cursor: pointer;

    .el-col {
        .el-icon {
            color: #dbdee1;
        }

        span {
            color: #dbdee1;
        }
    }
}
</style>

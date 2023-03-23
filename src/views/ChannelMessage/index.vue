<template>
    <el-container>
        <!-- 搜索框 -->
        <el-header class="main-box-right-header1">
            <!-- ChannelMessage Box 消息弹出框 -->
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
                    <!-- 好友、store -->
                    <el-container class="friends-top friends-top-head">
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
                                    <UserFilled />
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
                                    <MessageBox />
                                </el-icon>
                                <span>Box</span>
                            </el-col>
                        </el-row>
                    </el-container>
                    <!-- 私信 -->
                    <el-container class="friends-top">
                        <el-row class="friends-top-title">
                            <span>私信</span>
                            <el-tooltip class="box-item" effect="dark" content="创建私信" placement="top">
                                <span>+</span>
                            </el-tooltip>
                        </el-row>
                        <!-- 私信列表 -->
                        <el-row class="friends-top-flex" v-for="item in privateMessageList" :key="item.id">
                            <div class="private-message-user-box">
                                <div class="private-message-user-box-flex">
                                    <div class="private-message-user-box-flex-left">
                                        <img :src="item.avatar" />
                                        <FriendStatus :status="item.status" :statusText="item.statusText" />
                                    </div>
                                    <div class="private-message-user-box-flex-right">
                                        <div class="private-message-user-box-flex-right-top">
                                            <span>{{ item.name }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </el-row>
                    </el-container>
                </el-header>
                <!-- 底部个人资料 -->
                <el-footer>
                    <el-row class="bottom-profile">
                        <el-col :span="12" class="bottom-profile-avatar">
                            <el-avatar
                                src="https://cdn.discordapp.com/avatars/1042734257149329418/5ab3131122ac145db5f2edf29e5a7730.webp?size=48"
                                class="bottom-profile-avatar-img"
                            />
                            <span>
                                <p>Mason Skywork</p>
                                <p>#1237</p>
                            </span>
                        </el-col>
                        <el-col :span="12" class="bottom-profile-avatar">
                            <el-tooltip class="box-item" effect="dark" content="取消静音" placement="top">
                                <i class="fa-solid fa-microphone-slash"></i>
                            </el-tooltip>
                            <el-tooltip class="box-item" effect="dark" content="耳机静音" placement="top">
                                <i class="fa-solid fa-headphones"></i>
                            </el-tooltip>
                            <el-tooltip class="box-item" effect="dark" content="设置" placement="top">
                                <i class="fa-solid fa-gear"></i>
                            </el-tooltip>
                        </el-col>
                    </el-row>
                </el-footer>
            </el-container>
        </el-main>
    </el-container>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue';
import AsideLPrivateService, { IAsideLPrivateResponse } from '@/api/aside';

// 控制dialog显示
const dialogTableVisible = ref(false);
// 表格数据
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
// 私信列表
const privateMessageList = reactive<IAsideLPrivateResponse[]>([]);

onMounted(() => {
    getPrivateMessageList();
});

/**
 * 获取私信列表
 * @param {string} id
 * @returns {Promise<void>}
 * @constructor
 * @description 获取私信列表
 */
const getPrivateMessageList = async () => {
    const { data } = await AsideLPrivateService.getAsidePrivateUserList();
    privateMessageList.push(...data.sidebarList);
    console.log('---------getAsidePrivateUserList---------');
    console.log(privateMessageList);
};
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

            .friends-top-head {
                .friends-top-flex {
                    height: 80px;
                }
            }

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
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    margin-bottom: 3px;
                    //鼠标悬停时的样式背景：35373C，控制.el-col下的.el-icon 和span颜色为：DBDEE1
                    &:hover {
                        background-color: #35373c;
                        border-radius: 5px;
                        cursor: pointer;
                        color: #dbdee1;

                        //控制私信用户名称颜色为：DBDEE1
                        .private-message-user-box {
                            .private-message-user-box-flex-right {
                                .private-message-user-box-flex-right-top {
                                    span {
                                        color: #dbdee1 !important;
                                    }
                                }
                            }
                        }

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
                        width: 90px;
                        display: flex;
                        justify-content: space-evenly;
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

                    .private-message-user-box {
                        .private-message-user-box-flex {
                            margin: 5px 0px;
                            height: 40px;
                            display: flex;
                            align-items: center;
                            justify-content: flex-start;
                            padding: 0 8px;

                            // 头像
                            .private-message-user-box-flex-left {
                                width: 35px;
                                height: 35px;

                                img {
                                    width: 35px;
                                    height: 35px;
                                    border-radius: 50%;
                                    position: relative;
                                }

                                //登录状态定位
                                :deep(.friendStatus) {
                                    position: absolute;
                                    left: 31.5px;
                                    top: 32px;
                                }
                            }

                            // 右侧用户信息
                            .private-message-user-box-flex-right {
                                .private-message-user-box-flex-right-top {
                                    display: flex;
                                    flex-direction: column;

                                    span {
                                        color: #949ba4;
                                        &:first-child {
                                            font-size: 15.5px;
                                            font-weight: inherit;
                                            font-style: inherit;
                                            font-family: inherit;
                                            vertical-align: baseline;
                                            margin-left: 10px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        //    底部个人资料
        .el-footer {
            background-color: #232428;
            height: 55px;
            padding: 0 6px;

            .bottom-profile {
                height: 100%;
                display: flex;
                align-items: center;

                .bottom-profile-avatar {
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    &:first-child {
                        justify-content: space-evenly;

                        .bottom-profile-avatar-img {
                            width: 40px;
                            height: 40px;
                        }

                        // 鼠标移入后背景颜色变为：3D3E45
                        &:hover {
                            background-color: #3d3e45;
                            border-radius: 5px;
                            cursor: pointer;
                        }

                        span {
                            width: 45px;

                            p {
                                &:first-child {
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    display: -webkit-box;
                                    -webkit-line-clamp: 1;
                                    -webkit-box-orient: vertical;
                                    color: #f2f3f5;
                                    font-weight: bold;
                                }
                            }
                        }
                    }

                    &:last-child {
                        display: flex;
                        justify-content: space-evenly;
                        align-items: center;
                        font-size: 18px;
                        color: #b5bac1;
                        height: 30px;
                        width: 30px;
                        //鼠标悬停时的样式背景：35373C，控制.el-col下的.el-icon 和span颜色为：DBDEE1
                        &:hover {
                            background-color: #35373c;
                            border-radius: 5px;
                            cursor: pointer;
                            color: #dbdee1;
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

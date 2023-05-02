<template>
    <el-container>
        <!-- 搜索框 -->
        <el-header class="main-box-right-header1">
            <!-- ChannelMessage Box 消息弹出框 -->
            <el-button class="search-btn" text @click="dialogTableVisible = true">寻找或开始新的对话</el-button>
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
                    <!-- 好友、Store -->
                    <el-container class="friends-top friends-top-head">
                        <el-row
                            :class="['friends-top-flex', $route.path === '/main/@me' ? 'is-active' : '']"
                            @click="
                                () => {
                                    $router.push('/main/@me');
                                }
                            "
                        >
                            <el-col :span="12">
                                <el-icon>
                                    <UserFilled />
                                </el-icon>
                                <span>好友</span>
                                <i class="msgNum" v-if="userFriends.handlePendingFriendsRequestList.length">{{
                                    userFriends.handlePendingFriendsRequestList.length
                                }}</i>
                            </el-col>
                        </el-row>
                        <el-row
                            :class="['friends-top-flex', $route.path === '/main/Store' ? 'is-active' : '']"
                            @click="
                                () => {
                                    $router.push('/main/Store');
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
                            <el-tooltip
                                :hide-after="50"
                                class="box-item"
                                effect="dark"
                                content="创建私信"
                                placement="top"
                            >
                                <span>+</span>
                            </el-tooltip>
                        </el-row>
                        <!-- 私信列表 -->
                        <el-row
                            class="friends-top-flex friends-list"
                            v-for="item in privateMessageList"
                            @click="toChat(item)"
                            :key="item.id"
                        >
                            <div class="private-message-user-box" :class="isActive(item.id)">
                                <div class="private-message-user-box-flex">
                                    <div class="private-message-user-box-flex-left">
                                        <el-avatar :src="item.avatar" />
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
                        <UserInfo />
                    </el-row>
                </el-footer>
            </el-container>
        </el-main>
    </el-container>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import AsideLPrivateService, { IAsideLPrivateResponse } from '@/api/aside';
import { MessageBox, UserFilled } from '@element-plus/icons-vue';
import { useUserFriendsStore } from '@/store';
import { asyncTryCatch } from '@/utils/exceptionHandling';
import router from '@/router';
import UserInfo from '@/components/common/UserInfo.vue';

const userFriends = useUserFriendsStore();

// 控制dialog显示
const dialogTableVisible = ref(false);
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
const getPrivateMessageList = asyncTryCatch(async() => {
    const { data } = await AsideLPrivateService.getAsidePrivateUserList();
    privateMessageList.push(...data.sidebarList);
    console.log('----------获取私信列表---------');
    console.log(privateMessageList);
});

/**
 * 跳转到聊天页面
 * @param {IAsideLPrivateResponse} item
 * @returns {Promise<void>}
 * */
const toChat = asyncTryCatch(async(item: IAsideLPrivateResponse) => {
    console.log('----------跳转到聊天页面---------');
    console.log(item);
    await router.push(`/main/@me/${item.id}`);
});
/**
 * 判断是否是当前聊天对象
 * @param {string} id 当前聊天对象id
 * return {string} 返回class
 * */
const isActive = (id: string | number) => {
    return id === router.currentRoute.value.params.id ? 'friendListActive' : '';
};
</script>

<style lang="scss" scoped>
.main-box-right-main1 {
    .main-box-right-main1-flex {
        display: flex;
        justify-content: space-between;

        .Friends-private-message {
            height: 90%;
            background-color: unset;
            padding: 0 8px !important;

            .friends-top-head {
                //固定头部
                position: sticky;
                padding-top: 10px;
                top: 0;
                background-color: #2b2d31;
                z-index: 99;

                .friends-top-flex {
                    height: 80px;
                }

                .is-active {
                    background-color: #404249;
                    border-radius: 5px;
                    cursor: pointer;

                    .el-col {
                        .el-icon {
                            color: #f2f3f5 !important;
                        }

                        span {
                            color: #f2f3f5 !important;
                        }
                    }
                }
            }

            .friends-top {
                padding: unset;
                width: 100%;
                height: 80px;
                display: flex;
                flex-direction: column;
                //超出视口滚动条
                overflow-y: auto;
                //    美化滚动条
                &::-webkit-scrollbar {
                    width: 2px;
                    height: 2px;
                }

                &::-webkit-scrollbar-thumb {
                    background-color: #3f4147;
                    border-radius: 4px;
                }

                &::-webkit-scrollbar-track {
                    background-color: #313338;
                    border-radius: 4px;
                }

                //第二个元素高度
                &:nth-child(2) {
                    height: 100vh;

                    .friends-top-title {
                        height: 30px;
                        line-height: 30px;
                        font-size: 16px;
                        color: #949ba4;
                        padding: 3.5px 10px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        //固定位置不动
                        position: sticky;
                        top: 0;
                        background-color: #2b2d31;
                        z-index: 99;

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

                .friends-list {
                    &:last-child {
                        margin-bottom: 200px;
                    }
                }

                .friends-top-flex {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    margin: 3px 0;

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
                                        width: 100px;
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
                            margin: 5px 0;
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
                                    left: 34.8px;
                                    top: 35.5px;
                                }
                            }

                            // 右侧用户信息
                            .private-message-user-box-flex-right {
                                .private-message-user-box-flex-right-top {
                                    display: flex;
                                    flex-direction: column;

                                    span {
                                        color: #949ba4;
                                        width: 150px;
                                        text-align: left;
                                        margin-left: 18px;
                                        //超出部分显示省略号
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                        white-space: nowrap;

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
        .el-container {
            /* 添加 padding-bottom */
            padding-bottom: 55px;
        }

        .el-footer {
            /* 修改为 position: fixed */
            position: fixed;
            bottom: 0;
            width: 15.8%;
            background-color: #232428;
            height: 55px;
            padding: 0 6px;
            z-index: 99;

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
    //固定位置
    position: static;
    top: 0;

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
        //    超出隐藏
        //overflow-y: hidden;
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

.msgNum {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 16px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    border-radius: 50%;
    background-color: #f23f42;
    color: #fff;
    font-size: 12px;
}

//好友列表选中样式private-message-user-box
.friendListActive {
    span {
        color: #fff !important;
    }

    .private-message-user-box-flex-right {
        .private-message-user-box-flex-right-top {
            span {
                color: #fff !important;
            }
        }
    }

    background-color: #404249;
    border-radius: 5px;
}
</style>

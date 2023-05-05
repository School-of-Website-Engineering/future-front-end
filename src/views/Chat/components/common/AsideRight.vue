<template>
    <div class="main-message" style="padding-right: 0">
        <div class="panelBanner bannerPremium" style="background-color: #1f2123">
            <div class="head-box" style="display: flex">
                <el-image class="headstyle" :src="friendsStore.friendInfo.avatar" />
                <el-tooltip effect="dark" :content="friendStatus" placement="top" style="margin-left: 10px">
                    <FriendsStatus :status="friendsStore.friendInfo.status" class="status-"></FriendsStatus>
                </el-tooltip>
                <img class="background-img" :src="friendsStore.friendInfo.background" alt="" />
            </div>
        </div>
        <div class="badgeList">
            <a v-for="(item, index) in friendsStore.friendInfo.tags" :key="index">
                <el-tooltip effect="dark" :content="friendsStore.friendInfo.tags[index].tag" placement="top">
                    <img alt="Null" class="imgStyle" :src="friendsStore.friendInfo.tags[index].link" />
                </el-tooltip>
            </a>
        </div>
        <div class="right-card">
            <div class="userTagNoNickname">
                <span>{{ friendsStore.friendInfo.username }}</span>
                <span>#{{ friendsStore.friendInfo.discriminator }}</span>
            </div>
            <div class="line"></div>
            <h2 class="userDes">自我介绍</h2>
            <div style="-webkit-line-clamp: 6">
                <span class="userText">{{ friendsStore.friendInfo.introduction }} </span>
            </div>
            <div class="line"></div>
            <h2 class="userDes">Future用户注册时间</h2>
            <div style="-webkit-line-clamp: 6">
                <span class="userText">{{ friendsStore.friendInfo.registerTime }}</span>
            </div>
            <div class="line"></div>
            <h2 class="userDes">备注</h2>
            <div class="note">
                <textarea
                    placeholder="点击添加备注"
                    aria-label="备注"
                    maxlength="256"
                    class="textarea"
                    style="height: 24px"
                    :value="remark"
                ></textarea>
            </div>
        </div>
        <div class="right-card">
            <!--            共同服务器列表-->
            <div class="userTagNoNickname">
                <div v-if="commonServiceCount.commonServer.length">
                    <span class="commentServer-num">{{ commonServiceCount.commonServer.length }}个共同的服务器</span>
                    <i class="fa-solid fa-chevron-right"></i>
                    <!--                <i class="fa-solid fa-chevron-down"></i>-->
                    <div class="commentServer">
                        <div class="commentServerItem">
                            <div
                                class="commentServerItemImg"
                                v-for="item in commonServiceCount.commonServer"
                                :key="item.id"
                            >
                                <img :src="item.icon" alt="Null" />
                                <span>{{ item.name }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <span v-else>暂无共同服务器</span>
            </div>
            <div class="line"></div>
            <div class="userTagNoNickname">
                <!--                共同好友-->
                <div class="commentFriend" v-if="commonServiceCount.commonFriend.length">
                    <span class="commentServer-num">{{ commonServiceCount.commonFriend.length }}个共同的好友</span>
                    <i class="fa-solid fa-chevron-right"></i>
                    <div class="commentFriendItem">
                        <div
                            class="commentFriendItemImg"
                            v-for="item in commonServiceCount.commonFriend"
                            :key="item.id"
                        >
                            <img :src="item.avatar" alt="Null" />
                            <span>{{ item.name }}</span>
                            <span>#{{ item.tagId }}</span>
                        </div>
                    </div>
                </div>
                <span v-else>暂无共同好友</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useUserFriendsStore } from '@/store/modules/friends';
import router from '@/router';
import { computed, reactive, watch } from 'vue';
import FriendsStatus from '@/components/common/FriendStatus.vue';
import UserService, { ICommonServerCountResponse } from '@/api/user';
import { asyncTryCatch } from '@/utils/exceptionHandling';

const commonServiceCount = reactive<ICommonServerCountResponse>({
    commonServer: [],
    commonFriend: [],
});
/**
 * 获取共同的服务器
 * @param id 用户id
 * @returns 共同的服务器
 */
const commonService = asyncTryCatch(async (id) => {
    const { data } = (await UserService.getCommonServerCount(id)) as unknown as any;
    commonServiceCount.commonServer = data.commonServer;
    commonServiceCount.commonFriend = data.commonFriend;
    console.log('--------------commonServiceCount--------------');
    console.log(commonServiceCount);
});

const friendsStore = useUserFriendsStore();
/**
 * 好友备注
 * @type {ComputedRef<string>}
 */
const remark = computed(() => friendsStore.friendInfo.remark);

const friendStatus = computed(() => {
    /**
     * 在线 online
     * 离线 offline
     * 闲置 idle
     * 忙碌 dnd
     */
    const statusMap: { [key: string]: string } = {
        online: '在线',
        offline: '离线',
        idle: '闲置',
        dnd: '忙碌',
    };
    return statusMap[friendsStore.friendInfo.status];
});

/**
 * 监听路由变化
 * @param id 路由参数
 * @returns {void} 无返回值
 */
watch(
    () => router.currentRoute.value.params.id,
    (id) => {
        friendsStore.getFriendInfo(id as string);
        commonService(id as string);
    },
    { immediate: true },
);
</script>

<style lang="scss" scoped>
.background-img {
    //    填满上一级
    width: 100%;
    height: 120px;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
}

.main-box-right-main2-main2 {
    &.main-box-right-main2-main2 {
        background-color: #313338;
    }
}

.defaultColor {
    color: var(--text-normal);
}

.iconWrapper {
    color: var(--text-normal);
    justify-content: right;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    height: 100%;
}

.el-image {
    margin-top: 75px;
    margin-left: 23px;
    display: inline-block;
    border-radius: 50%;
    border-style: solid;
    border-width: 3px;
    border-color: #1f1f1f;
}

.headstyle {
    width: 25%;
    height: 60%;
    z-index: 1;
    position: relative;
}

.iconWrapper {
    color: var(--text-normal);
    justify-content: right;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    height: 100%;
}

//最大的外面盒子的样式表
.main-message {
    height: 100vh;
    position: relative;
    box-sizing: border-box;
    min-height: 0;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    //可以滚动
    overflow-y: auto;
    //从上到下渐变
    background: linear-gradient(180deg, #000 0%, #3e0a3e 100%);
    //滚动条样式
    &::-webkit-scrollbar {
        width: 8px;
        height: 5px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #1a1b1e;
    }

    &::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: #2b2d31;
    }
}

//上面Banner的样式表
.panelBanner {
    height: 120px;
}

//在线状态显示组件样式
.status- {
    margin-top: 150px;
    z-index: 1;
    border-radius: 50%;
    margin-left: -26px;
}

//一致的 也影响Banner
.bannerPremium {
    -webkit-transition: background-color 0.1s;
    transition: background-color 0.1s;
    width: 100%;
}

//右边的卡片样式表
.right-card {
    border-radius: 8px;
    width: 80%;
    margin-left: 24px;
    margin-top: 18px;
    line-height: 24px;
    border-color: #b1b5bc;
    padding: 12px 12px 12px;
    //从右上角开始到左下角渐变
    background: linear-gradient(135deg, #19061a 0%, #000 100%);

    .note {
        margin-top: 8px;

        .textarea {
            border: none;
            color: #b5bac1;
            resize: none;
            outline: none;
            width: 100%;
            height: 100%;
            border-radius: 3px;
            //    获取焦点时的样式
            &:focus {
                border: none;
                outline: none;
                background-color: #0f0410;
            }
        }
    }
}

//非昵称名字的样式表
.userTagNoNickname {
    font-size: 20px;
    line-height: 24px;
    word-break: break-word;
    white-space: normal;
    -webkit-box-align: end;
    -ms-flex-align: end;
    color: white;
}

.fa-chevron-right,
.fa-chevron-down {
    color: #b1b5bc;
    margin-left: 5px;
    margin-right: 5px;
    font-size: 12px;
    text-align: right;
}

.right-card {
    &:last-child {
        margin-bottom: 80px;
    }

    .userTagNoNickname {
        span {
            font-size: 16px;
            color: #dbdee1;
        }

        &:last-child {
            font-size: 14px;
        }

        .commentServer-num {
            display: inline-block;
            font-size: 14px;
            color: #dbdee1;
            margin-bottom: 10px;

            &:hover {
                cursor: pointer;
            }
        }

        .commentServer,
        .commentFriend {
            .commentServerItem,
            .commentFriendItem {
                .commentServerItemImg,
                .commentFriendItemImg {
                    img {
                        width: 40px;
                        height: 40px;
                        border-radius: 26%;
                        margin-right: 8px;
                        padding: 6px;
                    }

                    display: flex;
                    justify-content: flex-start;
                    align-items: center;

                    span {
                        font-size: 16px;
                        color: #dbdee1;
                    }

                    &:hover {
                        cursor: pointer;
                        background-color: #2f3136;
                        border-radius: 6px;
                    }
                }
            }
        }

        .commentFriend {
            .commentServer-num {
                height: 40px;
                line-height: 40px;
            }

            .commentFriendItem {
                .commentFriendItemImg {
                    img {
                        width: 40px;
                        height: 40px;
                        border-radius: 26%;
                        margin-right: 8px;
                        padding: 6px;
                    }

                    display: flex;
                    justify-content: flex-start;
                    align-items: center;

                    span {
                        font-size: 16px;
                        color: #dbdee1;

                        &:last-child {
                            font-size: 12px;
                            color: #72767d;
                        }
                    }

                    &:hover {
                        cursor: pointer;
                        background-color: #2f3136;
                        border-radius: 6px;
                    }
                }
            }
        }
    }
}

//分界线样式
.line {
    margin: 10px 0;
    height: 1px;
    position: sticky;
    top: 0;
    background-color: darkgray;
}

//用户自我介绍
.userDes {
    font-size: 12px;
    line-height: 16px;
    margin-top: 8px;
    color: white;
}

//用户文本
.userText {
    font-size: 10px;
    line-height: 16px;
    margin-top: 8px;
    color: #949ba4;
    //    自动换行
    word-break: break-word;
    white-space: normal;
}

//图片样式
.imgStyle {
    width: 22px;
    height: 22px;
}

//徽章样式
.badgeList {
    background-color: black;
    border-radius: 6px;
    box-sizing: border-box;
    max-width: 203px;
    width: fit-content;
    margin-left: 220px;
    height: 31px;
    padding: 4px;
    margin-top: 10px;
}

//蒙版样式
.mask {
    position: relative;
    display: block;
    border-radius: 50%;
    height: 233px;
}

//头像样式1
.avatar-container {
    position: absolute;
    top: 10px;
    left: calc(50% - 40px);
    width: 70px;
    height: 70px;
    z-index: 1;
    display: flex;
    align-items: center;
    border-color: rgb(26, 22, 22);
    border-style: solid;
    border-width: 4px;
    border-radius: 50%;
}

//头像样式2
.avatar-image {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.textarea {
    background-color: transparent;
    border: none;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: var(--text-normal);
    font-size: 12px;
    line-height: 14px;
    max-height: 88px;
    padding: 4px;
    resize: none;
    width: 100%;
}
</style>

<template>
    <div class="main-message" style="padding-right: 0">
        <div class="panelBanner bannerPremium" style="background-color: #1f2123">
            <div class="head-box" style="display: flex">
                <el-image
                    class="headstyle"
                    src="https://cdn.discordapp.com/avatars/760729927552729119/20167f95c93ef46167737aee7201cb92.webp?size=48"
                />
                <div class="status-online"></div>
            </div>
        </div>
        <div class="badgeList">
            <a @click="openVn" class="anchorUnderlineOnHover">
                <img
                    alt="Null"
                    class="imgStyle"
                    src="https://cdn.discordapp.com/badge-icons/3aa41de486fa12454c3761e8e223442e.png"
                />
            </a>
        </div>
        <div class="right-card">
            <div class="userTagNoNickname">
                <span>ECM-Hamster</span>
                <span>#1145</span>
            </div>
            <div class="line"></div>
            <h2 class="userDes">自我介绍</h2>
            <div style="-webkit-line-clamp: 6">
                <span class="userText"
                    >我想和你在一起，无须遨游远方，只要执手相依，到处都是风景：
                    我们在一起，不必锦衣玉食，哪怕粗布淡饭，亦是阳光满天：我们在一起，远离曲折是非，领略风平浪静，平淡也是幸福。
                </span>
            </div>
            <div class="line"></div>
            <h2 class="userDes">Future用户注册时间</h2>
            <div style="-webkit-line-clamp: 6">
                <span class="userText">2021-07-01 04:00:00</span>
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
                ></textarea>
            </div>
        </div>
        <div class="right-card">
            <!--            共同好友列表-->
            <div class="userTagNoNickname">
                <span class="commentServer-num">1个共同的服务器</span>
                <div class="commentServer">
                    <div class="commentServerItem">
                        <div class="commentServerItemImg">
                            <img
                                src="https://cdn.discordapp.com/icons/251072485095636994/a_37069f32ec5e98ad8bf0e8334df18594.webp?size=60"
                                alt="Null"
                            />
                            <span>Terraria</span>
                        </div>
                        <div class="commentServerItemImg">
                            <img
                                src="https://cdn.discordapp.com/icons/251072485095636994/a_37069f32ec5e98ad8bf0e8334df18594.webp?size=60"
                                alt="Null"
                            />
                            <span>Terraria</span>
                        </div>
                        <div class="commentServerItemImg">
                            <img
                                src="https://cdn.discordapp.com/icons/251072485095636994/a_37069f32ec5e98ad8bf0e8334df18594.webp?size=60"
                                alt="Null"
                            />
                            <span>Terraria</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="line"></div>
            <div class="userTagNoNickname">
                <span>暂无共同好友</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useUserFriendsStore } from '@/store/modules/friends';
import router from '@/router';
import { ElMessage } from 'element-plus';

const friendsStore = useUserFriendsStore();
// 用户信息在friendsStore.friendInfo中，直接调用即可
// 使用watch监听路由变化，获取当前路由的id，然后调用friendsStore.getFriendInfo(id)方法获取用户信息
watch(
    () => router.currentRoute.value.params.id,
    (id) => {
        friendsStore.getFriendInfo(id as string);
    },
    { immediate: true }
);
const openVn = () => {
    ElMessage({
        message: h('p', null, [h('i', { style: 'color:green' }, 'Future-Support-会员标记')])
    });
};
</script>

<style lang="scss" scoped>
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
    position: relative;
    box-sizing: border-box;
    min-height: 0;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    //可以滚动
    overflow-y: auto;

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
.status-online {
    width: 15px;
    height: 15px;
    background-color: #43b581;
    border-radius: 50%;
    border: 2px solid #43b580;
    margin-top: 143px;
    z-index: 1;
    margin-left: -26px;
}

//一致的 也影响Banner
.bannerPremium {
    -webkit-transition: background-color 0.1s;
    transition: background-color 0.1s;
    width: 100%;
    background-image: url(https://cdn.discordapp.com/banners/615354796781862913/282618b6abb252e59ec1acc0ba1dbc20.png?size=1024);
    background-size: cover;
}

//右边的卡片样式表
.right-card {
    border-radius: 8px;
    width: 80%;
    margin-left: 24px;
    margin-top: 18px;
    line-height: 24px;
    background-color: #1f2123;
    border-color: #b1b5bc;
    padding: 12px 12px 12px;
    .note {
        margin-top: 8px;
        .textarea {
            background-color: #1f2123;
            border: none;
            color: white;
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
    align-items: flex-end;
    color: white;
}
.right-card {
    .userTagNoNickname {
        //最后一个子元素和最后第二个子元素的样式
        &:last-child,
        &:nth-last-child(2) {
            font-size: 14px;
        }
        .commentServer-num {
            font-size: 14px;
            color: #dbdee1;
        }
        .commentServer {
            .commentServerItem {
                .commentServerItemImg {
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
    }
}
//分界线样式
.line {
    margin-top: 12px;
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
    margin-left: 280px;
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

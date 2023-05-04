<template>
    <div class="main-message" style="overflow: hidden scroll; padding-right: 0">
        <foreignObject x="0" y="0" width="100%" height="100%" overflow="visible" mask="url(#uid_38)">
            <div class="panelBanner bannerPremium" style="background-color: #1f2123">
                <svg width="92" height="92" viewBox="0 0 92 92" class="mask" aria-hidden="true">
                    <foreignObject x="0" y="0" width="100" height="100" mask="url(round-80)">
                        <div class="avatar-container">
                            <img class="avatar-image"
                                 src="https://cdn.discordapp.com/avatars/760729927552729119/20167f95c93ef46167737aee7201cb92.webp?size=48"
                                 alt="">
                        </div>
                    </foreignObject>
                    <rect width="16" rx="30" ry="30" height="16" x="63" y="65" fill="#23a55a" mask="url(round-80)">
                    </rect>
                </svg>
            </div>
        </foreignObject>
        <div class="badgeList">
            <a @click="openVn" class="anchorUnderlineOnHover">
                <img alt="Null" class="imgStyle"
                     src="https://cdn.discordapp.com/badge-icons/3aa41de486fa12454c3761e8e223442e.png">
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
            >我想和你在一起，无须遨游远方，只要执手相依，<br/>到处都是风景： 我们在一起，不必锦衣玉食，<br/>哪怕粗布淡饭，亦是阳光满天：
                我们在一起，<br/>远离曲折是非，领略风平浪静，平淡也是幸福。<br/>
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
            <textarea placeholder="点击添加备注" aria-label="备注" maxlength="256" class="textarea"
                      style="height: 24px;"></textarea>
            </div>
        </div>
        <div class="right-card">
            <div class="mutualGuildsList">
                <button type="button"
                        class="collapseBtn">
                    <div class="contents">
                        <div class="defaultColor">
                            16 个共同服务器中
                        </div>
                        <div class="iconWrapper">
                            <svg class="transition" width="24" height="24"
                                 viewBox="0 0 24 24" aria-hidden="true" role="img">
                                <path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                      stroke-linejoin="round" d="M7 10L12 15 17 10" aria-hidden="true">
                                </path>
                            </svg>
                        </div>
                    </div>
                </button>
            </div>
            <br>
            <div class="mutualGuildsList">
                <button type="button"
                        class="collapseBtn">
                    <div class="contents">
                        <div class="defaultColor">
                            7 个共同好友
                        </div>
                        <div class="iconWrapper">
                            <svg class="transition" width="24" height="24"
                                 viewBox="0 0 24 24" aria-hidden="true" role="img">
                                <path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                      stroke-linejoin="round" d="M7 10L12 15 17 10" aria-hidden="true">
                                </path>
                            </svg>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {useUserFriendsStore} from '@/store/modules/friends';
import router from '@/router';
import {ElMessage} from "element-plus";

const friendsStore = useUserFriendsStore();
// 用户信息在friendsStore.friendInfo中，直接调用即可
// 使用watch监听路由变化，获取当前路由的id，然后调用friendsStore.getFriendInfo(id)方法获取用户信息
watch(
    () => router.currentRoute.value.params.id,
    (id) => {
        friendsStore.getFriendInfo(id as string);
    },
    {immediate: true}
);
const openVn = () => {
    ElMessage({
        message: h('p', null, [
            h('i',
                {style: 'color:green'},
                'Future-Support-会员标记')
        ])
    })
}
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

.collapseBtn{
    background-color: transparent;
    border-radius: 0;
    height: 28px;
    padding: 13px 12px 11px;
    width: 90%;
}

.iconWrapper{
    color: var(--text-normal);
    justify-content: right;
    -ms-flex-item-align: right;
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
}

//上面Banner的样式表
.panelBanner {
    height: 120px;
}

//一致的 也影响Banner
.bannerPremium {
    -webkit-transition: background-color 0.1s;
    transition: background-color 0.1s;
    width: 100%;
}

//右边的卡片样式表
.right-card {
    border-radius: 23px;
    width: 80%;
    margin-left: 24px;
    margin-top: 18px;
    line-height: 24px;
    background-color: #1f2123;
    border-color: #b1b5bc;
    padding: 12px 12px 12px;
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
    margin-top: 12px;
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

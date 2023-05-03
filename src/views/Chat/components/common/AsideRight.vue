<template>
    <div class="main-message" style="overflow: hidden scroll; padding-right: 0px">
        <foreignObject x="0" y="0" width="100%" height="100%" overflow="visible" mask="url(#uid_38)">
            <div class="panelBanner bannerPremium" style="background-color: rgb(214, 213, 215)"></div>
        </foreignObject>
        <div class="right-card">
            <div class="userTagNoNickname">
                <span>King</span>
                <span>#1145</span>
            </div>
            <div class="line"></div>
            <h2 class="userDes">自我介绍</h2>
            <div style="-webkit-line-clamp: 6">
                <span class="userText"
                    >我想和你在一起，无须遨游远方，只要执手相依，<br />到处都是风景： 我们在一起，不必锦衣玉食，<br />哪怕粗布淡饭，亦是阳光满天：
                    我们在一起，<br />远离曲折是非，领略风平浪静，平淡也是幸福。<br />
                </span>
            </div>
            <div class="line"></div>
            <h2 class="userDes">Future用户注册时间</h2>
            <div style="-webkit-line-clamp: 6">
                <span class="userText">2021-07-01 04:00:00</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useUserFriendsStore } from '@/store/modules/friends';
import router from '@/router';

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
</script>

<style lang="scss" scoped>
.main-box-right-main2-main2 {
    &.main-box-right-main2-main2 {
        background-color: #313338;
    }
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
    margin-top: 24px;
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
</style>

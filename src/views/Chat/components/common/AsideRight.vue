<template>
    <el-main class="main-box-right-main2-main2">Main</el-main>
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
    { immediate: true },
);
</script>

<style lang="scss" scoped>
.main-box-right-main2-main2 {
    &.main-box-right-main2-main2 {
        background-color: #313338;
    }
}
</style>

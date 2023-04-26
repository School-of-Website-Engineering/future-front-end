<template>
    <router-view />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useUserFriendsStore } from '@/store/modules/friends';
const userFriends = useUserFriendsStore();

onMounted(() => {
    // 获取好友列表以及操作数量提示气泡
    userFriends.getPendingFriends();
});
</script>

<style scoped></style>

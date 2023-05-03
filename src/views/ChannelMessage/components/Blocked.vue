<template>
    <!-- 已屏蔽 -->
    <FriendsDisplay
        :status="'blocked'"
        :list="userFriends.blockedFriends"
        :icon-right="'fa-solid fa-user-xmark'"
        :title-text="'已屏蔽数'"
        v-if="ListLength"
    />
    <!--  空状态  -->
    <el-empty description="暂无好友" :image-size="200" class="empty-box" v-else></el-empty>
</template>

<script setup lang="ts" name="ToBeDetermined">
import { useUserFriendsStore } from '@/store';
import { computed } from 'vue';

const userFriends = useUserFriendsStore();
const ListLength = computed(() => userFriends.blockedFriends.length);
</script>

<style lang="scss" scoped>
.empty-box {
    //    居中
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 500px;
    width: 100%;
}
</style>

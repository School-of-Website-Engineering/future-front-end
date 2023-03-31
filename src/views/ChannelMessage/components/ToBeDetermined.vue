<template>
    <!--  如果数组中有数据  -->
    <FriendsDisplay
        :status="'ToBeDetermined'"
        :list="userFriends.handlePendingFriendsList"
        :icon-left="'fa-solid fa-check'"
        :icon-right="'fa-solid fa-xmark'"
        :title-text="'待处理数'"
        v-if="ListLength"
    />
    <!--  空状态  -->
    <el-empty description="暂无好友" :image-size="200" class="empty-box" v-else></el-empty>
</template>

<script setup lang="ts">
import { defineComponent, computed } from 'vue';
import { useUserFriendsStore } from '@/store/modules/friends';

const userFriends = useUserFriendsStore();
// 待定好友列表长度
const ListLength = computed(() => {
    return userFriends.pendingFriends.length;
});

defineComponent({
    name: 'Blocked',
});
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

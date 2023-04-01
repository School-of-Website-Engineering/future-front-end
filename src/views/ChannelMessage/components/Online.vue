<template>
    <!--  在线好友  -->
    <FriendsDisplay
        :status="'all'"
        :list="userFriends.handleOnlineFriendsList"
        :icon-right="'fa-solid fa-bars'"
        :icon-left="'fa-solid fa-comments'"
        :title-text="'在线'"
        v-if="ListLength"
    />
    <!--  空状态  -->
    <el-empty description="暂无好友" :image-size="200" class="empty-box" v-else></el-empty>
</template>

<script setup lang="ts">
import { computed, defineComponent } from 'vue';
import { useUserFriendsStore } from '@/store/modules/friends';

const userFriends = useUserFriendsStore();
// 所有好友列表长度
const ListLength = computed(() => {
    return userFriends.handleOnlineFriendsList.length;
});

defineComponent({
    name: 'Online'
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

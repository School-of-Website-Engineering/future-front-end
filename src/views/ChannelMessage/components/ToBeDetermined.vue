<template>
    <!--  如果数组中有数据  -->
    <FriendsDisplay
        :status="'all'"
        :list="userFriends.friends"
        :icon-right="'fa-solid fa-bars'"
        :icon-left="'fa-solid fa-comments'"
        v-if="userFriends.friends.length > 0"
    />
    <!--  空状态  -->
    <el-empty description="暂无好友" :image-size="200" class="empty-box" v-else></el-empty>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import { useUserFriendsStore } from '@/store/modules/friends';

const userFriends = useUserFriendsStore();

defineComponent({
    name: 'All'
});
const search = ref('');
defineComponent({
    name: 'Blocked'
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

<template>
    <!--  如果数组中有数据  -->
    <FriendsDisplay
        :status="'all'"
        :list="userFriends.friends"
        :icon-right="'fa-solid fa-bars'"
        :icon-left="'fa-solid fa-comments'"
        :title-text="'好友总数'"
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
    return userFriends.friends.length;
});

defineComponent({
    name: 'All'
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

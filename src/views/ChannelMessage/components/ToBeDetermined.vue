<template>
    <!--  如果数组中有数据  -->
    <FriendsDisplay
        :status="'all'"
        :list="toBeDeterminedFriendsList"
        :icon-right="'fa-solid fa-check'"
        :icon-left="'fa-solid fa-xmark'"
        v-if="toBeDeterminedList.length > 0"
    />
    <!--  空状态  -->
    <el-empty description="暂无好友" :image-size="200" class="empty-box" v-else></el-empty>
</template>

<script setup lang="ts">
import UserFriendsService, { IUserFriendsPendingResponse } from '@/api/friends';
import { onMounted, reactive, defineComponent, ref } from 'vue';
const toBeDeterminedFriendsList = reactive<IUserFriendsPendingResponse[]>([]);
onMounted(() => {
    toBeDeterminedList();
});

const toBeDeterminedList = async() => {
    const { data, code } = await UserFriendsService.getUserFriendsPending();
    if (code === 0) {
        console.log('待定好友列表------------------------');
        toBeDeterminedFriendsList.push(...data.friends);
        console.log(toBeDeterminedFriendsList);
    }
};

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

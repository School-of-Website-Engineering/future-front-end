<template>
    <FriendsDisplay :status="'all'" :list="userFriends.friends" />
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import { useUserFriendsStore } from '@/store/modules/friends';

const userFriends = useUserFriendsStore();

defineComponent({
    name: 'All'
});
const search = ref('');
</script>

<style lang="scss" scoped></style>

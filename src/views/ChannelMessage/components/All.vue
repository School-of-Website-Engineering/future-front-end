<template>
    <FriendsDisplay :text="'好友总数 — 4'" :status="'all'" />
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import FriendsDisplay from './common/FriendsDisplay.vue';

defineComponent({
    name: 'All'
});
const search = ref('');
const searchFriend = () => {
    console.log(search);
};
</script>

<style lang="scss" scoped></style>

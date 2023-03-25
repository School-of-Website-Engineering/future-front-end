<template>
    <FriendsDisplay :status="'online'" />
</template>

<script setup lang="ts">
import FriendsDisplay from './common/FriendsDisplay.vue';
import { defineComponent } from 'vue';
defineComponent({
    name: 'Online',
});
</script>

<style lang="scss" scoped></style>

<template>
    <!-- 在线状态显示组件 -->
    <!-- 在线 -->
    <div v-if="status === 'online'" class="status-online">
        <svg x="14.5" y="17" width="25" height="15" viewBox="0 0 25 15" class="cursorDefault-2M8ZNp">
            <mask id=":r8:">
                <rect x="7.5" y="5" width="10" height="10" rx="5" ry="5" fill="white"></rect>
                <rect x="12.5" y="10" width="0" height="0" rx="0" ry="0" fill="black"></rect>
                <polygon
                    points="-2.16506,-2.5 2.16506,0 -2.16506,2.5"
                    fill="black"
                    transform="scale(0) translate(13.125 10)"
                    style="transform-origin: 13.125px 10px"
                ></polygon>
                <circle fill="black" cx="12.5" cy="10" r="0"></circle>
            </mask>
            <rect fill="#23a55a" width="25" height="15" mask="url(#:r8:)"></rect>
        </svg>
    </div>
    <!-- 闲置 -->
    <div v-else-if="status === 'idle'" class="status-idle">
        <svg x="14.5" y="17" width="25" height="15" viewBox="0 0 25 15" class="cursorDefault-2M8ZNp">
            <mask id=":ra:">
                <rect x="7.5" y="5" width="10" height="10" rx="5" ry="5" fill="white"></rect>
                <rect x="6.25" y="3.75" width="7.5" height="7.5" rx="3.75" ry="3.75" fill="black"></rect>
                <polygon
                    points="-2.16506,-2.5 2.16506,0 -2.16506,2.5"
                    fill="black"
                    transform="scale(0) translate(13.125 10)"
                    style="transform-origin: 13.125px 10px"
                ></polygon>
                <circle fill="black" cx="12.5" cy="10" r="0"></circle>
            </mask>
            <rect fill="#f0b232" width="25" height="15" mask="url(#:ra:)"></rect>
        </svg>
    </div>
    <!-- 离线 -->
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
// 父组件传入的状态值：在线、离线、闲置、忙碌
const status = ref<string>('');

defineProps({
    status: {
        type   : String,
        default: 'online'
    }
});
</script>

<style lang="scss" scoped></style>

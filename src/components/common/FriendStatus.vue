<template>
    <!-- 在线状态显示组件 -->
    <!-- 在线 -->
    <el-tooltip v-if="status === 'online'" effect="dark" :content="statusText" placement="top">
        <div class="status-online friendStatus"></div>
    </el-tooltip>
    <!-- 闲置 -->
    <el-tooltip v-else-if="status === 'idle'" effect="dark" :content="statusText" placement="top">
        <div class="status-idle friendStatus"></div>
    </el-tooltip>
    <!-- 离线 -->
    <el-tooltip v-else-if="status === 'offline'" effect="dark" :content="statusText" placement="top">
        <div class="status-offline friendStatus"></div>
    </el-tooltip>
    <!-- 忙碌 -->
    <el-tooltip v-else-if="status === 'busy'" effect="dark" :content="statusText" placement="top">
        <div class="status-busy friendStatus"></div>
    </el-tooltip>
</template>

<script setup lang="ts">
// 父组件传入的状态值：在线、离线、闲置、忙碌
const props = defineProps({
    status: {
        type   : String,
        default: 'online'
    },
    statusText: {
        type   : String,
        default: '在线'
    }
});
</script>

<style lang="scss" scoped>
//在线状态显示组件样式
.status-online {
    width: 10px;
    height: 10px;
    background-color: #43b581;
    border-radius: 50%;
    border: 2px solid #2f3136;
}
//闲置状态显示组件样式
.status-idle {
    width: 10px;
    height: 10px;
    background-color: #faa61a;
    border-radius: 50%;
    border: 2px solid #2f3136;
}
//离线状态显示组件样式
.status-offline {
    width: 10px;
    height: 10px;
    background-color: #747f8d;
    border-radius: 50%;
    border: 2px solid #2f3136;
}
//忙碌状态显示组件样式
.status-busy {
    width: 10px;
    height: 10px;
    background-color: #f04747;
    border-radius: 50%;
    border: 2px solid #2f3136;
}
</style>

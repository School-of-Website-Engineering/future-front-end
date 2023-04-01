<template>
    <!-- 在线状态显示组件 -->
    <!-- 在线 -->
    <div class="friendStatus">
        <div
            v-if="!statusText"
            :class="[
                status === 'online'
                    ? 'status-online'
                    : status === 'idle'
                    ? 'status-idle'
                    : status === 'offline'
                    ? 'status-offline'
                    : 'status-busy',
            ]"
        ></div>
        <el-tooltip
            :hide-after="50"
            :enterable="false"
            v-else-if="status === 'online'"
            effect="dark"
            :content="statusText"
            placement="top"
        >
            <div class="status-online"></div>
        </el-tooltip>
        <!-- 闲置 -->
        <el-tooltip
            :hide-after="50"
            :enterable="false"
            v-else-if="status === 'idle'"
            effect="dark"
            :content="statusText"
            placement="top"
        >
            <div class="status-idle"></div>
        </el-tooltip>
        <!-- 离线 -->
        <el-tooltip
            :hide-after="50"
            :enterable="false"
            v-else-if="status === 'offline'"
            effect="dark"
            :content="statusText"
            placement="top"
        >
            <div class="status-offline"></div>
        </el-tooltip>
        <!-- 忙碌 -->
        <el-tooltip
            :hide-after="50"
            :enterable="false"
            v-else-if="status === 'busy'"
            effect="dark"
            :content="statusText"
            placement="top"
        >
            <div class="status-busy"></div>
        </el-tooltip>
    </div>
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
        default: ''
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
    //中间为空心
    &:after {
        content: '';
        display: block;
        width: 5px;
        height: 5px;
        background-color: #2f3136;
        border-radius: 50%;
        margin: 2.5px;
    }
}

//闲置状态显示组件样式
.status-idle {
    width: 10px;
    height: 10px;
    background-color: #faa61a;
    border-radius: 50%;
    border: 2px solid #2f3136;
    //中间为空心
    &:after {
        content: '';
        display: block;
        width: 5px;
        height: 5px;
        background-color: #2f3136;
        border-radius: 50%;
        margin: 2.5px;
    }
}

//离线状态显示组件样式
.status-offline {
    width: 10px;
    height: 10px;
    background-color: #747f8d;
    border-radius: 50%;
    border: 2px solid #2f3136;
    //中间为空心
    &:after {
        content: '';
        display: block;
        width: 5px;
        height: 5px;
        background-color: #2f3136;
        border-radius: 50%;
        margin: 2.5px;
    }
}

//忙碌状态显示组件样式
.status-busy {
    width: 10px;
    height: 10px;
    background-color: #f04747;
    border-radius: 50%;
    border: 2px solid #2f3136;
    //中间为空心
    &:after {
        content: '';
        display: block;
        width: 5px;
        height: 5px;
        background-color: #2f3136;
        border-radius: 50%;
        margin: 2.5px;
    }
}
</style>

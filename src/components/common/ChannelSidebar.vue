<template>
    <!--频道侧边栏,Collapse 折叠面板-->
    <el-aside width="90px" class="main-aside">
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            @open="handleOpen"
            @close="handleClose"
        >
            <el-menu-item index="2">
                <template #title><img class="channel-img" src="src/assets/future_ico.png" /></template>
            </el-menu-item>
            <el-menu-item index="4">
                <template #title>Navigator Four</template>
            </el-menu-item>
        </el-menu>
    </el-aside>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.main-aside {
    .el-menu-item {
        display: unset;
        width: 90px;
        text-align: center;
    }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    .channel-img {
        width: 40px;
        height: 40px;
    }
}
</style>

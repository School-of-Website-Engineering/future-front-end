<template>
    <el-container>
        <el-header class="main-box-right-header1">Header</el-header>
        <el-main class="main-box-right-main1">
            <el-footer>Footer</el-footer>
        </el-main>
    </el-container>
</template>

<script setup lang="ts">
import AsideLPrivateService from '@/api/aside';
import { onMounted } from 'vue';

onMounted(() => {
    getAsideLPrivateData();
});

// 获取侧边栏私信数据
const getAsideLPrivateData = async() => {
    const res = await AsideLPrivateService.getAsideLPrivate();
    console.log(res);
};
</script>

<style lang="scss" scoped>
.main-box-right-header1,
.main-box-right-header2 {
    height: 50px;

    &.main-box-right-header1 {
        background-color: #2b2d31;
        border-bottom: solid 1px #1f2123;
    }

    &.main-box-right-header2 {
        background-color: #313338;
        border-bottom: solid 1px #2c2e33;
    }
}

.main-box-right-main1,
.main-box-right-main2 {
    height: 100%;
    padding: unset;

    &.main-box-right-main1 {
        background-color: #2b2d31;
        //将盒子的内容放在底部
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    &.main-box-right-main2 {
    }
}

.el-header,
.el-footer {
    background-color: #b3c0d1;
    color: #616161;
    text-align: center;
}
</style>

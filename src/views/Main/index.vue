<template>
    <el-container class="main-box">
        <!--频道侧边栏-->
        <ChannelSidebar />
        <el-row class="main-box-right">
            <el-col :span="4">
                <el-container>
                    <el-header class="main-box-right-header1">Header</el-header>
                    <el-main class="main-box-right-main1">Main</el-main>
                </el-container>
            </el-col>
            <el-col :span="20">
                <el-container>
                    <el-header class="main-box-right-header2">Header</el-header>
                    <el-row class="main-box-right-main2">
                        <el-col :span="17">
                            <el-container>
                                <el-main class="main-box-right-main2-main1">Main</el-main>
                            </el-container>
                        </el-col>
                        <el-col :span="7">
                            <el-container>
                                <el-main class="main-box-right-main2-main2">Main</el-main>
                            </el-container>
                        </el-col>
                    </el-row>
                </el-container>
            </el-col>
        </el-row>
    </el-container>
</template>

<script setup lang="ts">
import ChannelSidebar from '@/components/common/ChannelSidebar.vue';
</script>

<style lang="scss" scoped>
.main-box {
    .main-box-right {
        flex: 1;
    }

    .main-box-right-main1,
    .main-box-right-main2 {
        height: 100vh;

        &.main-box-right-main1 {
            background-color: #8ea1b9;
        }
    }

    .main-box-right-header1,
    .main-box-right-header2 {
        height: 50px;
        line-height: 50px;

        &.main-box-right-header1 {
            background-color: #8796ab;
        }
    }

    .main-box-right-main2-main1,
    .main-box-right-main2-main2 {
        height: 100vh;

        &.main-box-right-main2-main1 {
            background-color: #727e8f;
        }
    }
}

.el-header,
.el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
}

body > .el-container {
    margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}
</style>

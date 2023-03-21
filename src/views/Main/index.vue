<template>
    <el-container class="main-box">
        <!--频道侧边栏-->
        <ChannelSidebar class="channel-sidebar" />
        <!-- 右侧主内容 -->
        <el-row class="main-box-right">
            <el-col :span="4">
                <router-view />
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
import ChannelSidebar from '@/views/Aside/index.vue';
</script>

<style lang="scss" scoped>
.el-container {
    height: 100%;
}

.main-box {
    height: 100vh;

    .channel-sidebar {
        background-color: #1e1f22;
    }

    .main-box-right {
        flex: 1;
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

    .main-box-right-header1,
    .main-box-right-header2 {
        height: 50px;

        &.main-box-right-header1 {
            background-color: #2b2d31;
            border-bottom: solid 1.5px #1f2123;
        }

        &.main-box-right-header2 {
            background-color: #313338;
            border-bottom: solid 1.5px #2c2e33;
        }
    }

    .main-box-right-main2-main1,
    .main-box-right-main2-main2 {
        &.main-box-right-main2-main1 {
            background-color: #313338;
            border-right: 1.5px solid #3f4147;
        }

        &.main-box-right-main2-main2 {
            background-color: #313338;
        }
    }
}

.el-header,
.el-footer {
    background-color: #b3c0d1;
    color: #616161;
    text-align: center;
}

.el-aside {
    background-color: #d3dce6;
    color: #616161;
    text-align: center;
}

.el-main {
    background-color: #e9eef3;
    color: #616161;
    text-align: center;
}

body > .el-container {
    margin-bottom: 40px;
}
</style>

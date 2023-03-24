<template>
    <el-container>
        <el-header class="main-box-right-header2">
            <el-row>
                <el-col :span="19" class="header-left">
                    <div class="header-left-left">
                        <span>
                            <i class="fa-solid fa-user"></i>
                            好友
                        </span>
                        <div class="divider-q3P9HC"></div>
                        <span> 在线 </span>
                        <span> 全部 </span>
                        <span> 待定 </span>
                        <span> 已屏蔽 </span>
                        <span> 添加好友 </span>
                    </div>
                </el-col>
                <el-col :span="5" class="header-right"> </el-col>
            </el-row>
        </el-header>
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
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.header-left {
    .header-left-left {
        display: flex;
        height: 50px;
        align-items: center;
        justify-content: space-evenly;
        width: 440px;

        span {
            &:first-child {
                font-size: 16px;
                font-weight: bold;
                color: #f2f3f5;

                .fa-user {
                    color: #80848e;
                }
            }

            &:not(:first-child) {
                padding: 1.8px 8px;
                font-size: 16px;
                color: #b5bac1;

                &:hover:not(:first-child) {
                    background-color: #393c41;
                    border-radius: 3px;
                    cursor: pointer;
                    color: #d6d6dc;
                }
            }

            &:last-child {
                background-color: #248046;
                border-radius: 3px;
                color: #fffff3;
            }
        }

        .divider-q3P9HC {
            width: 1px;
            height: 24px;
            margin: 0 8px;
            -webkit-box-flex: 0;
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            background: #3f4147;
        }
    }
}

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

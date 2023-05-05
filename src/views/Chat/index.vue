<template>
    <div>
        <el-container>
            <el-header class="main-box-right-header2">
                <el-row>
                    <el-col :span="15" class="header-left">
                        <HeaderLeft />
                    </el-col>
                    <el-col :span="8" class="header-right">
                        <HeaderRight />
                    </el-col>
                </el-row>
            </el-header>
            <el-row class="main-box-right-main2">
                <el-col :span="17">
                    <el-container>
                        <Main />
                    </el-container>
                </el-col>
                <el-col :span="7" class="aside-box-right">
                    <el-container>
                        <AsideRight />
                    </el-container>
                </el-col>
            </el-row>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import HeaderLeft from '@/views/Chat/components/common/HeaderLeft.vue';
import HeaderRight from '@/views/Chat/components/common/HeadeRight.vue';
import AsideRight from '@/views/Chat/components/common/AsideRight.vue';
import Main from '@/views/Chat/components/common/Main.vue';
</script>

<style lang="scss" scoped>
.el-row {
    justify-content: space-between;
}

.header-right {
    .header-right-right {
        display: flex;
        height: 50px;
        align-items: center;
        justify-content: flex-end;
        width: 100%;

        span {
            margin: 0 10px;
            font-size: 17.5px;
            color: #b5bac1;

            &:hover {
                background-color: #393c41;
                border-radius: 3px;
                cursor: pointer;
                color: #d6d6dc;
            }
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
        position: relative;
        height: 100vh;
        padding: unset;
        background-color: #313338;

        &.main-box-right-main1 {
            background-color: #2b2d31;
            //将盒子的内容放在底部
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
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

    .main-box-right-main2-main1 {
        padding-top: unset;
        //    固定定位
        position: absolute;
        width: 840px;
        height: 100%;
        //    使其不会被遮挡
        z-index: 1;
        //超出视口滚动条
        overflow-y: auto;
        //    美化滚动条
        &::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #2b2d31;
            border-radius: 4px;
        }

        &::-webkit-scrollbar-track {
            background-color: #313338;
            border-radius: 4px;
        }
    }

    .main-box-right-main2-main1,
    .main-box-right-main2-main2 {
        &.main-box-right-main2-main1 {
            border-right: 1.5px solid #3f4147;
            background-color: #313338;
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

.is-active {
    background-color: #43444b;
    border-radius: 3px;
    color: #f2f3f5 !important;
}

.is-active-add {
    background-color: unset !important;
    border-radius: 3px;
    color: #2dc770 !important;
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
</style>

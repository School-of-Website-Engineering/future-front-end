<template>
    <div class="header-right-right">
        <el-tooltip :hide-after="0" class="box-item" effect="dark" content="语音通话" placement="bottom-end">
            <span>
                <i class="fa-solid fa-phone-volume"></i>
            </span>
        </el-tooltip>

        <el-tooltip :hide-after="0" :enterable="false" effect="dark" content="视频通话" placement="bottom">
            <span>
                <i class="fa-solid fa-video"></i>
            </span>
        </el-tooltip>
        <el-tooltip :hide-after="0" :enterable="false" effect="dark" content="添加好友" placement="bottom">
            <span>
                <i class="fa-solid fa-user-plus"></i>
            </span>
        </el-tooltip>
        <div class="search-box">
            <input type="text" placeholder="搜索" />
            <i class="fa-solid fa-search"></i>
        </div>
        <el-tooltip :hide-after="0" :enterable="false" effect="dark" content="设置" placement="bottom">
            <span>
                <i class="fa-solid fa-inbox"></i>
            </span>
        </el-tooltip>
        <el-tooltip :hide-after="0" :enterable="false" effect="dark" content="帮助" placement="bottom">
            <span>
                <i class="fa-solid fa-circle-question"></i>
            </span>
        </el-tooltip>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.header-right-right {
    display: flex;
    flex: 1;
    height: 50px;
    align-items: center;
    justify-content: flex-end;
    width: 100%;

    svg {
        margin: 0 8px;
        cursor: pointer;
        color: #b5bac1;
        width: 24px;
        height: 18px;

        &:hover {
            color: #dbdee1;
        }
    }

    //    搜索框
    .search-box {
        position: relative;
        margin: 0 10px;
        transition: all 0.6s;

        input {
            width: 120px;
            height: 20px;
            border-radius: 3px;
            border: none;
            padding: 2px 10px;
            outline: none;
            background-color: #1e1f22;
        }

        svg {
            position: absolute;
            right: -7px;
            scale: 0.8;
            top: 40%;
            transform: translateY(-50%);
            cursor: pointer;
            color: #949ba4;
        }

        ::placeholder {
            color: #949ba4;
        }

        //    光标
        input:focus {
            border: 1px solid #3f51b5;
        }
    }
}
</style>

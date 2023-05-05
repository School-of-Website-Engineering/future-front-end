<template>
    <el-col :span="12" class="bottom-profile-avatar">
        <el-avatar src="http://39.105.229.249/ftp/ling/future/user/ling.webp" class="bottom-profile-avatar-img" />
        <span>
            <p>JDSA Ling</p>
            <p>#1237</p>
        </span>
    </el-col>
    <el-col :span="12" class="bottom-profile-avatar">
        <el-tooltip :hide-after="50" class="box-item" effect="dark" content="取消静音" placement="top">
            <i class="fa-solid fa-microphone-slash"></i>
        </el-tooltip>
        <el-tooltip :hide-after="50" class="box-item" effect="dark" content="耳机静音" placement="top">
            <i class="fa-solid fa-headphones"></i>
        </el-tooltip>
        <el-tooltip :hide-after="50" class="box-item" effect="dark" content="设置" placement="top">
            <i class="fa-solid fa-gear"></i>
        </el-tooltip>
    </el-col>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';

defineComponent({
    name: 'UserInfo',
});
</script>

<style lang="scss" scoped>
.bottom-profile {
    height: 100%;
    display: flex;
    align-items: center;
    //固定位置不动
    position: sticky;
    bottom: 0;
    z-index: 99;

    .bottom-profile-avatar {
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;

        &:first-child {
            justify-content: space-evenly;

            .bottom-profile-avatar-img {
                width: 40px;
                height: 40px;
            }

            // 鼠标移入后背景颜色变为：3D3E45
            &:hover {
                background-color: #3d3e45;
                border-radius: 5px;
                cursor: pointer;
            }

            span {
                width: 45px;

                p {
                    &:first-child {
                        overflow: hidden;
                        text-overflow: ellipsis;
                        color: #f2f3f5;
                        font-weight: bold;
                    }
                }
            }
        }

        &:last-child {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            font-size: 18px;
            color: #b5bac1;
            height: 30px;
            width: 30px;
            //鼠标悬停时的样式背景：35373C，控制.el-col下的.el-icon 和span颜色为：DBDEE1
            &:hover {
                background-color: #35373c;
                border-radius: 5px;
                cursor: pointer;
                color: #dbdee1;
            }
        }
    }
}
</style>

<template>
    <div class="header-left-left">1231</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.header-left-left {
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: space-evenly;
    width: 440px;

    .msgNum {
        display: inline-block;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        border-radius: 50%;
        background-color: #f23f42;
        font-weight: 700;
        color: #fff;
        font-size: 12px;
        margin-left: 4px;
        //垂直居中
        vertical-align: middle;
    }

    span {
        display: flex;
        align-items: center;

        &:first-child {
            font-size: 16px;
            font-weight: bold;
            color: #f2f3f5;

            .fa-user {
                color: #80848e;
            }

            svg {
                margin-right: 4px;
            }
        }

        &:not(:first-child) {
            padding: 1.8px 8px;
            font-size: 16px;
            color: #b5bac1;

            &:hover:not(:first-child :last-child) {
                background-color: #393c41;
                border-radius: 3px;
                cursor: pointer;
                color: #d6d6dc;
            }

            &:hover:last-child {
                cursor: pointer;
            }
        }

        &:last-child {
            background-color: #248046;
            border-radius: 3px;
            color: #fffff3;
        }
    }
}
</style>

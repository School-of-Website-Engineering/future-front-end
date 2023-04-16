<template>
    <div class="header-right-right"></div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
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
</style>

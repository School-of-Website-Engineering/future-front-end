<template>
    <div class="search-box">
        <el-input
            class="search-box-input"
            v-model="search"
            placeholder="搜索"
            @keyup.enter.native="searchFriend"
        ></el-input>
        <i class="fa-solid fa-magnifying-glass"></i>
    </div>
    <div>
        <h2 class="title-x4dI75 container-q97qHp">{{ text }}</h2>
    </div>
</template>

<script setup lang="ts">
import { ref, defineComponent, defineProps } from 'vue';
defineComponent({
    name: 'FriendsDisplay'
});
defineProps({
    text: {
        type   : String,
        default: '好友'
    }
});
const searchFriend = () => {
    console.log(search);
};
const search = ref('');
</script>

<style lang="scss" scoped>
.title-x4dI75 {
    margin: 0px 16px 20px 16px;
}

.container-q97qHp {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.02em;
    font-weight: 600;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    color: #b5bac1;
}

.search-box {
    position: relative;
    width: 100%;
    height: 35px;
    margin: 0px 16px 20px 16px;

    .search-box-input {
        width: 100%;
        height: 35px;
        border-radius: 3px;
        font-size: 14px;
        color: #333;
        background-color: #1e1f22;

        .is-focus {
            box-shadow: unset;
        }

        &::placeholder {
            color: #999;
            font-size: 20px;
        }
    }

    .fa-magnifying-glass {
        position: absolute;
        top: 50%;
        right: 11px;
        transform: translateY(-50%);
        font-size: 18px;
        color: #b5bac1;
        cursor: pointer;
    }
}

:deep(.el-input__wrapper) {
    background-color: #1e1f22;
    box-shadow: unset;
}

:deep(.is-focus) {
    box-shadow: unset;
}
</style>

<template>
    <div class="not-found" @mouseover="animate()">
        <h1>404</h1>
        <p>抱歉，您所寻找的页面未找到。</p>
        <div class="not-found-animation">
            <span v-for="(letter, index) in letters" :key="index" :class="{ animated: animated[index] }">{{
                letter
            }}</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { useUserStore } from '@/store/modules/user';

const userStore = useUserStore();
const userData = reactive({
    username: 'beibei',
    password: '1312'
});
console.log(userData.password, userData.username);
const onLogin = async() => {
    // 使用 actions，当作函数一样直接调用
    // login action 定义为了 async 函数，所以它返回一个 Promise
    await userStore.login(userData);
    userData.username = '';
    userData.password = '';
};
onLogin();
const onLogout = () => {
    userStore.logout();
};

/**
 * 404页面的动画
 *
 * @const {string[]} letters - 数组，包含要显示的字符
 * @const {Reactive<[]>} animated - 跟踪每个字符是否应该被动画化的数组
 * @function animate - 触发动画效果的函数
 *
 */
const letters = ['4', '0', '4'];
const animated = reactive([false, false, false]);
const animate = () => {
    animated.forEach((_, index) => {
        setTimeout(() => (animated[index] = true), index * 150);
    });
};
</script>

<style lang="scss">
.not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #333; /* 添加背景颜色 */

    h1 {
        font-size: 10rem;
        margin-bottom: -20px;
        color: white; /* 修改文字颜色为白色 */
    }

    p {
        font-size: 2rem;
        color: white; /* 修改文字颜色为白色 */
    }

    .not-found-animation {
        display: flex;

        .animated {
            animation-duration: 1s;
            animation-name: bounceIn;
            animation-fill-mode: both;
        }

        span {
            font-size: 10rem;
            margin-right: -20px;

            &:last-of-type {
                margin-right: unset;
            }

            color: white; /* 修改文字颜色为白色 */
        }
    }
}

@keyframes bounceIn {
    from,
    to {
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    0%,
    20%,
    40%,
    60%,
    80%,
    to {
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        transform: translate3d(0, 0, 0);
    }

    40%,
    60% {
        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        transform: translate3d(0, -30px, 0);
    }

    70% {
        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        transform: translate3d(0, -15px, 0);
    }

    90% {
        transform: translate3d(0, -4px, 0);
    }
}
</style>

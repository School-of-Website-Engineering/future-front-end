<template>
    <!-- 搜索框 -->
    <div class="add-friend">
        <h2>添加好友</h2>
        <p>你可以用id来添加好友。</p>
        <div class="search">
            <!-- 输入盒子 -->
            <div class="search-input">
                <input
                    type="text"
                    placeholder="输入id"
                    ref="inputRef"
                    v-model="input"
                    :class="{ 'is-error': !isNumber && input }"
                    @keyup.enter="searchFriend"
                />
                <div class="popover" :class="{ show: !isNumber && input }">
                    <div class="content">
                        <p v-if="!isNumber" class="error-text">请输入正确的好友id标签！如：123412</p>
                        <p v-else class="error-text">唔，没起作用。请再次检查字母大小写，拼写，空格与数字是否正确。</p>
                    </div>
                </div>
                <!-- 搜索按钮 -->
                <div class="search-btn">
                    <el-button
                        type="primary"
                        :disabled="isInput || !isNumber"
                        style="background-color: #5865f2"
                        @click="searchFriend"
                    >
                        搜索
                    </el-button>
                </div>
            </div>
        </div>
    </div>
    <!-- main -->
    <div class="add-friends-main">
        <!--  空状态  -->
        <el-empty description="暂无好友" :image-size="200" class="empty-box"></el-empty>
    </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue';
import UserFriendsService, { IUserInfoResponse } from '@/api/friends';
import { asyncTryCatch } from '@/utils/exceptionHandling';

// 输入框的引用
const inputRef = ref<HTMLInputElement | null>(null);
// 是否禁用搜索按钮
const isInput = ref<boolean>(false);
// 输入框的值
const input = ref<string>('');
// popover 可见性
const popoverVisible = ref<boolean>(false);
// 是否为数字
const isNumber = ref<boolean>(false);
// 用户信息对象
const friendsInfo = reactive<IUserInfoResponse>({
    mapKey: {
        id           : '',
        username     : '',
        email        : '',
        discriminator: '',
        password     : '',
        createdAt    : '',
        updatedAt    : '',
        role         : '',
        img          : ''
    }
});

/**
 * @description 进入页面后输入框自动获取焦点
 */
onMounted(() => {
    if (inputRef.value) {
        inputRef.value.focus();
    }
});

/**
 * @description 使用 watch 监听 input 的值
 */
watch(
    () => input.value,
    (newVal, oldVal) => {
        const reg = /^\d+$/;
        isInput.value = !newVal;
        isNumber.value = reg.test(newVal);
    },
    { immediate: true }
);

/**
 * @description 搜索好友
 */
const searchFriend = asyncTryCatch(async() => {
    if (/^\d+$/.test(input.value)) {
        const { data, code } = await UserFriendsService.getUserInfo(input.value);
        if (code === 200) {
            friendsInfo.mapKey.id = data.mapKey.id;
            friendsInfo.mapKey.username = data.mapKey.username;
            friendsInfo.mapKey.email = data.mapKey.email;
            friendsInfo.mapKey.discriminator = data.mapKey.discriminator;
            friendsInfo.mapKey.password = data.mapKey.password;
            friendsInfo.mapKey.createdAt = data.mapKey.createdAt;
            friendsInfo.mapKey.updatedAt = data.mapKey.updatedAt;
            friendsInfo.mapKey.role = data.mapKey.role;
            friendsInfo.mapKey.img = data.mapKey.img;
        } else {
            throw new Error('请求数据失败');
        }
    } else {
        popoverVisible.value = true;
    }
});
</script>

<style lang="scss" scoped>
.add-friend {
    width: 100%;
    padding: 20px 15px 30px 15px;

    h2 {
        text-align: left;
        margin-bottom: 8px;
        font-size: 16px;
        font-weight: 600;
        color: #f2f3f5;
        line-height: 20px;
        text-transform: uppercase;
    }

    p {
        text-align: left;
        color: #b5bac1;
        margin-bottom: 20px;
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
    }

    .search {
        display: flex;

        .search-input {
            flex: 1;

            input {
                width: 96%;
                height: 48px;
                border-radius: 8px;
                border: 1px solid #2f3136;
                padding: 0 18px;
                background-color: #1e1f22;
                font-size: 14px;
                line-height: 20px;
                font-weight: 400;

                &::placeholder {
                    color: #4e5058;
                }

                //    获取焦点后边框颜色变为00A8FC
                &:focus {
                    border: 1px solid #00a8fc;
                }
            }
        }

        .search-btn {
            width: 110px;
            margin-left: 10px;
            display: inline-block;
            position: relative;
            right: 132px;

            button {
                width: 100%;
                border-radius: 4px;
                border: 1px solid #2f3136;
                color: #ffffff;
                font-size: 14px;
                line-height: 30px;
                font-weight: 400;
                //禁用颜色为3B428A，字体为868790
                &:disabled {
                    background-color: #3b428a;
                    color: #868790;
                    //移除hover效果
                    &:hover {
                        background-color: #3b428a;
                    }
                }

                //如果按钮启用了，hover颜色为4752C4
                &:hover {
                    background-color: #4752c4;
                }

                //缓动效果
                transition: all 0.25s;
            }
        }
    }
}

.add-friends-main {
    // 占满父元素
    width: 100%;
    height: 100%;
    border-top: 1px solid #3f4147;

    .empty-box {
        //    居中
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 500px;
        width: 100%;
    }
}

.is-error {
    border-color: #f23f42 !important;
}

.error-text {
    color: #fa777c !important;
    margin-top: 5px;
}

.popover {
    position: absolute;
    left: 14px;
    width: 100%;
    z-index: 99;
    border-radius: 4px;
    overflow: hidden;
}

.popover.show .content {
    display: block;
}

.popover .content {
    display: none;
}
</style>

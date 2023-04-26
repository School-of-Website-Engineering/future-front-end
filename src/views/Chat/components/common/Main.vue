<template>
    <el-main class="main-box-right-main2-main1">
        <!--聊天记录列表：头像、名称、日期、内容-->
        <div class="chat-record-list">
            <div class="chat-record-list-item" v-for="item in messageRecord" :key="item.messageId">
                <div class="chat-record-list-item-left">
                    <el-image
                        :src="item.messageFrom === 'me' ? chatRecord.avatar : userLoginRegisterStore.getUserAvatar"
                        alt=""
                    />
                </div>
                <div class="chat-record-list-item-right">
                    <div class="chat-record-list-item-right-top">
                        <div class="chat-record-list-item-right-top-left">
                            <span>{{ chatRecord.name }}</span>
                            <span>{{ item.time }}</span>
                        </div>
                    </div>
                    <div class="chat-record-list-item-right-bottom">
                        <p>
                            {{ item.content }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!--发送消息框-->
        <div class="chat-search-box">
            <input placeholder="消息@手动阀" v-model="searchValue" @clear="searchValue = ''" />
            <el-button type="primary" @click="search"
                >发送
                <el-icon>
                    <Promotion />
                </el-icon>
            </el-button>
        </div>
    </el-main>
</template>

<script setup lang="ts">
import { onMounted, ref, watch, reactive } from 'vue';
import router from '@/router';
import { Promotion } from '@element-plus/icons-vue';
import ChatService, { IChatRecordMessageResponse, IChatRecordResponse } from '@/api/chat';
import { asyncTryCatch } from '@/utils/exceptionHandling';
import { useUserLoginRegisterStore } from '@/store';

const searchValue = ref<string>('');
// 聊天记录,空对象
const chatRecord = reactive<IChatRecordResponse>({
    avatar : '',
    id     : '',
    message: [],
    name   : '',
    time   : ''
});

// 聊天消息
const messageRecord = reactive<IChatRecordMessageResponse[]>([]);
// 获取用户信息
const userLoginRegisterStore = useUserLoginRegisterStore();
// 请求用户信息
onMounted(() => {
    userLoginRegisterStore.getUserInfo();
});
const search = () => {
    console.log(searchValue.value);
};

// 获取聊天记录
const chatList = asyncTryCatch(async(id: string) => {
    // 如果没有id，就不请求
    if (!id) return;
    const { data } = (await ChatService.getChatRecord(id)) as unknown as {
        data: IChatRecordResponse;
    };
    chatRecord.avatar = data.avatar;
    chatRecord.id = data.id;
    chatRecord.name = data.name;
    chatRecord.time = data.time;
    messageRecord.splice(0, messageRecord.length, ...data.message);
    console.log('------------聊天记录-------------');
    // console.log(chatRecord);
});

// 使用watch监听路由变化
watch(
    () => router.currentRoute.value.params.id,
    (id) => {
        console.log('------------当前路由传的id-------------');
        console.log(id);
        chatList(id);
        console.log('------------messageRecord-------------');
        console.log(messageRecord);
    },
    { immediate: true }
);
</script>

<style lang="scss" scoped>
.main-box-right-main2-main1 {
    &.main-box-right-main2-main1 {
        background-color: #313338;
        border-right: 1.5px solid #3f4147;
    }
}

//重写样式
.chat-search-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    height: 40px;
    background-color: #3f4147;
    border-bottom: 1.5px solid #3f4147;
    border-radius: 5px;

    input {
        width: 80%;
        height: 100%;
        border: none;
        background-color: #3f4147;
        color: #fff;
        border-radius: 3px;

        &::placeholder {
            color: #6d6f78;
        }
    }

    .el-button {
        width: 12%;
        height: 100%;
        border: none;
        border-left: 1.2px solid #666;
        border-radius: unset;
        background-color: #3f4147;
        color: #fff;
        padding-right: 6px;

        .el-icon {
            color: #fff;
            margin-left: 10px;
            font-size: 16px;
        }
    }
}

.chat-record-list {
    height: calc(100% - 90px);
    overflow-y: auto;
    //滚动条样式
    &::-webkit-scrollbar {
        width: 8px;
        height: 5px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #1a1b1e;
    }

    &::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: #2b2d31;
    }

    .chat-record-list-item {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: 10px 10px;
        margin: 10px 0;
        border-top: 1.5px solid #3f4147;

        .chat-record-list-item-left {
            width: 40px;
            height: 40px;

            .el-image {
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }

        .chat-record-list-item-right {
            width: calc(98% - 40px);
            height: auto;

            .chat-record-list-item-right-top {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 20px;

                .chat-record-list-item-right-top-left {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    width: 100%;

                    span {
                        &:first-child {
                            color: #fff;
                            font-size: 16px;
                            font-weight: 500;
                            margin-right: 10px;
                        }

                        &:last-child {
                            color: #6d6f78;
                            font-size: 12px;
                        }
                    }
                }
            }

            .chat-record-list-item-right-bottom {
                height: auto;

                p {
                    margin-top: 6px;
                    color: #fff;
                    font-size: 14px;
                    //超出自动换行
                    white-space: normal;
                    text-align: left;
                }
            }
        }
    }
}
</style>

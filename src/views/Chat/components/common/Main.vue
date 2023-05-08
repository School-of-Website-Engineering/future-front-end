<template>
    <el-main class="main-box-right-main2-main1">
        <!--聊天记录列表：头像、名称、日期、内容-->
        <div class="chat-record-list" ref="chatRecordList">
            <ChatHead :chatRecord="chatRecord" />
            <div
                class="chat-record-list-item"
                v-for="item in messageRecord"
                :key="item.messageId"
                @mouseenter="Themouseover(item)"
                @mouseleave="Themouseout(item)"
            >
                <div class="chat-record-list-item-left">
                    <el-image
                        :src="item.messageFrom === 'self' ? chatRecord.avatar : userLoginRegisterStore.getUserAvatar"
                    />
                </div>
                <div class="chat-record-list-item-right">
                    <div class="chat-record-list-item-right-top">
                        <div class="chat-record-list-item-right-top-left">
                            <span>{{ item.name || chatRecord.name }}</span>
                            <span>{{ item.time }}</span>
                        </div>
                    </div>
                    <div class="chat-record-list-item-right-bottom">
                        <p>
                            <hover-edit
                                :display="item.messageFrom !== 'me'"
                                :mouseenter="mouseover"
                                :mouseleave="mouseout"
                                :item="item"
                            >
                                {{ item.content }}
                            </hover-edit>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="chat-record-list-none" v-if="!messageRecord.length">
            <el-image src="https://img.icons8.com/ios/452/nothing-found.png" />
            <span>暂无聊天记录,快来和好友聊天吧</span>
        </div>
        <!--发送消息框-->
        <div class="chat-search-box">
            <input
                :placeholder="`消息@${chatRecord.name}`"
                v-model="searchValue"
                @clear="searchValue = ''"
                @keydown.enter="search"
            />
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
import HoverEdit from '@/components/common/HoverEdit.vue';
import { onMounted, reactive, ref, watch } from 'vue';
import router from '@/router';
import { Promotion } from '@element-plus/icons-vue';
import ChatService, { IChatRecordMessageResponse, IChatRecordResponse } from '@/api/chat';
import { asyncTryCatch } from '@/utils/exceptionHandling';
import { useUserLoginRegisterStore } from '@/store';
import ChatHead from '@/views/Chat/components/common/ChatHead.vue';
// 实现chatRecordList往下滚动的拽动效果，到底部时，可以滚动200px，越往下，滚动越慢

// 新内容
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
// 鼠标移入状态
const mouseover = ref<boolean>(false);
// 鼠标移出状态
const mouseout = ref<boolean>(true);
/**
 * 鼠标移入
 * @param item 聊天记录
 * @constructor 鼠标移入
 * @return void
 */
const Themouseover = (item: IChatRecordMessageResponse) => {
    item.isShow = true;
    if (item.messageFrom !== 'me') {
        mouseover.value = true;
        return;
    }
    console.log('鼠标移入');
    mouseover.value = false;
};
/**
 * 鼠标移出
 * @param item 聊天记录
 * @constructor 鼠标移出
 * @return void
 */
const Themouseout = (item: IChatRecordMessageResponse) => {
    item.isShow = false;
    if (item.messageFrom !== 'me') {
        mouseover.value = false;
        return;
    }
    console.log('鼠标移出');
    mouseover.value = false;
};
const asyncBottom = () => {
    // 将滚动条滚动到最底部,异步
    setTimeout(() => {
        const chatRecordList = document.querySelector('.chat-record-list');
        chatRecordList?.scrollTo(0, chatRecordList.scrollHeight);
    }, 0);
};
// 请求用户信息
onMounted(() => {
    userLoginRegisterStore.getUserInfo();
});
// 生成随机数
const randomNum = Math.floor(Math.random() * 100000000000);
const search = () => {
    console.log(searchValue.value);
    console.log(messageRecord);
    // 将当前的消息添加到聊天记录中
    messageRecord.push({
        content    : searchValue.value,
        messageType: 'text',
        messageFrom: 'me',
        messageId  : randomNum.toString(),
        time       : new Date().toLocaleString(),
        name       : 'JDSA Ling'
    });

    // 将滚动条滚动到最底部
    asyncBottom();
    console.log(messageRecord);
    // 调用发送消息接口
    newChat(router.currentRoute.value.params.id, searchValue.value);
    console.log(router.currentRoute.value.params.id);
    //     清空
    searchValue.value = '';
};
// 获取新聊天消息
const newChat = asyncTryCatch(async(id: string, content: string) => {
    // 如果没有id或者content，就不请求
    if (!id || !content) return;
    const { data } = (await ChatService.getChatSend({ id, content })) as unknown as { data: IChatRecordResponse };
    console.log(data);
    //将新的消息添加到聊天记录中，随机延迟0.5s~2.5s
    setTimeout(() => {
        // chatRecord重新赋值
        chatRecord.avatar = data.avatar;
        chatRecord.id = data.id;
        chatRecord.name = data.name;
        chatRecord.time = data.time;
        messageRecord.push({ ...data.message } as unknown as IChatRecordMessageResponse);
        // 将滚动条滚动到最底部
        asyncBottom();
    }, Math.random() * 2000 + 500);
    console.log(messageRecord);
});

// 获取聊天记录
const chatList = asyncTryCatch(async(id: string) => {
    // 如果没有id，就不请求
    if (!id) return;
    const { data } = (await ChatService.getChatRecord(id)) as unknown as { data: IChatRecordResponse };
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
    padding-right: unset;
}

.chat-record-list-none {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 120px;
    color: #6d6f78;
    font-size: 14px;
    font-weight: 500;
    //定位居中
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    img {
        width: 100px;
        height: 100px;
    }

    span {
        margin-top: 10px;
    }
}

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
    width: 95%;

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
        border-top: 1.5px solid #3f4147;

        &:last-child {
            margin-bottom: 50px;
        }

        //hover样式背景色为2E3035
        &:hover {
            background-color: #2e3035;
        }

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

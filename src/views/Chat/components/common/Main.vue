<template>
    <el-main class="main-box-right-main2-main1">
        <!--聊天记录列表：头像、名称、日期、内容-->
        <div class="chat-record-list">
            <div class="chat-record-list-item">
                <div class="chat-record-list-item-left">
                    <el-image
                        src="https://cdn.discordapp.com/avatars/958631735489359882/de9b28a508261d4e547d0a38e2d1ba72.webp?size=128"
                        alt=""
                    />
                </div>
                <div class="chat-record-list-item-right">
                    <div class="chat-record-list-item-right-top">
                        <div class="chat-record-list-item-right-top-left">
                            <span>张三</span>
                            <span>2021-08-08 12:00:00</span>
                        </div>
                    </div>
                    <div class="chat-record-list-item-right-bottom">
                        <span>你好</span>
                    </div>
                </div>
            </div>
            <div class="chat-record-list-item">
                <div class="chat-record-list-item-left">
                    <el-image
                        src="https://cdn.discordapp.com/avatars/958631735489359882/de9b28a508261d4e547d0a38e2d1ba72.webp?size=128"
                        alt=""
                    />
                </div>
                <div class="chat-record-list-item-right">
                    <div class="chat-record-list-item-right-top">
                        <div class="chat-record-list-item-right-top-left">
                            <span>张三</span>
                            <span>2021-08-08 12:00:00</span>
                        </div>
                    </div>
                    <div class="chat-record-list-item-right-bottom">
                        <span v-for="item in textArr" :key="item">{{ item }}</span>
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
import { reactive, ref, watch } from 'vue';
import router from '@/router';
import { Promotion } from '@element-plus/icons-vue';
import ChatService, { IChatRecordResponse } from '@/api/chat';
import { asyncTryCatch } from '@/utils/exceptionHandling';

const text = ref<string>(
    '你好大事发生的发生的南方来看骄傲的少年考虑发生地偶家GV立刻；大伤脑筋发哈独守空房你卡的少年卡佛京东IP金佛奥德赛科技佛ij冻结佛牌的世界观我后is多个我opjasdojgdgdjoigpjadsopj的噶十多个当第三个大事干大事'
);
const searchValue = ref<string>('');
// 聊天记录
let chatRecord = reactive<IChatRecordResponse[]>([]);
// 检测text的字符串长度，如果超过29个字符，就截取前29个字符，然后检测后面的字符是否超过29个，依次类推，直到最后检测不超过29个字符
/**
 * @param {string} text - 要检测的字符串
 * @param {number} length - 每次检测的字符串长度
 * @return {string[]} - 返回一个字符串数组
 */
const textArr = text.value.match(/.{1,50}/g) || [text.value];
console.log('------------聊天消息-------------');
console.log(textArr);

const search = () => {
    console.log(searchValue.value);
};

// 使用watch监听路由变化
watch(
    () => router.currentRoute.value.params.id,
    (id) => {
        console.log('------------当前路由传的id-------------');
        console.log(id);
        chatList(id);
    }
),
{ immediate: true };

// 获取聊天记录
const chatList = asyncTryCatch(async(id: string) => {
    const { data } = await ChatService.getChatRecord(id);
    chatRecord = data as unknown as IChatRecordResponse[];
    console.log('------------聊天记录-------------');
    console.log(chatRecord);
});
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

    .chat-record-list-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
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
            height: 40px;

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
                height: 20px;

                span {
                    margin-top: 6px;
                    color: #fff;
                    font-size: 14px;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                }
            }
        }
    }
}
</style>

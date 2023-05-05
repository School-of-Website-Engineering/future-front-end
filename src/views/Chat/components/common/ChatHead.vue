<template>
    <div class="chat-head">
        <div class="chat-head-left">
            <div class="chat-head-left-avatar">
                <img :src="chatRecord.avatar" alt="" />
            </div>
            <div class="chat-head-left-name">
                <span>{{ chatRecord.name }}</span>
            </div>
        </div>
        <div class="chat-head-right">
            <div class="chat-head-right-right">
                <div class="text">
                    <span>这是您与 </span>
                    <span>{{ chatRecord.name }}</span>
                    <span> 私信记录的开头</span>
                </div>
                <div class="info">
                    <span></span>
                    <span v-if="commonServiceCount.commonServer.length === 0">没有共同的服务器</span>
                    <span v-else>
                        {{ commonServiceCount.commonServer.length }}
                        个共同的服务器
                    </span>
                    <div class="button">
                        <el-button size="small" @click="deleteFriend" class="delete"> 删除好友 </el-button>
                        <el-button size="small" @click="shield" class="shield"> 屏蔽 </el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineComponent, defineProps, reactive } from 'vue';
import { IChatRecordResponse } from '@/api/chat';
import UserService, { ICommonServerCountResponse } from '@/api/user';
import { asyncTryCatch } from '@/utils/exceptionHandling';

const commonServiceCount = reactive<ICommonServerCountResponse>({
    commonServer: [
        {
            id: '',
            name: '',
            icon: '',
            tagId: '',
        },
    ],
    commonFriend: [
        {
            id: '',
            name: '',
            avatar: '',
            tagId: '',
        },
    ],
});

defineComponent({
    name: 'ChatHead',
});
const props = defineProps<{
    chatRecord: IChatRecordResponse;
}>();

// onMounted(() => {
//     commonService();
// });

watch(
    () => props.chatRecord.id,
    () => {
        commonService();
    },
);
/**
 * 获取共同的服务器
 * @param id 用户id
 * @returns 共同的服务器
 */
const commonService = asyncTryCatch(async () => {
    const { data } = await UserService.getCommonServerCount(props.chatRecord.id);
    data
        ? (commonServiceCount.commonServer = (
              data as unknown as {
                  commonServer: ICommonServerCountResponse['commonServer'];
              }
          ).commonServer)
        : (commonServiceCount.commonServer = []);
    console.log('commonServiceCount.commonServer', commonServiceCount.commonServer);
    console.log(commonServiceCount.commonServer.length);
});

const deleteFriend = () => {
    console.log('deleteFriend');
};
const shield = () => {
    console.log('shield');
};
</script>

<style lang="scss" scoped>
.chat-head {
    width: 100%;
    overflow: hidden;
    height: 160px;
    background-color: #313338;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding: 0 0 20px;
    border-bottom: 1px solid #4e5058;

    .chat-head-left {
        display: flex;
        align-items: center;

        .chat-head-left-avatar {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .chat-head-left-name {
            margin-left: 20px;
            font-size: 20px;
            font-weight: 600;
            color: #f2f3f5;
        }
    }

    .chat-head-right {
        display: flex;
        align-items: center;

        .chat-head-right-right {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            flex-direction: column;

            .text {
                font-size: 16px;
                color: #b5bac1;
                width: 26vw;
                height: 30px;
            }

            .info {
                font-size: 16px;
                transition: all 0.3s;
                width: 100%;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: space-evenly;

                span {
                    color: #b1b5bc;
                    font-size: 13px;
                }

                .delete {
                    margin-left: 20px;
                    color: #f2f3f5;
                    border-radius: 5px;
                    background-color: #4e5058;
                    transition: all 0.3s;
                    //    移入时的颜色
                    &:hover {
                        background-color: #63656d;
                    }

                    //    点击时去除border
                    &:active {
                        border: none;
                    }
                }

                .shield {
                    margin-left: 20px;
                    color: #f2f3f5;
                    border-radius: 5px;
                    background-color: #4e5058;
                    transition: all 0.3s;
                    //    移入时的颜色
                    &:hover {
                        background-color: #63656d;
                    }

                    //    点击时去除border
                    &:active {
                        border: none;
                    }
                }

                .button {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 160px;
                }
            }
        }
    }
}
</style>

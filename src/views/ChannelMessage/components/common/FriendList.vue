<template>
    <div class="friends-avatar">
        <el-avatar class="avatar" :src="$props.item.avatar"></el-avatar>
        <div class="friends-info">
            <div class="friends-name">
                {{ $props.item.name }}
                <p>#{{ $props.item.id }}</p>
            </div>
            <div :class="[statusMap[$props.status] && statusMap[$props.status], 'friends-status']">
                {{
                    statusMap[$props.item.status]
                        ? statusMap[$props.item.status]
                        : isInitiativeMap[$props.item.isInitiative]
                        ? isInitiativeMap[$props.item.isInitiative]
                        : '已屏蔽'
                }}
            </div>
            <friend-status :status="$props.status" :key="$props.status" v-if="status !== 'blocked'" />
        </div>
    </div>
    <!-- 图标 -->
    <div
        class="friends-more"
        v-if="iconLeft || iconRight"
        :class="{
            'deleteFriends addFriends': $props.status === 'ToBeDetermined' || $props.status === 'blocked',
        }"
    >
        <el-tooltip
            class="box-item"
            :hide-after="50"
            :enterable="false"
            :content="statusProps[$props.status]?.iconLeftMessage"
            placement="top"
        >
            <span v-show="iconLeft && !$props.item.isInitiative" class="span-hover2">
                <i :class="iconLeft"></i>
            </span>
        </el-tooltip>
        <el-tooltip
            :hide-after="50"
            :enterable="false"
            class="box-item"
            :content="statusProps[$props.status]?.iconRightMessage"
            placement="top"
        >
            <span v-if="iconRight" class="span-hover1">
                <i :class="iconRight"></i>
            </span>
        </el-tooltip>
    </div>
</template>

<script setup>
import { computed, defineProps, reactive, toRefs } from 'vue';

const props = defineProps({
    item: {
        type   : Object,
        default: () => ({
            id          : 0,
            name        : '',
            avatar      : '',
            status      : 'online',
            isInitiative: false
        })
    },
    statusMap      : Object,
    isInitiativeMap: Object,
    iconLeft       : String,
    iconRight      : String,
    status         : String
});

const { item, statusMap, isInitiativeMap, iconLeft, iconRight, status } = toRefs(props);

const STATUS_PROPS = {
    ToBeDetermined: {
        iconLeftMessage : '接受',
        iconRightMessage: '忽略'
    },
    all: {
        iconLeftMessage : '消息',
        iconRightMessage: '更多'
    },
    blocked: {
        iconRightMessage: '解除屏蔽'
    }
};

/**
 * 计算状态的配置项
 * @returns {Object} 计算得到的状态配置项对象
 */
const statusProps = computed(() => ({
    ...STATUS_PROPS,
    [status.value]: STATUS_PROPS[status.value]
}));
const state = reactive({
    STATUS_PROPS
});
</script>

<style lang="scss" scoped>
.search-box-header-top {
    padding-top: 15px;
    height: 50px;
    width: 100%;
    //固定至顶部
    position: sticky;
    top: 0;
    //    使其不会被遮挡
    z-index: 999;
    background-color: #313338;
}

.placeholder {
    height: 45px; /* 固定元素高度 */
    width: 100%;
}

.friends-list {
    clear: both;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 12px 0;
    margin: 0 8px 0 8px;
    border-top: 1px solid #3f4147;

    &:hover {
        background-color: #393c41;
        cursor: pointer;
        border-radius: 10px;

        .friends-more {
            span {
                background-color: #1e1f22;
            }
        }

        .friends-info {
            .friends-name {
                p {
                    display: block;
                }
            }
        }
    }

    .friends-info {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 35px;
        width: 390px;
        position: relative;

        .friends-name {
            display: flex;
            justify-content: flex-start;
            font-size: 14px;
            font-weight: bold;
            color: #f2f3f5;

            p {
                display: none;
                font-weight: unset;
                color: #b5bac1;
                font-size: 12px;
            }
        }

        .friends-status {
            display: flex;
            font-size: 12px;
            color: #b5bac1;
        }

        //登录状态定位
        :deep(.friendStatus) {
            position: absolute;
            left: -24px;
            top: 22px;
        }
    }

    .friends-avatar {
        width: 460px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        .avatar {
            width: 35px;
            height: 35px;
        }
    }

    .friends-more {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100px;

        span {
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            margin: 0 5px;
            cursor: pointer;
            color: #b5bac1;
            font-size: 18px;
            background-color: #2b2d31;
        }
    }
}

.title-x4dI75 {
    padding: 25px 0 15px 0;
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
    position: absolute;
    width: 100%;
    background-color: #313338;
    text-align: left;
}

.search-box {
    background-color: #313338;

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
        right: 10px;
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

.deleteFriends {
    .span-hover1:hover {
        color: #f23f42;
    }
}

.addFriends {
    .span-hover2:hover {
        color: #23a559;
    }
}
</style>

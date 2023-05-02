<!--
鼠标悬停编辑组件
功能拆分
1. 鼠标悬停显示编辑按钮
2. 点击编辑按钮，显示输入框，编辑按钮隐藏且其他列表的编辑按钮点击后关闭当前输入框打开新的输入框，编辑时输入框中的内容为当前内容，原内容隐藏
3. 输入框内按ESC键取消编辑，按回车键保存编辑内容，按esc后还原原内容；按回车后保存内容，输入框隐藏，显示编辑按钮，显示新内容并触发父组件的保存事件
-->
<template>
    <div class="hover-edit-wrapper">
        <div class="hover-edit-wrapper-content" v-if="!showInput">
            <slot></slot>
            <el-tooltip effect="dark" content="编辑" placement="top" :hide-after="0" :open-delay="50">
                <el-container class="hover-edit-wrapper-content-edit">
                    <el-icon @click="edit" v-if="props.display && props.mouseenter && props.item?.isShow"
                        ><i class="fa-solid fa-pencil"></i>
                    </el-icon>
                </el-container>
            </el-tooltip>
            <p class="is-edit" v-if="props.item?.isEdit">(已编辑)</p>
        </div>
        <div class="input-container" v-if="showInput">
            <textarea class="edit-input" type="text" v-model="inputValue" />
            <div class="keyboard-tips">
                <span class="edit-input-key" @keydown.esc.stop="showInput = false" @click="showInput = false">取消</span
                ><span class="edit-input-key" @keydown.enter="save" @click="save">保存</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { IChatRecordMessageResponse } from '@/api/chat';
import { defineComponent, defineProps, ref } from 'vue';

// 是否显示输入框
const showInput = ref<boolean>(false);
// 输入框内容为slot内容
const inputValue = ref<string>('');
// 是否显示编辑按钮
const show = ref(false);

defineComponent({
    name: 'HoverEdit'
});
const props = defineProps({
    display: {
        type   : Boolean,
        default: false
    },
    mouseenter: {
        type   : Boolean,
        default: false
    },
    mouseleave: {
        type   : Boolean,
        default: true
    },
    item: {
        type   : Object as () => IChatRecordMessageResponse,
        default: null
    }
});

// 点击编辑按钮,显示输入框，原内容隐藏
const edit = () => {
    // 将新的内容赋值给输入框
    inputValue.value = props.item?.content;
    showInput.value = true;
};
// 保存
const save = () => {
    showInput.value = false;
    // 将新的内容赋值给slot
    // eslint-disable-next-line vue/no-mutating-props
    props.item.content = inputValue.value;
    console.log('保存', props.item);
    // 为当前的item添加属性是否编辑过
    // eslint-disable-next-line vue/no-mutating-props
    props.item.isEdit = true;
    console.log('保存', props.item);
};
</script>

<style lang="scss" scoped>
.hover-edit-wrapper {
    .input-container {
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        align-items: flex-start;

        .keyboard-tips {
            font-size: 12px;
            color: #999;
            margin-right: 15px;

            .edit-input-key {
                color: #409eff;
                margin: 0 5px;
                cursor: pointer;

                &:hover {
                    color: #66b1ff;
                }
            }
        }
    }

    //根据文字长度自动换行与高度
    .edit-input {
        width: 100%;
        height: auto;
        min-height: 100px;
        resize: none;
        border: none;
        outline: none;
        background-color: transparent;
        padding: 0;
        font-size: 14px;
        line-height: 20px;
        word-break: break-all;
        word-wrap: break-word;
        overflow: auto;
        white-space: pre-wrap;
        margin-bottom: 15px;
        //    滚动条
        &::-webkit-scrollbar {
            width: 5px;
            height: 5px;
        }

        &::-webkit-scrollbar-thumb {
            border-radius: 5px;
            background-color: #ccc;
        }

        &::-webkit-scrollbar-track {
            border-radius: 5px;
            background-color: #fff;
        }
    }

    .hover-edit-wrapper-content {
        .hover-edit-wrapper-content-edit {
            display: inline;
        }

        .fa-pencil {
            font-size: 12px;
            cursor: pointer;
            margin-left: 15px;
            padding: 1px;

            &:hover {
                color: #999;
            }
        }
    }
    .is-edit {
        color: #999;
        font-size: 12px;
    }
}
</style>

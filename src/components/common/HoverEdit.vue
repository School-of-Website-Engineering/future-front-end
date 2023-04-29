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
            <el-icon @click="edit" v-if="props.mouseenter && props.display"><i class="fa-solid fa-pencil"></i></el-icon>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineComponent, defineProps, ref, watch } from 'vue';

// 是否显示输入框
const showInput = ref<boolean>(false);
// 输入框内容
const inputValue = ref<string>('');
const show = ref(false);

defineComponent({
    name: 'HoverEdit'
});
// display: 是否显示编辑按钮,默认为false
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
    }
});

// 点击编辑按钮
const edit = () => {
    showInput.value = true;
};
</script>

<style lang="scss" scoped></style>

<template>
    <div v-if="display">
        <div class="hover-edit-wrapper" @mouseenter="showEdit = true" @mouseleave="showEdit = false">
            <div class="content" ref="content">
                <slot></slot>
            </div>
            <el-button class="edit-button" v-if="!isInputActive && showEdit" @click="editContent">
                <el-icon>
                    <i class="fa-solid fa-pencil"></i>
                </el-icon>
            </el-button>
            <div class="input-box" v-show="showInput">
                <textarea
                    ref="textInput"
                    :value="inputValue"
                    @keydown.enter.prevent="saveContent"
                    @keydown.esc="cancelEdit"
                ></textarea>
                <button class="clear-btn" @click="clearInput">清空</button>
                <div class="tips">按ESC键取消 • 回车键保存</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted, ref, Ref } from 'vue';

export default defineComponent({
    name : 'HoverEdit',
    props: {
        display: {
            type   : Boolean,
            default: true
        }
    },
    setup(props, { emit, slots }) {
        const showEdit: Ref<boolean> = ref(false);
        const showInput: Ref<boolean> = ref(false);
        const inputValue: Ref<string> = ref('');
        const refContent: Ref<HTMLDivElement | null> = ref(null);
        const refTextInput: Ref<HTMLTextAreaElement | null> = ref(null);
        const isInputActive: Ref<boolean> = ref(false);

        onMounted(() => {
            if (refTextInput.value !== null) {
                refTextInput.value.focus();
            }
        });

        const editContent = (): void => {
            showEdit.value = false;
            showInput.value = true;
            // inputValue.value = slots.default()[0].children.trim();
            // 解决TS2531: Object is possibly 'null'.
            if (refContent.value !== null) {
                inputValue.value = refContent.value.innerText.trim();
            }
            nextTick(() => {
                if (refContent.value !== null && refTextInput.value !== null) {
                    refContent.value.replaceWith(refTextInput.value);
                    refTextInput.value.focus();
                }
            });
            emit('onEdit');
            isInputActive.value = true;
        };

        const saveContent = (): void => {
            // const newContent: string = refTextInput.value !== null ? refTextInput.value.trim() : "";
            // 解决TS2339: Property 'trim' does not exist on type 'HTMLTextAreaElement'.
            const newContent: string = refTextInput.value !== null ? refTextInput.value.value.trim() : '';
            if (newContent !== '') {
                inputValue.value = newContent;
                showInput.value = false;
                nextTick(() => {
                    if (refTextInput.value !== null && refTextInput.value.parentNode !== null) {
                        refTextInput.value.parentNode.replaceChild(refContent.value!, refTextInput.value);
                    }
                });
                emit('onSave', newContent);
                isInputActive.value = false;
            }
        };

        const cancelEdit = (): void => {
            showInput.value = false;
            if (refContent.value !== null && refTextInput.value !== null) {
                refTextInput.value.replaceWith(refContent.value);
            }
            isInputActive.value = false;
        };

        const clearInput = (): void => {
            inputValue.value = '';
        };

        return {
            showEdit,
            showInput,
            inputValue,
            refContent,
            refTextInput,
            isInputActive,
            editContent,
            saveContent,
            cancelEdit,
            clearInput
        };
    }
});
</script>

<style lang="scss" scoped>
.hover-edit-wrapper {
    position: relative;
}

.edit-button {
    transition: all 0.3s;
    position: absolute;
    top: -32.2px;
    right: 0;
    background-color: #383a40;
    padding: 5px 10px;
    font-size: 15px;
    cursor: pointer;
    color: #b5bac1;
    box-shadow: 0 0 1px 1px #606266;

    &:hover {
        background-color: #606266;
        color: #fff;
    }
}

.input-box {
    margin-top: -1px;
    width: 100%;
    box-sizing: border-box;
}

.input-box textarea {
    width: 100%;
    //超出部分高度自适应
    height: auto;

    border: none;
    outline: none;
    resize: none;
    font-size: 14px;
    padding: 8px 5px;
    margin-bottom: 15px;
    box-sizing: border-box;
    background-color: #383a40;
    color: #d1dee1;
}

.tips {
    font-size: 12px;
    color: #d1d4d7;
    text-align: right;
    position: absolute;
    bottom: 0;
    left: 0;
}

.clear-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: transparent;
    border: none;
    padding: 5px;
    cursor: pointer;
    font-size: 12px;
    color: #d1d4d7;
    outline: none;
}
</style>

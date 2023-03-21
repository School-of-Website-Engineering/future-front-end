<template>
    <el-container>
        <el-header class="main-box-right-header1">
            <!-- Message Box 消息弹出框 -->
            <el-button class="search-btn" text @click="dialogTableVisible = true">寻找或开始新的对话 </el-button>
            <el-dialog v-model="dialogTableVisible" title="Shipping address">
                <el-table :data="gridData">
                    <el-table-column property="date" label="Date" width="150" />
                    <el-table-column property="name" label="Name" width="200" />
                    <el-table-column property="address" label="Address" />
                </el-table>
            </el-dialog>
        </el-header>
        <el-main class="main-box-right-main1">
            <el-footer>Footer</el-footer>
        </el-main>
    </el-container>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

const dialogTableVisible = ref(false);

const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
});

const gridData = [
    {
        date: '2016-05-02',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District',
    },
    {
        date: '2016-05-04',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District',
    },
    {
        date: '2016-05-01',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District',
    },
    {
        date: '2016-05-03',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District',
    },
];
</script>

<style lang="scss" scoped>
.main-box-right-header1 {
    // 居中
    display: flex;
    justify-content: center;
    align-items: center;

    .search-btn {
        width: 100%;
        height: 28px;
        overflow: hidden;
        border-radius: 4px;
        -webkit-box-shadow: none;
        box-shadow: none;
        background-color: #1e1f22;
        color: #949b98;
        text-align: left;
        text-overflow: ellipsis;
        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
        white-space: nowrap;
        // hover时的样式背景色和颜色相反
        &:hover {
            background-color: #949b98;
            color: #1e1f22;
        }
    }
}

.main-box-right-header1,
.main-box-right-header2 {
    height: 50px;

    &.main-box-right-header1 {
        background-color: #2b2d31;
        border-bottom: solid 1px #1f2123;
    }

    &.main-box-right-header2 {
        background-color: #313338;
        border-bottom: solid 1px #2c2e33;
    }
}

.main-box-right-main1,
.main-box-right-main2 {
    height: 100%;
    padding: unset;

    &.main-box-right-main1 {
        background-color: #2b2d31;
        //将盒子的内容放在底部
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    &.main-box-right-main2 {
    }
}

.el-header,
.el-footer {
    background-color: #b3c0d1;
    color: #616161;
    text-align: center;
}
</style>

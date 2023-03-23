<template>
    <!--频道侧边栏,菜单-->
    <el-aside width="90px" class="main-aside">
        <el-menu :collapse="isCollapse" router class="el-menu-vertical-demo">
            <el-menu-item index="/message" :class="{ 'is-active': $route.path === '/main/message' }">
                <img
                    class="channel-img"
                    src="https://cdn.discordapp.com/icons/464395429392678912/401026c51da58472a16c650ee263701d.webp?size=160"
                />
                <template #title>sdcfsdfsdf</template>
            </el-menu-item>
            <div class="listItem-3SmSlK">
                <div class="guildSeparator-a4uisj"></div>
            </div>
            <el-menu-item
                v-for="item in asideSidebarList"
                :key="item.id"
                :index="'/channels/' + item.id"
                :class="{ 'is-active': $route.path === '/channels/' + item.id }"
                @click="() => $router.push('/channels/' + item.id)"
            >
                <el-badge :max="99" :value="item.count" class="item-message"></el-badge>
                <el-avatar class="channel-img" :size="50" :src="item.img" @error="errorHandler"> </el-avatar>
                <template #title>
                    <span>{{ item.name }}</span>
                </template>
            </el-menu-item>
            <el-menu-item index="1" class="add-icon">
                <el-icon>
                    <Plus class="icon" />
                </el-icon>
                <template #title>
                    <span>创建组</span>
                </template>
            </el-menu-item>
            <el-menu-item index="2" class="add-icon">
                <el-icon>
                    <Compass class="icon" />
                </el-icon>
                <template #title>
                    <span>探索公共组</span>
                </template>
            </el-menu-item>
            <div class="listItem-3SmSlK">
                <div class="guildSeparator-a4uisj"></div>
            </div>
            <el-menu-item index="3" class="add-icon">
                <el-icon>
                    <Download class="icon" />
                </el-icon>
                <template #title>
                    <span>下载App</span>
                </template>
            </el-menu-item>
        </el-menu>
    </el-aside>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import AsideLPrivateService, { IAsideSidebarList } from '@/api/aside';
import { useRouter } from 'vue-router';
const errorHandler = () => true;
const isCollapse = ref(true);
const router = useRouter();
// 侧边栏频道列表数据
const asideSidebarList = reactive<IAsideSidebarList[]>([]);
onMounted(() => {
    getChannelList();
    //     打印当前路由路径
    console.log(router.currentRoute.value.path);
});

/**
 * 获取频道列表
 * @async
 * @function
 * @returns {Promise<void>}
 */
const getChannelList = async() => {
    const res = await AsideLPrivateService.getAsideSidebarList();
    asideSidebarList.push(...(res.data as any));
    console.log(asideSidebarList);
};
</script>

<style lang="scss" scoped>
// 定义左侧边栏宽度变量
$sidebar-width: 80px;
.main-aside {
    padding-top: 8px;
    width: $sidebar-width;

    .el-menu {
        //透明背景色
        background-color: transparent;
        border-right: none;
        width: $sidebar-width;
    }

    .is-active {
        &::before {
            top: 6px !important;
            bottom: 6px !important;
            opacity: 1 !important;
        }

        .el-icon {
            border-radius: 35% !important;
            color: #fff !important;
        }

        //    如果含有add-icon类名，就显示背景色为#fff
        & .el-icon {
            background-color: #fff !important;
            color: #666 !important;
        }
    }

    .el-menu-item {
        display: unset;
        width: $sidebar-width;
        text-align: center;
        margin-bottom: 10px;
        padding: unset;

        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 20px;
            bottom: 20px;
            width: 4px;
            background-color: #fff;
            border-radius: 0 4px 4px 0; /* 圆角在右侧 */
            transition: all 0.3s ease-out; /* 缓动效果 */
            opacity: 0.5;
        }

        //    最后三个元素不显示:before
        &:nth-last-child(-n + 4) {
            &::before {
                opacity: 0;
            }

            &:hover {
                .el-icon {
                    border-radius: 35% !important;
                    color: #fff !important;
                }

                //    如果含有add-icon类名，就显示背景色为#fff
                & .el-icon {
                    background-color: #fff !important;
                    color: #666 !important;
                }
            }
        }

        // 鼠标移入后左侧出现一个小竖条，从左往右缓入
        &:hover {
            &::before {
                content: '';
                position: absolute;
                left: 0;
                top: 6px;
                bottom: 6px;
                width: 4px;
                background-color: #fff;
                border-radius: 0 4px 4px 0; /* 圆角在右侧 */
                transition: all 0.3s ease-out; /* 缓动效果 */
                opacity: 1;
            }

            .el-icon,
            .channel-img {
                border-radius: 35% !important;
            }

            background-color: transparent;
        }

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .channel-img {
            width: 50px;
            height: 50px;
            //    圆角
            border-radius: 50%;
            background-color: #313338;
            transition: all 0.3s;
        }

        //    只给第一个元素添加background-image
        &:first-child {
            .channel-img {
                border-radius: unset;
            }
        }

        :deep(.el-menu-tooltip__trigger) {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            padding: unset;
        }
    }
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: $sidebar-width;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
}

.el-menu-vertical-demo {
    //右下角消息数量
    .item-message {
        position: absolute;
        bottom: 0;
        right: 3px;
        margin-top: 0;
        margin-right: 0;
        padding: 0 3px;
        height: 100%;
        font-size: 12px;
        border-radius: 50%;
        color: #fff;
        z-index: 9;
        //去除白色边框
        :deep(.el-badge__content--danger) {
            border: none;
        }
    }

    .listItem-3SmSlK {
        position: relative;
        margin: 0 0 8px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;

        .guildSeparator-a4uisj {
            height: 2px;
            width: 42px;
            border-radius: 1px;
            background-color: #35363c;
        }
    }

    .add-icon {
        width: 80px;

        .el-icon {
            width: 50px;
            height: 50px;
            background-color: #313338;
            border-radius: 50%;
            // 控制图标的圆角缓动
            transition: all 0.3s;
            color: #666;
        }

        .icon {
            height: 33px;
            width: 33px;
        }
    }
}
</style>

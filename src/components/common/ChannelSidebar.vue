<template>
	<!--频道侧边栏,Collapse 折叠面板-->
	<el-aside width="90px" class="main-aside">
		<el-menu default-active="2" :collapse="isCollapse" class="el-menu-vertical-demo">
			<el-menu-item index="2">
				<img class="channel-img" src="../../assets/vue.svg" />
				<template #title>sdcfsdfsdf</template>
			</el-menu-item>
			<div class="listItem-3SmSlK">
				<div class="guildSeparator-a4uisj"></div>
			</div>
			<el-menu-item index="4">
				<img class="channel-img" src="../../assets/vue.svg" />
				<template #title>
					<span>Navigator One</span>
				</template>
			</el-menu-item>
		</el-menu>
	</el-aside>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Location } from '@element-plus/icons-vue';

const isCollapse = ref(true);
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

	.el-menu-item {
		display: unset;
		width: $sidebar-width;
		text-align: center;
		margin-bottom: 10px;
		padding: unset;
		// 重置鼠标移入样式
		&:hover {
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
			border: 1px solid #fff;
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
}
</style>

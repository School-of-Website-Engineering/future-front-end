<template>
	<!--频道侧边栏,Collapse 折叠面板-->
	<el-aside width="90px" class="main-aside">
		<el-menu default-active="2" class="el-menu-vertical-demo">
			<el-menu-item index="2">
				<img class="channel-img" src="../../assets/vue.svg" />
				<template #title>sdcfsdfsdf</template>
			</el-menu-item>
			<el-menu-item index="4">
				<template #title>Navigator Four</template>
			</el-menu-item>
		</el-menu>
	</el-aside>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.main-aside {
	.el-menu {
		//透明背景色
		background-color: transparent;
		border-right: none;
		width: 90px;
	}
	.el-menu-item {
		display: unset;
		width: 90px;
		text-align: center;
	}
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
	width: 90px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	.channel-img {
		width: 40px;
		height: 40px;
	}
}
.el-menu-vertical-demo {
	.el-menu-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.channel-img {
			width: 40px;
			height: 40px;
		}
	}
}
</style>

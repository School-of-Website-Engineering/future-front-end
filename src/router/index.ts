import { createRouter, createWebHashHistory } from 'vue-router';
import { routes } from './routes';

const router = createRouter({
	// 使用 `createWebHistory()` 创建路由历史时，如果没有传递 `base` 参数，则会默认使用 `/` 作为基础路径
	history: createWebHashHistory('/future-front-end/'),
	routes,
	// scrollBehavior是一个函数，接收to和from两个路由对象作为参数,作用是在路由切换时，控制页面滚动行为
	scrollBehavior: () => ({ left: 0, top: 0 }),
});
// 路由守卫
router.beforeEach((to, from, next) => {
	// 如果用户访问/#/main和/#/message就跳转到/#/main/message，
	// 因为/#/main/message是/#/main的子路由，所以/#/main/message会渲染到/#/main的<router-view>中
	if (to.path === '/main' || to.path === '/message') {
		next('/main/message');
	}
	next();
});
export default router;

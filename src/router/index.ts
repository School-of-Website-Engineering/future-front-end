import { createRouter, createWebHashHistory } from 'vue-router';
import { routes } from './routes';

const router = createRouter({
    // 使用 `createWebHistory()` 创建路由历史时，如果没有传递 `base` 参数，则会默认使用 `/` 作为基础路径
    // history: createWebHashHistory("/future-front-end/"),
    // 当前环境的VITE_PUBLIC_PATH变量，会在打包时自动替换为当前环境的路径
    history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
    routes,
    // scrollBehavior是一个函数，接收to和from两个路由对象作为参数,作用是在路由切换时，控制页面滚动行为
    scrollBehavior: () => ({ left: 0, top: 0 }),
});
// 路由守卫
router.beforeEach((to, from, next) => {
    // 如果路径为/#/main或/#/message,则跳转到/#/main/message
    if (to.path === '/main' || to.path === '/message') {
        next('/main/message');
    } else {
        next();
    }
});
export default router;

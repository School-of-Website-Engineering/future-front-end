import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
import { routes } from './routes';

const router = createRouter({
    // 使用 `createWebHistory()` 创建路由历史时，如果没有传递 `base` 参数，则会默认使用 `/` 作为基础路径
    history       : createWebHashHistory(process.env.BASE_URL),
    routes        : routes as Array<RouteRecordRaw>,
    // scrollBehavior是一个函数，接收to和from两个路由对象作为参数,作用是在路由切换时，控制页面滚动行为
    scrollBehavior: () => ({ left: 0, top: 0 })
});
export default router;

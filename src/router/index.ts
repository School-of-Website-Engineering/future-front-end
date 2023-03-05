import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
const routes: Array<RouteRecordRaw> = [
    {
        path     : '/',
        name     : 'login',
        component: () => import('../views/Login/index.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;

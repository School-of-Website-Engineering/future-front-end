// 路由模块
export const routes: { path: string; component: () => Promise<unknown>; name: string }[] = [
    {
        path     : '/',
        name     : 'login',
        component: () => import('../views/Login/index.vue')
    }
];

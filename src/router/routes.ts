import { RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
    {
        path     : '/',
        name     : 'login',
        component: () => import('../views/Login/index.vue')
    }
];

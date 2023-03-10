// 路由模块
import { RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
    // 重定向
    // {
    //     path    : '/',
    //     redirect: '/login'
    // },
    // 登录
    // 登录
    {
        path     : '/login',
        name     : 'login',
        component: () => import('../views/Login/index.vue')
    },
    {
        // 主页
        path     : '/home',
        name     : 'home',
        component: () => import('../components/Home/index.vue'),
        children : [
            // 首页
            {
                path     : '/index',
                name     : 'index',
                component: () => import('../components/Home/index.vue')
            }
        ]
    },
    //     404
    {
        path     : '/:pathMatch(.*)*',
        name     : 'not-found',
        component: () => import('../components/NotFound.vue')
    }
];

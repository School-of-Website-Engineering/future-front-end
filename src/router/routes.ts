// 路由模块
import { RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
    // 重定向
    {
        path    : '/',
        redirect: '/home'
    },
    {
        // 首页
        path     : '/home',
        name     : 'home',
        component: () => import('../views/Home/index.vue')
    },
    // 主页
    {
        path     : '/main',
        name     : 'main',
        component: () => import('../views/Main/index.vue'),
        children : [
            {
                // 私信
                path     : '/main/message',
                name     : 'message',
                component: () => import('../views/ChannelMessage/index.vue')
            },
            //频道服务器
            {
                path     : '/channels/:id',
                name     : 'channels',
                component: () => import('../views/Channels/index.vue'),
                props    : true
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

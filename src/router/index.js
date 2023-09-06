import { createRouter, createWebHistory } from 'vue-router';

import outer from './modules/outer';

// 进度条
import 'nprogress/nprogress.css';
import NProgress from 'nprogress';
NProgress.configure({
    easing: 'ease', // 动画方式
    speed: 1000, // 递增进度条的速度
    showSpinner: true, // 是否显示加载ico
    trickleSpeed: 200, // 自动递增间隔
    minimum: 0.3, // 更改启动时使用的最小百分比
    parent: 'body', //指定进度条的父容器
});

const routes = [
    // layout
    {
        path: '/',
        name: 'Layout',
        meta: { title: 'layout' },
        redirect: '/home',
        component: () => import('@/layout/layout.vue'),
        children: [
            // home
            {
                path: '/home',
                name: 'Home',
                meta: { title: 'Home' },
                component: () => import('@/views/home/home.vue'),
            },

            // 模块化 其他
            outer,
        ],
    },
    // login
    {
        path: '/login',
        name: 'Login',
        meta: { title: 'Login' },
        component: () => import('@/views/login/login.vue'),
    },
    {
        path: '/reg',
        name: 'Reg',
        meta: { title: 'Reg' },
        component: () => import('@/views/reg/reg.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
});

router.afterEach(() => {
    NProgress.done();
});

export default router;

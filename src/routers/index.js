import {createWebHistory, createRouter} from 'vue-router';
import DashBoard from '@/views/DashBoard';
import WatchTest from '@/views/WatchTest';
import WebCamTest from '@/views/WebCamTest';
import ErrorPage from '@/views/ErrorPage';

/**
 * vue2 문서를 참고하면 안됨.
 * vue3 router는 사용법이 다름.
 */
const routes = [
    {
        path: '/',
        name: 'DashBoard',
        component: DashBoard
    },
    {
        path: '/watch',
        name: 'WatchTest',
        component: WatchTest
    },
    {
        path: '/web-cam',
        name: 'WebCamTest',
        component: WebCamTest,
    },
    {
        path: '/404',
        name: 'ErrorPage',
        component: ErrorPage
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: "/404",
    },
];

const router = new createRouter({
    history: createWebHistory(), // browser history mode 사용
    routes,
});

export default router;

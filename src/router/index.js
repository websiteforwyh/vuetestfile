import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/header/HomeView.vue';
import MysqlView from '../views/side/MysqlView.vue';

const routes = [{
        path: '/home',
        name: 'home',
        component: HomeView,
        children: [{
                path: 'mysql',
                component: MysqlView,
            },
            {
                path: 'vue',
                component: () =>
                    import ('../views/side/VueView.vue'),
            },
        ],
    },
    // 重定向主页路由/home
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import ('../views/header/AboutView.vue'),
    },
    {
        path: '/umusic',
        name: 'umusic',
        component: () =>
            import ('../views/header/UMusic.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
});

export default router;
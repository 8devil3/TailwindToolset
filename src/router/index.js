import { createRouter, createWebHistory } from 'vue-router';
import Index from '../views/Index.vue';
import Flex from '../views/Flex.vue';
import Grid from '../views/Grid.vue';
import About from '../views/About.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
        path: '/',
        name: 'index',
        component: Index
        },
        {
            path: '/flex',
            name: 'flex',
            component: Flex
        },
        {
            path: '/grid',
            name: 'grid',
            component: Grid
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
    ]
});

export default router;

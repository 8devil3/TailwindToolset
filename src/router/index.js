import { createRouter, createWebHistory } from 'vue-router';
import Index from '../views/Index.vue';
import Flex from '../views/Flex.vue';
import Grid from '../views/Grid.vue';
import OrangeVue from '../views/OrangeVue.vue';
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
            path: '/orangevue',
            name: 'orangevue',
            component: OrangeVue
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },




        // {
        //   path: '/about',
        //   name: 'about',
        //   // route level code-splitting
        //   // this generates a separate chunk (About.[hash].js) for this route
        //   // which is lazy-loaded when the route is visited.
        //   component: () => import('../views/AboutView.vue')
        // }
    ]
});

export default router;

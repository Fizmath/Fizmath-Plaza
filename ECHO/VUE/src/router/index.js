import AppLayout from '@/layout/AppLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    name: 'dashboard',
                    component: () => import('@/views/Presentation.vue')
                },
                {
                    path: '/pages/plazaadmin',
                    name: 'Plaza Admin',
                    component: () => import('@/views/pages/M_admin.vue')
                },
                {
                    path: '/pages/orderadmin',
                    name: 'OrderAdmin',
                    component: () => import('@/views/pages/O_admin.vue')
                },
                {
                    path: '/pages/plazaadmin/:dynamic/products',
                    name: 'StoreProducts',
                    component: () => import('@/views/pages/Products.vue')
                },
                {
                    path: '/pages/shopping',
                    name: 'Shopping',
                    component: () => import('@/views/pages/ShopMall.vue')
                },
                {
                    path: '/pages/checkout',
                    name: 'Checkout',
                    component: () => import('@/views/pages/Checkout.vue')
                },
            ]
        },
    ]
});

export default router;

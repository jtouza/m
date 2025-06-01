import {createWebHistory, createRouter} from 'vue-router';
//import {useAuthStore} from '@/store/useAuthStore.ts';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            // path:'reviews',
            component: () => import('@/layouts/DefaultLayout.vue'),
            children: [
                {
                    path: '/',
                    // path:':id',
                    name: 'reviews',
                    component: () => import('@/pages/reviews/Show.vue')
                },
            ]
        },
    ]
});

// Middleware auth
router.beforeEach((_to, _from, next) => {

   // const authStore = useAuthStore();
   // if (to.meta.requiresAuth && !authStore.isAuthenticated()) {
   //     console.log('Access denied. Redirecting to login page.');
   //     return next("/login");
   // }
    next();
});

export default router;

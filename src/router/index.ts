import { createRouter, createWebHistory } from 'vue-router';
import ProductsList from '../components/ProductsList.vue';

interface RouteRecord {
    path: string;
    component: any;
}

const routes: RouteRecord[] = [
    {
        path: '/products',
        component: ProductsList,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
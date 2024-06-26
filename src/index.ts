import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import { VueQueryPlugin } from '@tanstack/vue-query';

createApp(App)
    .use(VueQueryPlugin)
    .use(router).mount('#app');
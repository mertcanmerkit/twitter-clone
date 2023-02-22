import { createApp } from 'vue';
import store from './store';
import App from './App.vue';
import router from './router/index.js';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import LeftEmptyLayout from '@/layouts/LeftEmptyLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';

const app = createApp(App);
app.component('DefaultLayout', DefaultLayout);
app.component('LeftEmptyLayout', LeftEmptyLayout);
app.component('AuthLayout', AuthLayout);
app.use(store);
app.use(router);
app.mount('#app');

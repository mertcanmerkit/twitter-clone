import { createApp } from 'vue';
import store from './store';
import App from './App.vue';
import router from './router/index.js';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import LeftEmptyLayout from '@/layouts/LeftEmptyLayout.vue';
import ModalLayout from '@/layouts/ModalLayout.vue';

const app = createApp(App);
app.component('DefaultLayout', DefaultLayout);
app.component('LeftEmptyLayout', LeftEmptyLayout);
app.component('ModalLayout', ModalLayout);
app.use(store);
app.use(router);
app.mount('#app');

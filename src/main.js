import { createApp } from 'vue';
import store from './store';
import App from './App.vue';
import router from './router/index.js';

createApp(App).use(store).use(router).mount('#app');

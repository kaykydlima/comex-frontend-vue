import { createApp } from 'vue';
import App from './App.vue';
import '@/assets/base.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import router from './router';

createApp(App).use(router).mount('#app');

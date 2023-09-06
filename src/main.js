import { createApp } from 'vue';
import './style.css';
import './reset.css';
import App from './App.vue';
const app = createApp(App);

// router
import router from './router';
app.use(router);

// pinia
import { createPinia } from 'pinia';
app.use(createPinia());

app.mount('#app');

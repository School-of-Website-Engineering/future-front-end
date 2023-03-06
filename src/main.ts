import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import { cloneDeep } from 'lodash-es';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import router from './router';
import './assets/scss/global.scss';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(App);
const pinia = createPinia();
const obj = cloneDeep({});

// 动态获取 base 配置选项
const base = import.meta.env.BASE_URL;
console.log('Base URL:', base);

pinia.use(piniaPluginPersistedstate);

app.use(ElementPlus);
app.use(pinia);
app.use(router);
app.mount('#app');

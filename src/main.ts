import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import store from '@/store';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import router from './router';
import './assets/scss/global.scss';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import FriendStatus from './components/common/FriendStatus.vue';
import FriendsDisplay from './views/ChannelMessage/components/common/FriendsDisplay.vue';
import { useRegisterSW } from 'virtual:pwa-register/vue';

const app = createApp(App);
const pinia = createPinia();
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

useRegisterSW();
// 注册FriendStatus
app.component('FriendStatus', FriendStatus);
app.component('FriendsDisplay', FriendsDisplay);
// piniaPluginPersistedstate是一个插件，用于持久化pinia的状态
pinia.use(piniaPluginPersistedstate);
app.use(ElementPlus);
app.use(pinia);
app.use(store);
app.use(router);
app.mount('#app');

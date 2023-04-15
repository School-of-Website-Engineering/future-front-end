import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import store from '@/store';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import router from './router';
import './assets/scss/global.scss';
import ElementPlus from 'element-plus';
import locale from 'element-plus/lib/locale/lang/zh-cn';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import FriendStatus from './components/common/FriendStatus.vue';
import FriendsDisplay from './views/ChannelMessage/components/common/FriendsDisplay.vue';
import { useRegisterSW } from 'virtual:pwa-register/vue';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
//要导入的Firebase SDK
import { getAnalytics } from 'firebase/analytics';
import { getPerformance } from 'firebase/performance';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey           : import.meta.env.VITE_API_KEY,
    authDomain       : import.meta.env.VITE_AUTH_DOMAIN,
    projectId        : import.meta.env.VITE_PROJECT_ID,
    storageBucket    : import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId            : import.meta.env.VITE_APP_ID,
    measurementId    : import.meta.env.VITE_MEASUREMENT_ID
};

// 实列化firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const perf = getPerformance(app);

const appx = createApp(App);
const pinia = createPinia();

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    appx.component(key, component);
}
useRegisterSW();
// 注册组件
appx.component('FriendStatus', FriendStatus);
appx.component('FriendsDisplay', FriendsDisplay);
// piniaPluginPersistedstate是一个插件，用于持久化pinia的状态
pinia.use(piniaPluginPersistedstate);
appx.use(pinia);
appx.use(store);
appx.use(router);
appx.use(ElementPlus, { locale });
appx.mount('#app');

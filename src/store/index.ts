import { createPinia } from 'pinia';

const pinia = createPinia();

export default pinia;

export * from './modules/friends';
export * from './modules/privateLetter';
export * from './modules/user';

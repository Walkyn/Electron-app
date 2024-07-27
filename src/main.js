import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import router from './router'
// material icons
import 'material-icons/iconfont/material-icons.css';
// primevue icons
import 'primeicons/primeicons.css';

createApp(App)
.use(router)
.use(PrimeVue, {
    theme: {
        preset: Aura
    }
})
// .component('Button', Button)
.mount('#app')






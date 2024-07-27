import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Button from "primevue/button"

createApp(App)
.use(PrimeVue, {
    theme: {
        preset: Aura
    }
})
.component('Button', Button)
.mount('#app')






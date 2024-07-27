import { createRouter, createWebHistory } from 'vue-router'
import LoginVue from './../pages/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginVue
    },
  ]
})

export default router

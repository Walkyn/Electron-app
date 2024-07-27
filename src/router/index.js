import { createRouter, createWebHistory } from 'vue-router'
import LoginVue from './../pages/Login.vue'
import HomeVue from './../pages/admin/Home.vue'
import AdminLayoutVue from './../layouts/admin/AdminLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginVue
    },
    {
      path: '/admin',
      name: 'Admin',
      redirect: { name: 'Home' },
      component: AdminLayoutVue,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: HomeVue
        }
      ]
    },
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/home/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/components/layouts/MainLayout.vue'),
      children: [...Home]
    }
  ]
})

export default router
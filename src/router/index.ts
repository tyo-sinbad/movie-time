import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/home/routes'
import Category from '@/pages/category/routes'
import Detail from '@/pages/detail/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/components/layouts/MainLayout.vue'),
      children: [...Home, ...Category, ...Detail]
    }
  ]
})

export default router

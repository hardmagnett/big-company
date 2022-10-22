import { createRouter, createWebHistory } from 'vue-router'
import employees from '@/router/employees';
import departments from '@/router/departments';
import components from '@/router/components';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('@/views/Dashboard.vue')
    },
    ...employees,
    ...departments,
    ...components,
  ]
})

export default router

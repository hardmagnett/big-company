import employees from '@/app/router/employees';
import departments from '@/app/router/departments';

let routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('@/app/views/Dashboard.vue')
  },
  ...employees,
  ...departments,
]

export default routes

import { createRouter, createWebHistory } from 'vue-router'

import appRoutes from '@/app/router/index.ts';
import aLibraryRoutes from '@/a-library/router/index.ts';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...appRoutes,
    ...aLibraryRoutes
  ]
})

export default router

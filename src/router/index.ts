import { createRouter, createWebHistory } from 'vue-router'
import DashView from '../views/view/Dash.vue';
import DashboardView from '../views/Dashboard.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DashView,
      children: [
        {
        path: 'dashboard',
        alias: '',
        component: DashboardView,
        name: 'dashboard',
        meta: {description: 'Overview of environment'}
        }

      ]
    },
  ]
})

export default router

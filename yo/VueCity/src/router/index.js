import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogInView from '../views/LogInView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'login',
      component: LogInView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: {requiresAuth: true}
    }
  ]
})

export default router

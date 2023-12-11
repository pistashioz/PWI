import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import LogInView from '../views/LogInView.vue';
import AnimalListView from '../views/AnimalListView.vue';
import AnimalView from '../views/AnimalView.vue';
import AboutView from '../views/AboutView.vue';
import PageNotFoundView from '../views/PageNotFoundView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/animals',
      name: 'animals',
      component: AnimalListView,
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'login',
      component: LogInView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'PageNotFound',
      component: PageNotFoundView
    },
    {
      path: '/animals/:id',
      name: 'animal',
      component: AnimalView
    }
  ]
})

export default router

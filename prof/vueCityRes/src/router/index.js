import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import { useUserStore } from '@/stores/users'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: {
        title: 'Home'
      },
      beforeEnter(to, from, next) {
        // Verifica se existe algum utilizador logado, se não tiver, redireciona para o login
        if (!useUserStore().getLoggedInUser) {
          next({
            name: 'Login'
          })
        } else {
          next();
        }
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: 'Login'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // EXTRA: muda o titulo da tab no browser, consoante a rota
  if (to.meta.title) {
    document.title = to.meta.title
  }

  next()
})

export default router

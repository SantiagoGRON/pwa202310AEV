import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ErrorView from '../views/ErrorView.vue';
import LoginView from '../views/LoginView.vue';
import singInView from '../views/singInView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)',
      component: ErrorView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/singIn',
      name: 'singIn',
      component: singInView
    },
  ]
})

export default router

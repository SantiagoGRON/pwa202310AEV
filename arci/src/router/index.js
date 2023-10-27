import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ErrorView from '../views/ErrorView.vue';
import LoginView from '../views/LoginView.vue';
import SingInView from '../views/SingInView.vue';

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
      component: SingInView
    },
  ]
})

export default router

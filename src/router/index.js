import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/home.vue';
import JavaScript from '../views/Languages/Javascript/javascript.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/javascript',
      name: 'javascript',
      component: JavaScript
    }
  ]
})

export default router
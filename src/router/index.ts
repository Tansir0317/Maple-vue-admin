/*
 * @Description:
 * @Version: 1.0
 * @Autor: Tansir
 * @Date: 2023-02-16 12:25:00
 * @LastEditors: Tansir
 * @LastEditTime: 2023-02-17 15:46:54
 */
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/login/index.vue'),
    },
  ],
});

export default router;

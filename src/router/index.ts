/*
 * @Description:
 * @Version: 1.0
 * @Autor: Tansir
 * @Date: 2023-02-16 12:25:00
 * @LastEditors: Tansir
 * @LastEditTime: 2023-03-07 14:59:13
 */
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';
const Layout = () => import('@/layouts/index.vue');

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/redirect',
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      hidden: true,
    },
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: {
          title: 'dashboard',
          icon: 'icon-shouye',
          affix: true,
        },
      },
    ],
  },
  {
    path: '/menu',
    component: Layout,
    redirect: '/menu/menu1',
    name: 'Menu',
    meta: {
      title: 'nested',
      icon: 'icon-huodong-copy',
    },
    children: [
      {
        path: 'menu1',
        name: 'Menu1',
        component: () => import('@/views/menu/menu1/index.vue'),
        redirect: '/menu/menu1/menu1-1',
        meta: {
          title: 'menu1',
        },
        children: [
          {
            path: 'menu1-1',
            name: 'Menu1-1',
            component: () => import('@/views/menu/menu1/menu1-1/index.vue'),
            meta: {
              title: 'menu1-1',
            },
          },
          {
            path: 'menu1-2',
            name: 'Menu1-2',
            component: () => import('@/views/menu/menu1/menu1-2/index.vue'),
            redirect: '/menu/menu1/menu1-2/menu1-2-1',
            meta: {
              title: 'menu1-2',
            },
            children: [
              {
                path: 'menu1-2-1',
                name: 'Menu1-2-1',
                component: () =>
                  import('@/views/menu/menu1/menu1-2/menu1-2-1/index.vue'),
                meta: {
                  title: 'menu1-2-1',
                },
              },
              {
                path: 'menu1-2-2',
                name: 'Menu1-2-2',
                component: () =>
                  import('@/views/menu/menu1/menu1-2/menu1-2-2/index.vue'),
                meta: {
                  title: 'menu1-2-2',
                },
              },
            ],
          },
          {
            path: 'menu1-3',
            name: 'Menu1-3',
            component: () => import('@/views/menu/menu1/menu1-3/index.vue'),
            meta: {
              title: 'menu1-3',
            },
          },
        ],
      },
      {
        path: 'menu2',
        component: () => import('@/views/menu/menu2/index.vue'),
        name: 'Menu2',
        meta: {
          title: 'menu2',
        },
      },
    ],
  },
];

/**
 * 动态路由
 * 用来放置有权限 (Roles 属性) 的路由
 * 必须带有 Name 属性
 */
export const asyncRoutes: RouteRecordRaw[] = [
  {
    path: '/:pathMatch(.*)*', // Must put the 'ErrorPage' route at the end, 必须将 'ErrorPage' 路由放在最后
    redirect: '/404',
    name: 'ErrorPage',
    meta: {
      hidden: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes,
});

export default router;

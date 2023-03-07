/*
 * @Description: permission
 * @Version: 1.0
 * @Autor: Tansir
 * @Date: 2023-02-22 16:15:10
 * @LastEditors: Tansir
 * @LastEditTime: 2023-03-03 08:57:51
 */
import { ref } from 'vue';
// import store from '@/stores';
import { defineStore } from 'pinia';
import { constantRoutes, asyncRoutes } from '@/router';
import type { RouteRecordRaw } from 'vue-router';

const hasPermission = (roles: string[], route: RouteRecordRaw) => {
  if (route.meta && route.meta.roles) {
    return roles.some((role) => {
      if (route.meta?.roles !== undefined) {
        return route.meta.roles?.includes(role);
      } else {
        return false;
      }
    });
  } else {
    return true;
  }
};

const filterAsyncRoutes = (routes: RouteRecordRaw[], roles: string[]) => {
  const res: RouteRecordRaw[] = [];
  routes.forEach((route) => {
    const r = { ...route };
    if (hasPermission(roles, r)) {
      if (r.children) {
        r.children = filterAsyncRoutes(r.children, roles);
      }
      res.push(r);
    }
  });
  return res;
};

export const usePermissionStore = defineStore('permission', () => {
  const routes = ref<RouteRecordRaw[]>([]);
  const dynamicRoutes = ref<RouteRecordRaw[]>([]);

  const setRoutes = (roles: string[]) => {
    let accessedRoutes;
    if (roles.includes('admin')) {
      accessedRoutes = asyncRoutes;
    } else {
      accessedRoutes = filterAsyncRoutes(asyncRoutes, roles);
    }
    routes.value = constantRoutes.concat(accessedRoutes);
    dynamicRoutes.value = accessedRoutes;
  };

  return { routes, dynamicRoutes, setRoutes };
});

/** 在 setup 外使用 */
// export function usePermissionStoreHook() {
//   return usePermissionStore(store);
// }

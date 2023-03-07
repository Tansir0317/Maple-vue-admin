/*
 * @Description:
 * @Version: 1.0
 * @Autor: Tansir
 * @Date: 2023-02-22 16:56:28
 * @LastEditors: Tansir
 * @LastEditTime: 2023-03-03 14:33:31
 */
import router from '@/router';
import { usePermissionStore } from '@/stores/modules/permission';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

router.beforeEach(async (to, _from, next) => {
  NProgress.start();
  const permissionStore = usePermissionStore();
  // 判断该用户是否登录
  permissionStore.setRoutes(['admin']);
  next();
});

router.afterEach(() => {
  NProgress.done();
});

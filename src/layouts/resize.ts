/*
 * @Description: 根绝大小变化重新布局
 * @Version: 1.0
 * @Autor: Tansir
 * @Date: 2023-02-10 10:58:59
 * @LastEditors: Tansir
 * @LastEditTime: 2023-02-22 16:13:06
 */
// refer to Bootstrap's responsive design

import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { DeviceType, useAppStore } from '@/stores/modules/app';

export default function () {
  const WIDTH = 992;
  const currentRoute = useRoute();
  const appStore = useAppStore();
  const device = computed(() => {
    return appStore.device;
  });

  const sidebar = computed(() => {
    return appStore.sidebar;
  });

  const watchRouter = watch(
    () => currentRoute.name,
    () => {
      if (appStore.device === DeviceType.Mobile && appStore.sidebar.opened) {
        appStore.closeSidebar(false);
      }
    }
  );

  const isMobile = () => {
    const rect = document.body.getBoundingClientRect();
    return rect.width - 1 < WIDTH;
  };

  const resizeMounted = () => {
    if (isMobile()) {
      appStore.toggleDevice(DeviceType.Mobile);
      appStore.closeSidebar(true);
    }
  };

  const resizeHandler = () => {
    if (!document.hidden) {
      appStore.toggleDevice(
        isMobile() ? DeviceType.Mobile : DeviceType.Desktop
      );
      if (isMobile()) {
        appStore.closeSidebar(true);
      }
    }
  };

  const addEventListenerOnResize = () => {
    window.addEventListener('resize', resizeHandler);
  };

  const removeEventListenerResize = () => {
    window.removeEventListener('resize', resizeHandler);
  };

  return {
    device,
    sidebar,
    resizeMounted,
    addEventListenerOnResize,
    removeEventListenerResize,
    watchRouter,
  };
}

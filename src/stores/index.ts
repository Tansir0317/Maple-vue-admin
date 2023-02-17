/*
 * @Description: 全局注册
 * @Version: 1.0
 * @Autor: Tansir
 * @Date: 2023-02-17 14:22:03
 * @LastEditors: Tansir
 * @LastEditTime: 2023-02-17 15:46:45
 */
import type { App } from 'vue';
import { createPinia } from 'pinia';
import { useAppStore } from './modules/app';

const store = createPinia();

interface PiniaStoreInterface {
  useAppStore: ReturnType<typeof useAppStore>;
}

export const piniaStore: PiniaStoreInterface = {} as PiniaStoreInterface;

const registerStore = () => {
  piniaStore.useAppStore = useAppStore();
};

export function setupStore(app: App<Element>) {
  app.use(store);
  registerStore();
}

/*
 * @Description: app store
 * @Version: 1.0
 * @Autor: Tansir
 * @Date: 2023-02-17 13:33:48
 * @LastEditors: Tansir
 * @LastEditTime: 2023-03-02 13:29:55
 */
import { defineStore } from 'pinia';
import { getLocale } from '@/locales';
import {
  getSidebarStatus,
  getSize,
  setLanguage,
  setSidebarStatus,
  setSize,
} from '@/utils/cookies';

export enum DeviceType {
  Mobile,
  Desktop,
}

export type sizeType = 'default' | 'small' | 'large';
export interface AppStateInterface {
  device: DeviceType;
  sidebar: {
    opened: boolean;
    withoutAnimation: boolean;
  };
  language: string;
  size: sizeType;
}
export const useAppStore = defineStore('appStore', {
  state: (): AppStateInterface => ({
    device: DeviceType.Desktop,
    sidebar: {
      opened: getSidebarStatus() !== 'closed',
      withoutAnimation: false,
    },
    language: getLocale(),
    size: (getSize() as sizeType) || 'small',
  }),
  getters: {},
  actions: {
    toggleDevice(device: DeviceType) {
      this.device = device;
    },
    toggleSidebar(withoutAnimation: boolean) {
      this.sidebar.opened = !this.sidebar.opened;
      this.sidebar.withoutAnimation = withoutAnimation;
      if (this.sidebar.opened) {
        setSidebarStatus('opened');
      } else {
        setSidebarStatus('closed');
      }
    },
    closeSidebar(withoutAnimation: boolean) {
      this.sidebar.opened = false;
      this.sidebar.withoutAnimation = withoutAnimation;
      setSidebarStatus('closed');
    },
    setLanguageStore(lang: string) {
      this.language = lang;
      setLanguage(lang);
    },
    setSize(size: sizeType) {
      this.size = size;
      setSize(size);
    },
  },
});

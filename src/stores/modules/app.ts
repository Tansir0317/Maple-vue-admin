/*
 * @Description: app store
 * @Version: 1.0
 * @Autor: Tansir
 * @Date: 2023-02-17 13:33:48
 * @LastEditors: Tansir
 * @LastEditTime: 2023-02-17 14:52:41
 */
import { ref } from 'vue';
import { defineStore } from 'pinia';
import { getLocale } from '@/locales';
import { setLanguage } from '@/utils/cookies';

export const useAppStore = defineStore('appStore', () => {
  const language = ref(getLocale());

  function setLanguageStore(value: string) {
    language.value = value;
    setLanguage(value);
  }

  return { language, setLanguageStore };
});

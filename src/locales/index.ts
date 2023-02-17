/*
 * @Description:
 * @Version: 1.0
 * @Autor: Tansir
 * @Date: 2023-02-17 10:03:00
 * @LastEditors: Tansir
 * @LastEditTime: 2023-02-17 11:27:14
 */
import { createI18n } from 'vue-i18n';
import { getLanguage } from '@/utils/cookies';

import elementEnLocale from 'element-plus/lib/locale/lang/en';
import elementZhLocale from 'element-plus/lib/locale/lang/zh-cn';

import enLocale from './en';
import zhLocale from './zh-cn';

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale,
  },
  'zh-cn': {
    ...zhLocale,
    ...elementZhLocale,
  },
};

export const getLocale = () => {
  const cookieLanguage = getLanguage();
  if (cookieLanguage) {
    return cookieLanguage;
  }
  const language = navigator.language.toLowerCase();
  const locales = Object.keys(messages);
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale;
    }
  }

  // Default language is english
  return 'zh';
};

const i18n = createI18n({
  locale: getLocale(),
  legacy: false,
  messages: messages,
});

export default i18n;

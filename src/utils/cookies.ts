/*
 * @Description:
 * @Version: 1.0
 * @Autor: Tansir
 * @Date: 2023-02-22 10:53:52
 * @LastEditors: Tansir
 * @LastEditTime: 2023-02-28 23:12:50
 */
/*
 * @Description: Cookies
 * @Version: 1.0
 * @Autor: Tansir
 * @Date: 2023-02-17 10:39:56
 * @LastEditors: Tansir
 * @LastEditTime: 2023-02-17 15:46:25
 */
import Keys from '@/constant/keys';
import Cookies from 'js-cookie';

export const getLanguage = () => Cookies.get(Keys.languageKey);
export const setLanguage = (language: string) =>
  Cookies.set(Keys.languageKey, language);

export const getSidebarStatus = () => Cookies.get(Keys.sidebarStatusKey);
export const setSidebarStatus = (sidebarStatus: string) =>
  Cookies.set(Keys.sidebarStatusKey, sidebarStatus);

export const getSize = () => Cookies.get(Keys.sizeKey);
export const setSize = (size: string) => Cookies.set(Keys.sizeKey, size);

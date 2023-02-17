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
export const setLanguage = (language: string) => Cookies.set(Keys.languageKey, language);

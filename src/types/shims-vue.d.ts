/*
 * @Description:
 * @Version: 1.0
 * @Autor: Tansir
 * @Date: 2023-02-22 10:53:52
 * @LastEditors: Tansir
 * @LastEditTime: 2023-02-22 16:38:41
 */
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module 'element-plus/dist/locale/zh-cn';
declare module 'element-plus/dist/locale/en';

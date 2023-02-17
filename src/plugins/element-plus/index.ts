/*
 * @Description: element-plus完整引入
 * @Version: 1.0
 * @Autor: Tansir
 * @Date: 2023-02-16 13:40:31
 * @LastEditors: Tansir
 * @LastEditTime: 2023-02-16 13:43:21
 */
import type { App } from 'vue';
import ElementPlus from 'element-plus';

export function loadElementPlus(app: App) {
  app.use(ElementPlus);
}

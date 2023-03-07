/*
 * @Description:
 * @Version: 1.0
 * @Autor: Tansir
 * @Date: 2023-02-22 10:53:52
 * @LastEditors: Tansir
 * @LastEditTime: 2023-03-06 09:26:17
 */
/*
 * @Description: element-plus完整引入
 * @Version: 1.0
 * @Autor: Tansir
 * @Date: 2023-02-16 13:40:31
 * @LastEditors: Tansir
 * @LastEditTime: 2023-03-03 16:36:20
 */
import type { App } from 'vue';
import ElementPlus from 'element-plus';
import { useAppStore } from '@/stores/modules/app';
export function loadElementPlus(app: App) {
  app.use(ElementPlus, { size: useAppStore().size });
}

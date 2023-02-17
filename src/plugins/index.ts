/*
 * @Description: plugins
 * @Version: 1.0
 * @Autor: Tansir
 * @Date: 2023-02-16 13:43:55
 * @LastEditors: Tansir
 * @LastEditTime: 2023-02-17 15:47:19
 */
import type { App } from 'vue';
import { loadElementPlus } from './element-plus';
import { loadElementPlusIcons } from './element-plus-icon';
import { loadVueI18n } from './vue-i18n';
import { loadVxeTable } from './vxe-table';

export function loadPlugins(app: App) {
  loadElementPlus(app);
  loadElementPlusIcons(app);
  loadVxeTable(app);
  loadVueI18n(app);
}

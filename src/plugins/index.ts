/*
 * @Description: plugins
 * @Version: 1.0
 * @Autor: Tansir
 * @Date: 2023-02-16 13:43:55
 * @LastEditors: Tansir
 * @LastEditTime: 2023-02-16 15:32:24
 */
import type { App } from "vue";
import { loadElementPlus } from "./element-plus";
import { loadElementPlusIcons } from "./element-plus-icon";
import { loadVxeTable } from "./vxe-table";

export function loadPlugins(app: App) {
  loadElementPlus(app);
  loadElementPlusIcons(app);
  loadVxeTable(app);
}

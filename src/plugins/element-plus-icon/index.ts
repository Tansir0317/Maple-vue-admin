/*
 * @Description: element-plus-icons完整引入
 * @Version: 1.0
 * @Autor: Tansir
 * @Date: 2023-02-16 14:03:23
 * @LastEditors: Tansir
 * @LastEditTime: 2023-02-16 14:08:15
 */
import type { App } from "vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

export function loadElementPlusIcons(app: App) {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }
}

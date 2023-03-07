/*
 * @Description: 全局入口
 * @Version: 1.0
 * @Autor: Tansir
 * @Date: 2023-02-22 10:53:52
 * @LastEditors: Tansir
 * @LastEditTime: 2023-03-03 16:27:39
 */
//core
import { createApp } from 'vue';
import { setupStore } from '@/stores';
import App from './App.vue';
import router from './router';
import '@/router/permission';

//load
import { loadPlugins } from '@/plugins';

//css
import 'element-plus/dist/index.css';
import 'vxe-table-plugin-element/dist/style.css';
import 'vxe-table/lib/style.css';
import '@/assets/iconfont/iconfont.css';
import '@/style/index.scss';

const app = createApp(App);

//注册 store
setupStore(app);
//加载插件
loadPlugins(app);

app.use(router);
app.mount('#app');

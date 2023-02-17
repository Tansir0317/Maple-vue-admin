//core
import { createApp } from "vue";
import { setupStore } from "@/stores";
import App from "./App.vue";
import router from "./router";

//load
import { loadPlugins } from "@/plugins";

//css
import "element-plus/dist/index.css";
import "vxe-table-plugin-element/dist/style.css";
import "vxe-table/lib/style.css";
import "@/assets/iconfont/iconfont.css";
import "@/style/index.scss";

const app = createApp(App);

//注册 store
setupStore(app);
//加载插件
loadPlugins(app);

app.use(router);
app.mount("#app");

//core
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

//load
import { loadPlugins } from "@/plugins";

//css
import "element-plus/dist/index.css";
import "vxe-table-plugin-element/dist/style.css";
import "vxe-table/lib/style.css";
import "./assets/main.css";

const app = createApp(App);

//加载插件
loadPlugins(app);

app.use(createPinia());
app.use(router);
app.mount("#app");

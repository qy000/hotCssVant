import "../src/utils/hotcss.js";
import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import { Lazyload } from "vant";
import Vant from "vant";
import "vant/lib/index.css";
import "./assets/css/reset.less"; // 全局样式
import Cookies from "js-cookie";
import { get, post, file, baseUrl } from "./utils/axios.js";
import { encrypt, decrypt } from "./utils/secret.js";
import { loading } from "./utils/loading.js";

Vue.config.productionTip = false;

Vue.use(Lazyload);
Vue.use(Vant);

Vue.prototype.$baseUrl = baseUrl; // baseUrl变量
Vue.prototype.$cookie = Cookies;
Vue.prototype.$get = get;
Vue.prototype.$post = post;
Vue.prototype.$file = file;
Vue.prototype.$encrypt = encrypt;
Vue.prototype.$decrypt = decrypt;
Vue.prototype.$loading = loading;


new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

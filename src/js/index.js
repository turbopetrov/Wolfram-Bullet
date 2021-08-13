import Vue from "vue";
import router from "./router/router.js";
import store from "./store/store.js";
import App from "./App.vue";

Vue.use(ApiPlugin);
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
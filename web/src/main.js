// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from "./App"
import router from "./router"
import element from "element-ui"
import axios from "axios"
import "element-ui/lib/theme-chalk/index.css";

axios.defaults.baseURL = "localhost:8888";

Vue.use( element )
Vue.use( axios )
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue( {
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
} )

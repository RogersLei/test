import Vue from "vue"
import Router from "vue-router"
import Index from "../App.vue"
import Home from "@/components/home"
import Monitor from "@/components/monitor"
import Report from "@/components/report"

Vue.use( Router )

export default new Router( {
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "/home",
      name: "Home",
      component: Home
    },
    {
      path: "/monitor",
      name: "monitor",
      component: Monitor
    },
    {
      path: "/report",
      name: "report",
      component: Report
    }
  ]
} )

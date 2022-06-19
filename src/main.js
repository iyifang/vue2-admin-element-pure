import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import "element-ui/lib/theme-chalk/index.css" //element样式文件必须引入

import "@/styles/index.scss" // 全局样式

import '@/icons'
import '@/permission'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

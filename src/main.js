import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import "element-ui/lib/theme-chalk/index.css" //element样式文件必须引入
import { ElementTiptapPlugin } from 'element-tiptap';
// 引入 import element-tiptap 样式
import 'element-tiptap/lib/index.css';

import "@/styles/index.scss" // 全局样式

// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import '@/icons'
import '@/permission'

// 安装 element-tiptap 插件
Vue.use(ElementTiptapPlugin, {
  lang: 'zh', // 设置语言为中文
});

Vue.config.productionTip = false

// 定义全局指令
Vue.directive('resize', { // 使用局部注册指令的方式
  // 指令的名称
  bind(el, binding) { // el为绑定的元素，binding为绑定给指令的对象
    let width = '',
      height = '';

    function isReize() {
      const style = document.defaultView.getComputedStyle(el);
      if (width !== style.width || height !== style.height) {
        binding.value(); // 关键
      }
      width = style.width;
      height = style.height;
    }
    el.__vueSetInterval__ = setInterval(isReize, 300);
  },
  unbind(el) {
    clearInterval(el.__vueSetInterval__);
  }

})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

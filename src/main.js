import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'
import router from './router'
import VueLazyload from 'vue-lazyload'
import store from './store'

import 'common/stylus/index.styl'
Vue.config.productionTip = false

fastclick.attach(document.body)
// 所有点击去除几秒的延迟

Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})
// 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
/* eslint-disable no-new */
// vue2.0独立构建
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
// vue2.0运行时构建
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

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

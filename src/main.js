import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './iconfont/iconfont.css'
import store from './store/store'


new Vue({
  el: '#login',
  router,
  // 使用 vuex 的 store,在任何组件都可以使用
  store,
  components: { App },
  template: '<App/>'
})

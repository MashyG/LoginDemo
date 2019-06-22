import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './iconfont/iconfont.css'


new Vue({
  el: '#login',
  router,
  components: { App },
  template: '<App/>'
})

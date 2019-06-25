import Vue from 'vue'
import Router from 'vue-router'
import Home from '../component/Home/Home.vue'
import LoginedHome from '../component/Home/LoginedHome.vue'
import Login from '../component/Login/Login.vue'
import Register from '../component/Register/Register.vue'
import LoginSuccess from '../component/Login/LoginSuccess.vue'
import store from '../store/store'

Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/LoginedHome',
        name: 'LoginedHome',
        component: LoginedHome,
        beforeEnter(to, from, next){
          if(window.localStorage.token){
            store.commit('tokenSave', window.localStorage.token)
          }
          if(store.state.token){
            next()
          } else{
            alert("请先登录！")
          }
        }
      },
      {
        path: '/Login',
        name: 'Login',
        component: Login
      },
      {
        path: '/Register',
        name: 'Register',
        component: Register
      },
      {
        path: '/LoginSuccess',
        name: 'LoginSuccess',
        component: LoginSuccess
      }
    ]
  })
  
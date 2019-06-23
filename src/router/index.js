import Vue from 'vue'
import Router from 'vue-router'
import Home from '../component/Home/Home.vue'
import Login from '../component/Login/Login.vue'
import Register from '../component/Register/Register.vue'
import LoginSuccess from '../component/Login/LoginSuccess.vue'

Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home
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
  
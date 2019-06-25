<template>
    <div class="login">
        <div class="loginBox">
            <div class="loginText">注册</div>
            <div class="loginForm">
                <span class="userName iconfont">&#xe63e;</span>
                <input type="text" v-model="userName" placeholder="userName" autocomplete="off" /> 
            </div>
            <div class="loginForm">
                <span class="password1 iconfont">&#xe658;</span>
                <input type="password" v-model="password1" placeholder="password" />
            </div>
            <div class="loginForm">
                <span class="password2 iconfont">&#xe658;</span>
                <input type="password" v-model="password2" placeholder="password" />
            </div>
            <div class="loginSubmit" @click="register">注册</div>
        </div>
    </div>
</template>

<script>
import { scrypt } from 'crypto';
const axios = require('axios');
import qs from 'qs'
// 首先需要通过设置全局的默认配置，把axios的发送方式改一下
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
export default {
    name: "Login",
    data () {
        return {
            userName: '',
            password1: '',
            password2: ''
        }
    },
    methods: {
        register() {
            // 保存this的指向，否则下面的then中的this会报错，取不到$router
            var _self = this
            if(_self.userName === '' || _self.password1 === '' || _self.password2 === ''){
                alert('账号或密码不能为空')
            } else if(_self.password1 !== _self.password2){
                alert('两次输入的密码不相同')
            } else{
                var data = {
                        username: _self.userName,
                        password1: _self.password1
                    }
                axios.post(
                    'http://localhost:3000/Register',
                    // 使用qs库来格式化数据
                    qs.stringify(data)
                )
                .then(function (response) {
                    if(response.data.success === 'success'){
                        alert("注册成功，请登录")
                        _self.$router.push({ path: '/Login' })
                    }else{
                        alert('账号已存在，请重新输入！')
                    }
                    console.log(response)
                })
                .catch(function (error) {
                    console.log(error);
                })
            }
        }
    }
   }
</script>

<style lang="stylus" scoped>
.login
    background-image: url('../../img/background.jpg')
    background-size: cover
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    background-position: center center
    background-repeat: no-repeat
    .loginBox
        position: absolute 
        top: 35%
        left: 50%
        transform: translate(-50%, -50%)
        .loginText
            text-align: center
            margin: 30px
            color: white
            font-size: 24px
        .loginForm
            margin: 10px 0
            .userName
                position: absolute
                top: 39%
                left: 0
                margin: 2px
            .password1
                position: absolute
                top: 56%
                left: 0
                margin: 2px
            .password2
                position: absolute
                top: 73%
                left: 0
                margin: 2px
            input 
                padding-left: 20px
                height: 25px
        .loginForget
            width: 50px
            color: white
            font-size: 10px
            text-decoration: underline
            cursor: pointer
        .loginForget:hover
            color: #03a9f4
        .loginSubmit
            margin-top: 15px
            background-color: #35baf6
            color: white
            text-align center
            height: 25px
            line-height: 25px
            border-radius: .5rem
            cursor: pointer
        .loginSubmit:hover
            background-color: #03a9f4
</style>


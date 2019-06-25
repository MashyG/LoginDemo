<template>
    <div class="login">
        <div class="loginBox">
            <div class="loginText">登录</div>
            <div class="loginForm">
                <span class="userName iconfont">&#xe63e;</span>
                <input type="text" v-model="userName" placeholder="userName" autocomplete="off" /> 
            </div>
            <div class="loginForm">
                <span class="password iconfont">&#xe658;</span>
                <input type="password" v-model="password" placeholder="password" />
            </div>
            <div class="loginForget">忘记密码?</div>
            <div class="loginSubmit" @click="submit">登录</div>
        </div>
    </div>
</template>

<script>
const axios = require('axios');
export default {
    name: "Login",
    data () {
        return {
            userName: '',
            password: ''
        }
    },
    methods: {
        submit(){
            // 保存this的指向，否则下面的then中的this会报错，取不到$router
            var _self = this
            if(_self.userName === '' || _self.password === ''){
                alert('账号或密码不能为空')
            } else{
                axios.get('http://localhost:3000/Login', {
                    params: {
                        userName: _self.userName,
                        password: _self.password
                    }
                })
                .then(function (response) {
                    // console.log(response.data)
                    if(response.data.success === 'success'){
                        // 登录成功跳转
                        _self.$router.push({ path: '/LoginSuccess' })
                        // 将接受的token存入vuex中
                        if(!_self.$store.state.token || response.data.token != _self.$store.state.token){
                            _self.SaveToken(response.data.token)
                        }
                        console.log(response.data.token)
                        console.log('success')
                    }else if(response.data.error === 'error'){
                        alert('账号或密码不正确，请重新输入！')
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
            }
        },
        SaveToken(token){
            // 将token的值传给vuex中的mutation对象的tokenSave方法，然后进行保存token
            this.$store.commit('tokenSave', token)
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
                top: 42%
                left: 0
                margin: 2px
            .password
                position: absolute
                top: 60%
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


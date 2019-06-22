<template>
    <div class="login">
        <div class="loginBox">
            <div class="loginText">登录</div>
            <div class="loginForm">
                <span class="userName iconfont">&#xe63e;</span>
                <input type="text" name="userName" placeholder="userName" autocomplete="off" /> 
            </div>
            <div class="loginForm">
                <span class="password iconfont">&#xe658;</span>
                <input type="password" name="password" placeholder="password" />
            </div>
            <div class="loginForget">忘记密码?</div>
            <div class="loginSubmit" >登录</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login"
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
                top: 44%
                left: 0
                margin: 2px
            .password
                position: absolute
                top: 60%
                left: 0
                margin: 2px
            input 
                padding-left: 20px
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
            background-color: #00bcd4
            color: white
            text-align center
            height: 25px
            line-height: 25px
            border-radius: .5rem
            cursor: pointer
</style>


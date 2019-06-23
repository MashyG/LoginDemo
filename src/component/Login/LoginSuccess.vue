<template>
    <div class="loginSuccess">
        <div class="box">
            <header class="showcase">
                <h1>登录成功</h1>
            </header>
            <a href="#" class="btn" @click="logout">退出</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoginSuccess",
    methods:{
        logout(){
            this.$router.push({ path: '/'})
        }
    }
}
</script>

<style lang="stylus" scoped>
.loginSuccess
    background-image: url('../../img/background.jpg')
    background-size: cover
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    background-position: center center
    background-repeat: no-repeat
    .box
        position: absolute 
        top: 35%
        left: 50%
        transform: translate(-50%, -50%)
        .showcase h1
            font-size: 50px
            line-height: 1.3
            position: relative
            animation: heading
            animation-duration: 3s
            animation-fill-mode: forwards
            color: #85d5f9
        @keyframes heading
            0%
                top: -150px
            100%
                top: 50px
        .btn
            display: inline-block
            color: #ffffff
            text-decoration: none
            padding: .5rem 1rem
            margin: 50px 50px 
            border: 1px solid #ffffff
            opacity: 0
            animation-name: btn
            animation-duration: 3s
            animation-delay: 1s
            animation-fill-mode: forwards
            transition-property: transform
            transition-duration: 1s
        .btn:hover
            transform: rotateY(360deg)
        @keyframes btn
            0%
                opacity: 0
            100%
                opacity: 1
</style>


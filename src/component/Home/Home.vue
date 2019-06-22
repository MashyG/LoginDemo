<template>
    <div>
        <router-link to="/Login" class="homeLogin">登录</router-link>
        <!-- <router-link to="/Register">注册</router-link> -->
    </div>
</template>

<script>
export default {
    name: "Home"
}
</script>

<style lang="stylus" scoped>
    .homeLogin
        background-color: #03a9f4
        padding: 5px 10px
        text-decoration: none
        border-radius: .5rem
        color: white
</style>



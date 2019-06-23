<template>
    <div>
        <router-link to="/Login" class="homeBtn">登录</router-link>
        <router-link to="/Register" class="homeBtn">注册</router-link>
    </div>
</template>

<script>
export default {
    name: "Home"
}
</script>

<style lang="stylus" scoped>
    .homeBtn
        background-color: #03a9f4
        padding: 5px 10px
        text-decoration: none
        border-radius: .5rem
        color: white
</style>



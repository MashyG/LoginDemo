<template>
    <div>
        <router-link to="/LoginedHome" class="homeBtn">首页</router-link>
        <router-link to="/Register" class="homeBtn">注册</router-link>
        <a class="homeBtn" @click="logout">退出</a>
    </div>
</template>

<script>
export default {
    name: "LoginedHome",
    methods: {
        logout(){
            if(confirm("确定退出？")){
                this.$router.push({ path: '/'})
                this.$store.commit('tokenDel', '')
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    .homeBtn
        background-color: #03a9f4
        padding: 5px 10px
        text-decoration: none
        border-radius: .5rem
        color: white
        cursor: pointer
</style>



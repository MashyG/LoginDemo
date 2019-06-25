import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 共享的数据
const state  ={
    token : ''
}
// 操作数据的方法
const mutations = {
    tokenSave(state, token=''){
        state.token = token
        localStorage.setItem("token", token)
    },
    tokenDel(state, token=''){
        state.token = token
        localStorage.clear()
    }
}

export default new Vuex.Store({
    state,
    mutations
})
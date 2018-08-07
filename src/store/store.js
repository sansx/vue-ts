import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
    lists:{},
    wshowlist:{},
    hotlist:{}
}
const getters = {

}


const mutations = {
    hlistadd(state,n){
        state.hotlist = n
    },
    wlistadd(state,n){
        state.wshowlist = n
    }
}

const actions = {

}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
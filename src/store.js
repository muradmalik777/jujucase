import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        userData: null,
        steamId: "",
        userDeposits: "",
    },
    mutations: {
        addUser: function(state, user){
            state.userData = user
        },
        logout: function(state){
            state.userData = null
        }
    }
});
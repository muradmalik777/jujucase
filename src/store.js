import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        userData: null,
        userDeposits: "",
        caseBeingBrowsed: null
    },
    mutations: {
        addUser: function(state, user){
            state.userData = user
        },
        addBrowsedCase: function (state, data) {
            state.caseBeingBrowsed = data
        },
        logout: function(state){
            state.userData = null
        }
    }
});
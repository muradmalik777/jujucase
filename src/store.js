import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        userData: null,
        userDeposits: "",
        caseBeingBrowsed: null,
        caseBeingOpened: null,
        loading: false,
        winningItem: null,
        lastCaseOpened: null
    },
    mutations: {
        addUser: function(state, user){
            state.userData = user
        },
        addBrowsedCase: function (state, data) {
            state.caseBeingBrowsed = data
        },
        addCaseToBeOpened: function (state, data) {
            state.caseBeingOpened = data
        },
        refreshWinningItem: function (state, data) {
            state.winningItem = data
        },
        refreshLastCaseOpened: function (state, data) {
            state.lastCaseOpened = data
        },
        startLoader: function(state, data){
            state.loading = data
        },
        endLoader: function (state, data) {
            state.loading = data
        },
        logout: function(state){
            state.userData = null
        }
    }
});
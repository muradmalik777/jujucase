import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        userData: null,
        userCases: null,
        steamId: "",
        openedCases: null,
        itemsWon: null,
        allCases: null,
        userDeposits: "",
        userCoins: "",
    },
    mutations: {
        addUser: function(state, user){
            state.userData = user
        },
        setUserCases: function(state, cases){
            state.userCases = cases
        },
        addToUserCases: function (state, caseData) {
            state.userCases.push(caseData)
        },
        setAllCases: function(state, cases){
            state.allCases = cases
        },
        addToAllCases: function (state, caseData) {
            if(state.allCases){
                state.allCases.push(caseData)
            }
        },
        logout: function(state){
            state.userData = null
        }
    }
});
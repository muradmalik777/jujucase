import Vue from 'vue';
import Vuex from 'vuex';
import { analyticsMiddleware } from 'vue-analytics'

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [analyticsMiddleware],
    state: {
        userData: {},
        userCases: [],
        steamId: "",
        openedCases: [],
        itemsWon: [],
        allCases: null, // array of case objects
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
            state.allCases.push(caseData)
        },
        logout: function(state){
            state.userData = null
        }
    }
});
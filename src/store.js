import Vue from 'vue';
import Vuex from 'vuex';
import { analyticsMiddleware } from 'vue-analytics'

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [analyticsMiddleware],
    state: {
        userData: null,
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
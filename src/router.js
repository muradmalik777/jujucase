import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import FAQ from '@/pages/FAQ'
import TOS from '@/pages/TOS'
import About from '@/pages/About'


Vue.use(Router);

export default new Router({
    linkActiveClass: 'active',
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
        { path: '/faq', component: FAQ },
        { path: '/tos', component: TOS }
    ]
})
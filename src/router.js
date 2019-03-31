import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import FAQ from '@/pages/FAQ'
import TOS from '@/pages/TOS'
import About from '@/pages/About'
import Profile from '@/pages/Profile'
import ProfileCases from '@/components/Profile/Cases'
import ProfileTrades from '@/components/Profile/Trades'
import ProfileTransactions from '@/components/Profile/Transactions'


Vue.use(Router);

export default new Router({
    linkActiveClass: 'active',
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
        { path: '/faq', component: FAQ },
        { path: '/tos', component: TOS },
        { path: '/profile', component: Profile,
            children: [
                { path: 'cases', component: ProfileCases },
                { path: 'trades', component: ProfileTrades },
                { path: 'cases', component: ProfileTransactions }
            ]
        }
    ]
})
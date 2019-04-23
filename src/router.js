import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import CaseCreator from '@/pages/CaseCreator'
import CaseBrowser from '@/pages/CaseBrowser'
import FAQ from '@/pages/FAQ'
import TOS from '@/pages/TOS'
import About from '@/pages/About'
import Profile from '@/pages/Profile'
import ProfileCases from '@/components/Profile/Cases'
import ProfileTrades from '@/components/Profile/Trades'
import TradeDetails from '@/components/Profile/TradeDetails'
import Transactions from '@/components/Profile/Transactions'
import SingleCase from '@/components/SingleCase'


Vue.use(Router);

export default new Router({
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
    linkActiveClass: 'active',
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/caseCreator', component: CaseCreator },
        { path: '/caseBrowser', component: CaseBrowser },
        { path: '/case', component: SingleCase },
        { path: '/about', component: About },
        { path: '/faq', component: FAQ },
        { path: '/tos', component: TOS },
        { path: '/profile', component: Profile,
            children: [
                { path: 'cases', component: ProfileCases },
                { path: 'trades', component: ProfileTrades },
                { path: 'transactions', component: TradeDetails }
            ]
        }
    ]
})
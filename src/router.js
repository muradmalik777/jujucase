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
import CaseDisplay from '@/components/CaseDisplay'
import SingleCase from '@/components/SingleCase'
import ItemsWon from '@/components/ItemsWon'
import Login from '@/components/Auth/Login'
import Register from '@/components/Auth/Register'



Vue.use(Router);

export default new Router({
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
    linkActiveClass: 'active',
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/login', component: Login },
        { path: '/register', component: Register },
        { path: '/caseCreator', component: CaseCreator },
        { path: '/caseBrowser', component: CaseBrowser },
        { path: '/case/:case_id', component: SingleCase },
        { path: '/caseBrowser/:case_id', component: CaseDisplay },
        { path: '/about', component: About },
        { path: '/faq', component: FAQ },
        { path: '/tos', component: TOS },
        { path: '/iw', component: ItemsWon },
        { path: '/profile', component: Profile,
            children: [
                { path: 'cases', component: ProfileCases },
                { path: 'trades', component: ProfileTrades },
                { path: 'transactions', component: TradeDetails }
            ]
        }
    ]
})
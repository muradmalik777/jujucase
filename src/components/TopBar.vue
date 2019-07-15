<template>
    <div class="topbar">
        <v-toolbar flat class="bg-purple-bright">
            <v-container class="nav">
                <v-layout justify-end row wrap>
                    <v-flex xs2 class="text-xs-left">
                        <router-link to="/"><v-img contain :src="require('@/assets/imgs/logo.png')" class="nav-logo pointer"></v-img></router-link>
                    </v-flex>
                    <v-flex xs9 class="text-xs-right">
                        <v-btn flat class="nav-link" to="/">
                            <v-avatar size="50px">
                                <v-img contain :src="require('@/assets/imgs/svg/home.svg')" class="menu-btn-icon"></v-img>
                            </v-avatar>
                            Home
                        </v-btn>
                        <!-- <v-btn flat class="nav-link" to="/caseCreator">
                            <v-avatar size="50px">
                                <v-img contain :src="require('@/assets/imgs/svg/pen.svg')" class="menu-btn-icon"></v-img>
                            </v-avatar>
                            Case Creator
                        </v-btn> -->
                        <!-- <v-btn flat class="nav-link" to="/casebrowser">
                            <v-avatar size="50px">
                                <v-img contain :src="require('@/assets/imgs/svg/box.svg')" class="menu-btn-icon"></v-img>
                            </v-avatar>
                            Case Browser
                        </v-btn> -->
                        <!-- <v-btn flat class="c-green-bright nav-link">${{parseFloat($store.state.userData.balance).toFixed(2)}}</v-btn> -->
                        <v-menu offset-y max-width="200" min-width="150" v-if="$store.state.userData">
                            <template v-slot:activator="{ on }">
                                <v-btn flat v-on="on" class="nav-link m-0">{{$store.state.userData.user_name}} <span class="verified">[Verified]</span><br></v-btn>
                            </template>
                            <v-list dark>
                                <v-list-tile class="user-menu pointer c-purple-bright">
                                    <v-list-tile-title><p class="c-green-bright amount">${{parseFloat($store.state.userData.balance).toFixed(2)}}</p></v-list-tile-title>
                                </v-list-tile>
                                <v-list-tile to="/profile" class="user-menu pointer c-purple-bright">
                                    <v-list-tile-title>Profile</v-list-tile-title>
                                </v-list-tile>
                                <v-list-tile @click="openDialog" class="user-menu pointer c-purple-bright">
                                    <v-list-tile-title>Add Funds</v-list-tile-title>
                                </v-list-tile>
                                <v-list-tile to="/faq" class="user-menu pointer c-purple-bright">
                                    <v-list-tile-title>Help</v-list-tile-title>
                                </v-list-tile>
                                <v-list-tile @click="signout()" class="user-menu pointer">
                                    <v-list-tile-title>Logout</v-list-tile-title>
                                </v-list-tile>
                            </v-list>
                        </v-menu>
                        <v-btn flat outline class="nav-link" :to="'/login'" v-else>Login</v-btn>
                        <deposits :dialog="showDepositDialog" @close="closeDialog" v-if="$store.state.userData"></deposits>
                    </v-flex>
                    <v-flex xs1>

                    </v-flex>
                </v-layout>
            </v-container>
        </v-toolbar>
    </div>
</template>
<script>
import Api from '../services/Api.js';
import DepositDialog from '@/components/DepositDialog'

export default {
    name: 'navbar',
    components: {
        'deposits': DepositDialog
    },
    data: function(){
        return{
            drawer: true,
            showDepositDialog: false
        }
    },
    mounted: function () {
        this.getLoggedInUserData()
    },
    methods: {
        getLoggedInUserData: function(){
            var urlParams = new URLSearchParams(window.location.search);
            if(urlParams.has('openid.claimed_id')){
                this.loading = true
                let id = urlParams.get('openid.claimed_id').split("/")
                id = id[id.length-1]
                let params = { id: id}
                let userObject = new Api()
                userObject.raw('post', '/steam', params).then(response =>{
                    this.$store.commit('addUser', response)
                }).catch(() => {

                })
            }
        },
        signout: function(){
            this.user = null
            this.logout()
        },
        openDialog: function(){
            this.showDepositDialog = true
        },
        closeDialog: function(){
            this.showDepositDialog = false
        }
    },
}
</script>
<style lang="scss">
.topbar{
    .nav{
        max-width: 100%;
    }
    .nav-logo{
        width: 180px;
        height: auto;
        margin-left: 2rem;
    }
    .v-toolbar{
        width: 100%;
        height: 100px;
        z-index: 200;
    }
    .v-toolbar__content{
        padding: 0px 0px !important;
    }
    .nav-link{
        color: white;
        text-transform: capitalize;
        font-size: 16px;
        height: 50px;
        .menu-btn-icon{
            width: 22px;
            height: 25px;
        }
    }
    .nav-link.v-btn--active{
        background: #73337a;
    }
    .user-menu{
        color: #333333 !important;
    }
    .verified{
        font-size: 12px;
        color: #bbbbbb !important;
        margin-left: .5rem;
    }
}
</style>

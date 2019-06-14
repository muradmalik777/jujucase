<template>
    <div class="topbar">
        <v-toolbar flat class="bg-purple-bright">
            <v-container class="nav">
                <v-layout justify-end row wrap>
                    <v-flex xs12 sm12 md1 lg1 class="text-xs-left">
                        <v-img contain :src="require('@/assets/imgs/logo.svg')" class="nav-logo"></v-img>
                    </v-flex>
                    <v-flex xs12 sm12 md10 lg10 class="text-xs-center">
                        <v-btn flat class="nav-link" to="/">Home</v-btn>
                        <v-btn flat class="nav-link" to="caseCreator">Case Creator</v-btn>
                        <v-btn flat class="nav-link" to="casebrowser">Case Browser</v-btn>
                        <deposits :dialog="showDepositDialog" @close="closeDialog" v-if="$store.state.userData"></deposits>
                    </v-flex>
                    <v-flex xs1 class="text-xs-center">
                        <v-menu offset-y max-width="200" min-width="150" v-if="$store.state.userData">
                            <template v-slot:activator="{ on }">
                                <h4 v-ripple v-on="on" class="pointer user-name">{{$store.state.userData.user_name}}</h4>
                                <p class="t-l c-green-bright">${{parseFloat($store.state.userData.balance).toFixed(2)}}</p>
                            </template>
                                <v-list dark>
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
                        <v-btn flat outline color="#ffffff" :to="'/login'" v-else>Login</v-btn>
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
        width: 200px;
        height: auto;
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
    }
    .nav-link.v-btn--active{
        background: #73337a;
    }
    .login{
        margin: 10px;
        width: 195px;
        height: 25px;
        box-shadow: 0px 2px 2px #333333;
        border-radius: 5px;
    }
    .user-menu{
        color: #333333 !important;
    }
    .user-name{
        width: fit-content;
    }
}
</style>

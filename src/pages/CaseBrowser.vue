<template>
    <v-container grid-list-md fluid class="case-browser spacing">
        <v-layout row pa-2>
            <v-flex class="search">
                <h3 class="uppercase">case browser</h3>
                <v-autocomplete class="skin-search m-t-2" placeholder="search" v-model="search" :items="search_result"></v-autocomplete>
                <!-- <v-select background-color="#73337a" color="#fff" placeholder="Select" class="dropdown"></v-select> -->
            </v-flex>
        </v-layout>
        <v-layout row pa-2>
            <v-flex>
                <v-btn flat v-for="(item, index) in menu" :key="index" :to="item.to" class="browser-btn">{{item.name}}</v-btn>
                <v-menu offset-y class="user-menu" v-if="$store.state.userData">
                    <template v-slot:activator="{ on }">
                        <h4 v-ripple v-on="on" class="pointer user-name">{{$store.state.userData.user_name}}</h4>
                    </template>
                        <v-list dark>
                        <v-list-tile to="/profile" class="user-menu pointer c-purple-bright">
                            <v-list-tile-title>Profile</v-list-tile-title>
                        </v-list-tile>
                         <v-list-tile to="/faq" class="user-menu pointer c-purple-bright">
                            <v-list-tile-title>Help</v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile @click="this.logout" class="user-menu pointer">
                            <v-list-tile-title>Logout</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
            </v-flex>
        </v-layout>
        <v-layout row wrap pa-2>
            <v-flex class="search-result m-b-2 pointer" xs12 md4 lg3 v-for="item in cases" :key="item._id" @click="browseCase(item)">
                <div class="case">
                    <h4 class="case-name">{{item.name}}</h4>
                    <v-img contain :src="require('@/assets/imgs/cases/' + item.case_image)" class="case-image"></v-img>
                    <h4 class="t-c capitalize price">${{item.price}} <i class="fas fa-coins coins"></i></h4>
                </div>
            </v-flex>
            <v-flex xs12 class="text-xs-center m-t-3" v-if="totalCases && totalCases > 12">
                <v-pagination
                v-model="currentPage"
                :length="Math.ceil(totalCases/12)"
                :total-visible="10"
                @input="getAllCases"
                @next="getAllCases"
                @previous="getAllCases"
                ></v-pagination>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import Api from '../services/Api.js';

export default {
    name: "CaseBrowser",
    data: function(){
        return{
            search: null,
            cases: [],
            search_result: [],
            menu: [
                {name:"home", icon:"home", to:"/"}, 
                {name:"Case creator", icon:"pen", to: "/caseCreator"}, 
                {name:"case browser", icon:"avatar", to: "/caseBrowser"}, 
                {name:"support/faq", icon:"support", to: "/faq"},
                {name:"terms of service", icon:"info", to: "/tos"},
                {name:"about", icon:"info", to: "/about"}
            ],
            currentPage: 1,
            totalCases: null
        }
    },
    created: function() {
        this.getAllCases()
    },
    methods: {
        browseCase: function (item) {
            this.$store.commit('addBrowsedCase', item)
            this.$router.push('caseBrowser/' + item._id)
        },
        getAllCases: function(){
            let $object = new Api('/cases')
            let params = { p : this.currentPage}
            $object.getList(params).then(resp => {
                this.cases = resp.items
                this.totalCases = resp.total_count
            })
        },
    }
}
</script>
<style lang="scss">
.case-browser{
    .search {
        .skin-search {
            width: calc(100%);
            display: inline-block !important;
        }
        .dropdown {
            width: 150px;
            height: 60px;
            margin-left: 25px;
            display: inline-block !important;
        }
    }
    .browser-btn{
        background: #61246870;
        color: #ffffff;
        margin: 5px;
        padding: 30px;
        border-radius: 0px;
    }
    .user-name{
        width: fit-content;
        padding: 18px;
        margin: 5px 5px 5px 0px;
        float: left;
        display: block;
        background: #61246870;
    }
    .case {
        background-color: #61246870;
        width: 100%;
        margin: 2rem auto;
        height: 300px;
        display: inline-block;
        .case-name {
            background-color: #61246870;
            width: 100%;
            text-align: center;
            padding: 1.5rem 0;
        }
        .case-image{
            display: block;
            margin: 2.5rem auto;
            max-width: 150px;
            height: 100px;
        }
    }
}
</style>

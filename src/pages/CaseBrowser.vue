<template>
    <v-container fluid class="case-browser spacing">
        <v-layout row pa-3>
            <v-flex class="search">
                <h3 class="uppercase">case browser</h3>
                <v-autocomplete class="skin-search m-t-2" placeholder="search" v-model="search" :items="search_result"></v-autocomplete>
            </v-flex>
        </v-layout>
        <v-layout pa-3 row>
            <v-flex>
                <v-btn flat v-for="(item, index) in menu" :key="index" :to="item.to" class="browser-btn">{{item.name}}</v-btn>
                <v-menu offset-y class="user-menu" v-if="this.$store.state.userData">
                    <template v-slot:activator="{ on }">
                        <h4 v-ripple v-on="on" class="pointer user-name">{{$store.state.userData.user_name}}</h4>
                    </template>
                        <v-list dark>
                        <v-list-tile to="/profile" class="user-menu pointer c-purple-bright">
                            <v-list-tile-title>Profile</v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile @click="signout()" class="user-menu pointer">
                            <v-list-tile-title>Logout</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
            </v-flex>
        </v-layout>
        <v-layout row pa-3>
            <v-flex class="search-result">
                <div v-for="item in 10" :key="item" class="case">

                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    name: "CaseBrowser",
    data: function(){
        return{
            search: null,
            search_result: [],
            menu: [
                {name:"home", icon:"home", to:"/"}, 
                {name:"Case creator", icon:"pen", to: "/caseCreator"}, 
                {name:"case browser", icon:"avatar", to: "/caseBrowser"}, 
                {name:"support/faq", icon:"support", to: "/faq"},
                {name:"terms of service", icon:"info", to: "/tos"},
                {name:"about", icon:"info", to: "/about"}
            ]
        }
    }
}
</script>
<style lang="scss">
.case-browser{
    .browser-btn{
        background: #612468;
        color: #ffffff;
        margin: 15px;
        padding: 30px;
        border-radius: 0px;
    }
    .user-name{
        width: fit-content;
        padding: 18px;
        margin: 15px;
        float: left;
        display: block;
        background: #612468;
    }
}
</style>

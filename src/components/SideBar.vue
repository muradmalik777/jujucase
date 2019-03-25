<template>
    <div class="sidebar">
        <v-navigation-drawer class="bg-purple-dull" v-model="drawer" permanent fixed>
            <v-img :src="require('@/assets/imgs/logo.png')" class="logo"></v-img>
            <div class="menu">
                <v-btn flat v-for="(item, index) in menu" :key="index" :to="item.to">
                    <v-icon left light>{{item.icon}}</v-icon>
                    {{item.name}}
                </v-btn>
            </div>
            <div class="cases-count m-t b-t">
                <p class="uppercase">cases opened</p>
                <p class="count c-orange">46328</p>
            </div>
            <div class="user-count b-t">
                <p class="uppercase">registered users</p>
                <p class="count c-orange">4834019841</p>
            </div>
            <div class="social-links">
                <i class="fab fa-steam-symbol icon"></i>
                <i class="fab fa-facebook-square icon"></i>
                <i class="fab fa-instagram icon"></i>
                <i class="fab fa-twitter icon"></i>
            </div>
        </v-navigation-drawer>
    </div>
</template>
<script>
export default {
    name: 'navbar',
    data: function(){
        return{
            drawer: true,
            menu: [
                {name:"home", icon:"home", to:"/"}, 
                {name:"Case creator", icon:"edit", to: "caseCreator"}, 
                {name:"affliates", icon:"person", to: "profile"}, 
                {name:"support/faq", icon:"help", to: "faq"},
                {name:"terms of service", icon:"help", to: "tos"},
                {name:"about", icon:"error_outline", to: "about"}
            ]
        }
    }
    
}
</script>
<style lang="scss">
.sidebar{
    .v-navigation-drawer{
        width: 300px;
        height: 100vh;

        .logo{
            width: 120px;
            height: 120px;
            display: block;
            margin: 20px auto 100px;
        }
        .menu{
            width: 100%;
            margin: 50px 0px;
            .v-btn{
                width: 100%;
                margin: 5px 0px;
                padding: 0px 40px;
                height: 45px;
                color: #cccccc;
            }
            .v-btn.v-btn--active{
                background: #aaaaaa40;
                border: 1px solid #cccccc70;
                border-left: 5px solid #cccccc;
            }
            .v-btn__content{
                justify-content: left;
            }
        }
        .cases-count, .user-count{
            padding: 15px 50px;
            p{
                font-size: 12px;
                margin: 0px;
            }
            .count{
                font-size: 22px;
            }
        }
        .social-links{
            display: block;
            width: fit-content;
            margin: auto;
            .icon{
                margin: 8px;
                font-size: 20px;
            }
        }
    }
}
</style>

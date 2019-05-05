<template>
    <div class="sidebar">
        <v-navigation-drawer class="bg-purple-dull" v-model="drawer" permanent fixed>
            <v-img :src="require('@/assets/imgs/logo.png')" class="logo"></v-img>
            <div class="menu">
                <v-btn flat v-for="(item, index) in menu" :key="index" :to="item.to" class="menu-btn">
                    <v-avatar size="50px">
                        <v-img contain :src="require('@/assets/imgs/svg/' + item.icon + '.svg')" class="menu-btn-icon"></v-img>
                    </v-avatar>
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
                {name:"Case creator", icon:"pen", to: "/caseCreator"}, 
                {name:"case browser", icon:"avatar", to: "/caseBrowser"}, 
                {name:"items Won", icon:"avatar", to: "/winnings"}, 
                {name:"support/faq", icon:"support", to: "/faq"},
                {name:"terms of service", icon:"info", to: "/tos"},
                {name:"about", icon:"info", to: "/about"}
            ]
        }
    }
    
}
</script>
<style lang="scss">
.sidebar{
    .v-navigation-drawer{
        width: 300px;

        .logo{
            width: 120px;
            height: 120px;
            display: block;
            margin: 50px auto;
        }
        .menu{
            width: 100%;
            margin: 50px 0px;
            .menu-item{
                &:hover{
                    background: #612468;
                }
            }
            .menu-btn{
                width: 100%;
                padding: 7px 20px;
                height: 45px;
                color: #cccccc;
                margin: 0px;
                font-size: 16px;
                margin-bottom: 10px;
                text-transform: capitalize;
            }
            .menu-btn.v-btn--active{
                background: #7d3684;
                border-left: 4px solid #eeeeee;
                color: #ffffff
            }
            .menu-btn-icon{
                width: 20px;
                height: 20px;
                margin-right: 15px;
            }
            .v-btn__content{
                justify-content: left;
                margin-left: 15px;
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

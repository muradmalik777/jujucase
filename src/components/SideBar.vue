<template>
    <div class="sidebar">
        <v-navigation-drawer class="bg-purple-dull" v-model="drawer" permanent fixed>
            <v-img :src="require('@/assets/imgs/logo.png')" class="logo"></v-img>
            <div class="menu">
                <v-list dense>
                    <v-list-tile
                        v-ripple
                        class="menu-item"
                        active-class="is-active"
                        v-for="(item, index) in menu"
                        :key="index"
                        :to="item.to">
                        <v-list-tile-action>
                        <v-img contain :src="require('@/assets/imgs/svg/' + item.icon + '.svg')" class="menu-btn-icon"></v-img>
                        </v-list-tile-action>

                        <v-list-tile-content>
                        <v-list-tile-title class="menu-btn uppercase">{{ item.name }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
                <!-- <v-btn flat v-for="(item, index) in menu" :key="index" :to="item.to">
                    <v-avatar size="30px">
                        <v-img :src="require('@/assets/imgs/svg/' + item.icon + '.svg')" class="logo"></v-img>
                    </v-avatar>
                    <v-icon left light>{{item.icon}}</v-icon>
                    {{item.name}}
                </v-btn> -->
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
                {name:"Case creator", icon:"pen", to: "caseCreator"}, 
                {name:"affliates", icon:"avatar", to: "profile"}, 
                {name:"support/faq", icon:"support", to: "faq"},
                {name:"terms of service", icon:"info", to: "tos"},
                {name:"about", icon:"info", to: "about"}
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
            .menu-item{
                &:hover{
                    background: #612468;
                }
            }
            .menu-btn{
                width: 100%;
                margin: 5px 0px;
                padding: 7px 20px;
                height: 45px;
                color: #cccccc;
                font-weight: 600;
                letter-spacing: 1px;
                margin: 2px;
            }
            .is-active{
                background: #7d3684;
                border-left: 4px solid #eeeeee;
            }
            .menu-btn-icon{
                width: 20px;
                height: 20px;
            }
            // .v-btn__content{
            //     justify-content: left;
            // }
            // .v-icon{
            //     font-weight: 300;
            // }
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

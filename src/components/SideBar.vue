<template>
    <div class="sidebar">
        <v-navigation-drawer class="bg-purple-dull" v-model="drawer" permanent fixed>
            <router-link to="/"><v-img :src="require('@/assets/imgs/logo.png')" class="logo pointer"></v-img></router-link>
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
                <p class="count c-orange">{{caseCount}}</p>
            </div>
            <div class="user-count b-t">
                <p class="uppercase">registered users</p>
                <p class="count c-orange">{{userCount}}</p>
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
import Api from '@/services/Api.js';

export default {
    name: 'navbar',
    data: function(){
        return{
            drawer: true,
            caseCount: 0,
            userCount: 0,
            menu: [
                {name:"home", icon:"home", to:"/"}, 
                // {name:"Case creator", icon:"pen", to: "/caseCreator"},
                // {name:"case browser", icon:"avatar", to: "/caseBrowser"}, 
                // {name:"items Won", icon:"avatar", to: "/winnings"}, 
                {name:"support/faq", icon:"support", to: "/faq"},
                {name:"terms of service", icon:"info", to: "/tos"},
                {name:"about", icon:"info", to: "/about"}
            ]
        }
    },
    mounted: function(){
        this.getCaseCounts()
        this.getUserCounts()
    },
    methods: {
        getCaseCounts: function(){
            let $object = new Api('/cases/count')
            $object.getList().then(resp => {
                this.caseCount = resp
            })
        },
        getUserCounts: function(){
            let $object = new Api('/user/count')
            $object.getList().then(resp => {
                this.userCount = resp
            })
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

@media only screen and (max-height: 1366px) {
    .sidebar{
        .v-navigation-drawer{
            width: 300px;

            .logo{
                width: 110px;
                height: 110px;
                display: block;
                margin: 40px auto;
            }
            .menu{
                margin: 30px 0px;
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
            }
        }
    }   
}
</style>

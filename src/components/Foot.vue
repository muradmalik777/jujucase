<template>
    <v-container class="foot bg-purple-bright">
        <v-layout row wrap>
            <v-flex xs12 md3 lg3 class="text-xs-left">
                <v-img contain :src="require('@/assets/imgs/logo.png')" class="foot-logo"></v-img>
            </v-flex>

            <v-flex xs12 md2 lg2 class="text-xs-center">
                <div class="foot-menu">
                    <v-btn flat v-for="(item, index) in menu" :key="index" :to="item.to" class="menu-btn full-width">
                        {{item.name}}
                    </v-btn>
                </div>
            </v-flex>

            <v-flex xs12 md2 lg2 class="text-xs-center count">
                <p class="uppercase">cases opened</p>
                <p class="count c-orange">{{caseCount}}</p>
            </v-flex>

            <v-flex xs12 md2 lg2 class="text-xs-center count">
                <p class="uppercase">registered users</p>
                <p class="count c-orange">{{userCount}}</p>
            </v-flex>

            <v-flex xs12 md3 lg3 class="text-xs-center social-links">
                <i class="fab fa-steam-symbol icon"></i>
                <i class="fab fa-facebook-square icon"></i>
                <i class="fab fa-instagram icon"></i>
                <i class="fab fa-twitter icon"></i>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import Api from '@/services/Api.js';

export default {
    name: 'Foot',
    data: function(){
        return{
            caseCount: 0,
            userCount: 0,
            menu: [
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
.foot{
    max-width: 100%;
    height: 150px !important;

    .foot-logo{
        width: 180px;
        height: auto;
        margin-left: 2rem;
    }
    .foot-menu{
        width: 100%;
        .menu-btn{
            &:hover{
                color: white;
                &::before{
                    display: none;
                }
            }
        }
        .menu-btn{
            height: 20px;
            color: #cccccc;
            font-size: 14px;
            text-transform: capitalize;
        }
    }
    .count{
        margin-top: 1rem;
        p{
            font-size: 12px;
            text-transform: capitalize;
            margin: 0px;
        }
        .count{
            font-size: 28px;
        }
    }
    .social-links{
        margin-top: 1rem;
        .icon{
            margin: 8px;
            font-size: 20px;
            &:hover{
                color: #ee964b;
                cursor: pointer;
            }
        }
    }
    p{
        color: #ffffff90;
    }
}
</style>

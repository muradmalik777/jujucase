<template>
    <div class="topbar">
       <v-toolbar flat class="bg-purple-bright">
            <v-container>
                <v-layout justify-end row>
                    <v-flex xs8>
                        <div class="deposit pointer">
                            <div class="left">
                                <div class="circle">
                                    <v-img :src="require('@/assets/imgs/svg/purse.svg')" class="topbar-icon"></v-img>
                                </div>
                            </div>
                            <div class="right">
                                <h4>Deposit</h4>
                                <p class="c-green-bright"></p>
                            </div>
                        </div>
                        <div class="withdraw pointer">
                            <div class="left">
                                <div class="circle">
                                    <v-img :src="require('@/assets/imgs/svg/money.svg')" class="topbar-icon"></v-img>
                                </div>
                            </div>
                            <div class="right">
                                <h4>Withdraw</h4>
                                <p class="c-green-bright"></p>
                            </div>
                        </div>
                        <div class="bell pointer">
                            <v-img :src="require('@/assets/imgs/svg/notification.svg')" class="topbar-icon"></v-img>
                        </div>

                        <div class="user">
                            <div class="left">
                                <v-img :src="require('@/assets/imgs/default-icon.png')" class="user-icon"></v-img>
                            </div>
                            <div class="right" v-if="this.$is_logged_in">
                                <h4 class="pointer">Murad Malik</h4>
                                <p class="c-green-bright">$0</p>
                            </div>
                            <div v-else>
                                <a href="http://localhost:8000/api/users/steam">
                                    <v-img :src="require('@/assets/imgs/steam.png')" class="login pointer" ></v-img>
                                </a>
                            </div>
                        </div>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-toolbar>
    </div>
</template>
<script>
import Api from '../services/Api.js';

export default {
    name: 'navbar',
    data: function(){
        return{
            drawer: true,
        }
    },
    methods: {
      created: function () {
          var params = {};
          var query = window.location.search;
          var vars = query.split('&');
          for (var i = 0; i < vars.length; i++) {
              var pair = vars[i].split('=');
              params[pair[0]] = decodeURIComponent(pair[1]);
          }
          debugger;
      },
    }
    
}
</script>
<style lang="scss">
.topbar{
    .v-toolbar{
        width: calc(100% - 300px);
        height: 100px;
        position: fixed;
        top: 0;
        left: 300px;
        z-index: 200;
    }
    .v-toolbar__content{
        padding: 0px 0px !important;
    }
    .container{
        padding: 0px;
    }
    .flex:first-child{
        border-left: 1px solid #99999965;
    }
    .deposit, .withdraw, .bell{
        width: 25%;
        border-right: 1px solid #99999965;
        height: 100px;
        padding: 20px 10px;
        float: left;
    }
    .left, .right{
        width: 50%;
        float: left;
    }
    .circle{
        width: 65px;
        height: 65px;
        padding: 5px;
        border: 1px solid #99999995;
        border-radius: 50%;
        margin: auto;
    }
    .topbar-icon{
        width: 32px;
        height: 29px;
        display: block;
        margin: 10px auto;
    }
    .topbar-icon.money{
        height: 31px;
    }
    .bell{
        width: 15%;
        .topbar-icon{
            font-size: 35px !important;
            width: 25px;
            height: 28px;
            display: block;
            margin: 10px auto;
        }
    }
    .user{
        width: 35%;
        height: 100px;
        float: left;
        padding: 25px 10px;
        .left{
            width: 30%;
            .user-icon{
                width: 50px;
                height: 50px;
                border-radius: 100%;
                display: block;
                margin: auto;
            }
        }
        .right{
            width: 70%;
        }
    }
    .login{
        margin: 10px;
        width: 195px;
        height: 25px;
        box-shadow: 0px 2px 2px #333333;
        border-radius: 5px;
    }
}
</style>

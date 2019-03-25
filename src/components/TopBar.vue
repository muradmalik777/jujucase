<template>
    <div class="topbar">
       <v-toolbar flat class="bg-purple-bright">
            <v-container>
                <v-layout justify-end row>
                    <v-flex xs8>
                        <div class="deposit">
                            <div class="left">
                                <v-icon>account_balance_wallet</v-icon>
                            </div>
                            <div class="right">
                                <h4>Deposit</h4>
                                <p class="c-green-bright">$1700</p>
                            </div>
                        </div>
                        <div class="withdraw">
                            <div class="left">
                                <v-icon>monetization_on</v-icon>
                            </div>
                            <div class="right">
                                <h4>Withdraw</h4>
                                <p class="c-green-bright">$1700</p>
                            </div>
                        </div>
                        <div class="bell">
                            <v-icon>notifications</v-icon>
                        </div>

                        <div class="user">
                            <div class="left">
                                <v-img :src="require('@/assets/imgs/default-icon.png')" class="user-icon"></v-img>
                            </div>
                            <div class="right" v-if="this.$is_logged_in">
                                <h4>Murad Malik</h4>
                                <p class="c-green-bright">$1700</p>
                            </div>
                            <div v-else>
                                <v-img :src="require('@/assets/imgs/steam.png')" class="login pointer"></v-img>
                            </div>
                        </div>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-toolbar>
    </div>
</template>
<script>
export default {
    name: 'navbar',
    data: function(){
        return{
            drawer: true,
        }
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
        border-left: 1px solid #88888855;
    }
    .deposit, .withdraw, .bell{
        width: 25%;
        border-right: 1px solid #88888855;
        height: 100px;
        padding: 25px 10px;
        float: left;
    }
    .left, .right{
        width: 50%;
        float: left;
    }
    .v-icon{
        font-size: 35px !important;
        display: block;
        text-align: center;
        font-weight: 300;
        color: #dddddd;
        margin: 10px;
    }
    .bell{
        width: 15%;
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
        width: 215px;
        height: 30px;
        box-shadow: 0px 2px 2px #333333;
        border-radius: 5px;
    }
}
</style>

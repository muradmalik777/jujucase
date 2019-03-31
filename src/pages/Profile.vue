<template>
    <div class="profile spacing">
        <v-container grid-list-xl text-xs-center>
            <v-layout row wrap>
            <v-flex xs3>
                <div class="profile-overview">
                    <v-img contain :src="require('@/assets/imgs/svg/' + 'Mask Group 5' + '.svg')" class="avatar"></v-img>
                    <div class="stats">
                        <p class="name">Mohssin Link<br/><span class="count">7845966214756</span></p>
                    </div>
                </div>
            </v-flex>

            <v-flex xs3>
                <router-link to="cases" class="selector" :class="{'active': this.$route.path.includes('/profile/cases')}">
                    <div>
                        <p>Cases</p>
                        <div class="icon-container">
                            <v-img contain :src="require('@/assets/imgs/svg/' + 'purse' + '.svg')" class="icon"></v-img>
                        </div>
                    </div>
                </router-link>
            </v-flex>

            <v-flex xs3>
                <router-link to="trades" class="selector" :class="{'active': this.$route.path.includes('/profile/trades')}">
                    <div>
                        <p>Trades</p>
                        <div class="icon-container">
                            <v-img contain :src="require('@/assets/imgs/svg/' + 'support' + '.svg')" class="icon"></v-img>
                        </div>
                    </div>
                </router-link>
            </v-flex>

            <v-flex xs3>
                <router-link to="transactions" class="selector" :class="{'active': this.$route.path.includes('/profile/transactions')}">
                    <div>
                        <p>Transactions</p>
                        <div class="icon-container">
                            <v-img contain :src="require('@/assets/imgs/svg/' + 'money' + '.svg')" class="icon"></v-img>
                        </div>
                    </div>
                </router-link>
            </v-flex>
            </v-layout>
        </v-container>

        <v-container>
            <router-view></router-view>
        </v-container>    
    </div>
</template>
<script>
export default {
    name: 'profile',
    data: function () {
        return {
            text: 'abc'
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

.profile-overview {
    display: inline-block;
    height: 100px;
    .avatar {
        width: 100px;
        height: auto;
        display: inline-block;
        vertical-align: middle;
    }
    .stats {
        display: inline-block;
        vertical-align: middle;
        margin-left: 25px;
        p {
            margin: 0px;
            text-align: left;
        }
        .name {
            font-size: 1.5rem;
            font-weight: 600;
        }
        .count {
            font-size: 1rem;
            color: rgba(255, 255, 255, 0.4);
            font-weight: unset;
        }
    }
}
.selector {
    width: 90%;
    height: 100px;
    background-color: $purple-bright;
    display: inline-block;
    padding: 10px 25px;
    p {
        display: inline-block;
        font-weight: 600;
        width: 50%;
        text-align: left;
    }
    .icon-container {
        display: inline-block;
        width: 50%;
        .icon {
            width: 50px;
            height: 75px;
            display: inline-block;
            vertical-align: middle;
        }
    }
    &.active {
        background-color: $red;
    }
}
</style>

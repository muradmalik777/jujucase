<template>
    <div class="profile spacing">
        <v-container grid-list-xl text-xs-center>
            <v-layout row wrap>
            <v-flex xs3>
                <div class="profile-overview">
                    <v-img contain :src="user.avatar" class="avatar"></v-img>
                    <div class="stats">
                        <p class="name">{{user.user_name}}</p>
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
            <!-- <v-flex xs3>
                <router-link to="trades" class="selector" :class="{'active': this.$route.path.includes('/profile/trades')}">
                    <div>
                        <p>Trades</p>
                        <div class="icon-container">
                            <v-img contain :src="require('@/assets/imgs/svg/' + 'support' + '.svg')" class="icon"></v-img>
                        </div>
                    </div>
                </router-link>
            </v-flex> -->
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

            <v-layout row>
                <router-view></router-view>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
export default {
    name: 'profile',
    data: function () {
        return {
        }
    },
    computed: {
        user: function() {
            return this.$store.state.userData;
        }
    },
    mounted: function(){
        this.$router.push("/profile/cases")
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
        p {
            margin: 0px;
            text-align: left;
        }
        .name {
            font-size: 1.5rem;
            font-weight: 600;
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

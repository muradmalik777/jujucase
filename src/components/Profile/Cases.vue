<template>
    <div>
        <v-container grid-list-md class="section-container p-2">
            <h3 class="uppercase">Recent Winnings</h3>
            <div class="p-2">
                <div class="winning m" v-for="i in 15" :key="i">
                    <v-img contain :src="require('@/assets/imgs/svg/' + 'Ellipse 22' + '.svg')" class="winning-img"></v-img>
                </div>
            </div>
        </v-container>
        <v-container grid-list-md class="section-container">
            <h3 class="uppercase">My Cases</h3>
            <div class="p-2">
                <div class="case m-t-2" v-for="i in myCases" :key="i._id">
                    <h6 class="case-name">{{i.name}}</h6>
                    <v-img contain :src="require('@/assets/imgs/svg/' + 'case2' + '.svg')" class="case-img m-a m-t-2 m-b-2"></v-img> <!-- use Case Image -->
                    <h5 class="case-price">${{i.price.$numberdecimal}}<v-img contain :src="require('@/assets/imgs/svg/coins.svg')" class="coins"></v-img></h5>
                    <v-img contain :src="require('@/assets/imgs/svg/waste-bin.svg')" class="case-delete m-a" @click="deleteCase(i)"></v-img>
                </div>
            </div>
        </v-container>
    </div>
</template>
<script>
import Api from './../../services/Api.js';

export default {
    name: 'cases',
    data: function() {
        return {
            myCases: []
        }
    },
    computed: {
        user: function() {
            return this.$store.state.userData;
        }
    },
    mounted: function() {
        let self = this;
        let endpoint = 'user/' + self.user.steam_id;
        let api = new Api('/cases')
        api.get(endpoint).then(response =>{
            self.myCases = response;
        }).catch(() => {
            let toast = this.$toasted.show("Failed to fetch your cases! Please Refresh!", { 
                theme: "bubble", 
                position: "top-right", 
                duration : 5000
            });
        })
    },
    methods: {
        deleteCase: function(oneCase) {
            let self = this;
            let api = new Api('/cases')
            api.delete(oneCase._id).then(response =>{
                self.myCases = self.myCases.filter(function(value, index, arr) {
                    return value._id != oneCase._id;
                });
            }).catch(() => {
                let toast = this.$toasted.show("Failed to delete case!", { 
                    theme: "bubble", 
                    position: "top-right", 
                    duration : 5000
                });
            })
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

.section-container {
    text-align: left !important;
    .winning {
        display: inline-block;
        .winning-img {
            width: 5rem;
        }
    }
    .case {
        width: 200px;
        text-align: center;
        display: inline-block;
        .case-name {
            font-size: 1rem;
        }
        .case-img {
            width: 75%;
            height: auto;
        }
        .case-price {
            font-size: 1rem;
            display: inline-block;
            vertical-align: middle;
            .coins {
                margin-left: 10px;
                width: 15px;
                height: auto;
                display: inline-block;
                vertical-align: middle;
            }
        }
        .case-delete {
            width: 25px;
            height: auto;
            margin-top: 10px;
            cursor: pointer;
            &:hover {
                background-color: rgba(#000, 0.2);
            }
        }
    }
}
</style>

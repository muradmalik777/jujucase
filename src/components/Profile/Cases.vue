<template>
    <v-container grid-list-md fluid class="spacing">
        <v-layout mb-3 row wrap class="section-container">
            <v-flex xs12>
                <h3 class="uppercase">Recent Winnings</h3>
            </v-flex>
            <v-flex xs12>
                <div class="winning m" v-for="(item, index) in itemsWon" :key="index">
                    <v-img contain :src="item.item.iconUrl" class="winning-img"></v-img>
                </div>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="section-container">
            <v-flex xs12>
                <h3 class="uppercase">My Cases</h3>
            </v-flex>
            <v-flex xs12>
                <div class="case m-t-2" v-for="i in myCases" :key="i._id">
                    <h6 class="case-name">{{i.name}}</h6>
                    <v-img contain :src="require('@/assets/imgs/cases/' + i.case_image)" class="case-img m-a m-t-2 m-b-2"></v-img> <!-- use Case Image -->
                    <h5 class="case-price">${{i.price}}<v-img contain :src="require('@/assets/imgs/svg/coins.svg')" class="coins"></v-img></h5>
                    <v-img contain :src="require('@/assets/imgs/svg/waste-bin.svg')" class="case-delete m-a" @click="deleteCase(i)"></v-img>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import Api from './../../services/Api.js';

export default {
    name: 'cases',
    data: function() {
        return {
            myCases: [],
            itemsWon: []
        }
    },
    computed: {
        user: function() {
            return this.$store.state.userData;
        }
    },
    mounted: function() {
        this.getWinnings()
        this.getUserCases()
    },
    methods: {
        getWinnings: function(){
            let $object = new Api('/user/winning')
            let params = { user_id: this.$store.state.userData._id }
            $object.post(params).then(response => {
                this.itemsWon = response.items
                this.totalWinnings = response.total_count
            })
        },
        getUserCases: function(){
            let $object = new Api('/cases/user')
            let params = { user_id: this.$store.state.userData._id }
            $object.post(params).then(response => {
                this.myCases = response
            })
        },
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
        padding-left: 10px;
        padding-top: 25px; 
        display: block;
        float: left;
        background: url('../../assets/imgs/svg/winning-circle.svg');
        background-size: 120px;
        width: 120px;
        height: 120px;

        .winning-img {
            width: 100%;
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

<template>
    <v-container fluid class="case-creator spacing">
        <v-layout row pa-3>
            <v-flex xs12 class="case-name">
                <h3 class="uppercase m-b">Case Name</h3>
                <v-text-field class="case-name-input" placeholder="Enter case name" type="text" full-width v-model="case_name"></v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row pa-3 mt-5>
            <v-flex class="case">
                <h3 class="uppercase">case picture</h3>
                <v-img v-for="image in 5" :key="image" :src="casePicture(image)" @click="selectPicture(casePicture(image))" class="case-picture m-t-3"></v-img>
            </v-flex>
        </v-layout>
        <v-layout pl-3 pb-0 mt-5>
            <v-flex>
                <h3 class="uppercase">add skins</h3>
            </v-flex>
        </v-layout>
        <v-layout row pa-3>
            <v-flex class="search">
                <v-autocomplete class="skin-search m-t-2" placeholder="search" v-model="search" :items="search_result"></v-autocomplete>
            </v-flex>
            <!-- <v-flex xs1 class="select">
                <v-select background-color="#73337a" color="#fff" :value="items[0]" :items="items"></v-select>
            </v-flex> -->
        </v-layout>

        <v-layout row pa-3 mt-5>
            <v-flex xs12>
                <div class="skin m-t-3" v-for="item in 8" :key="item" @click="selectSkin(item)">
                    <div class="price">
                        <h4 class="t-c capitalize">$0.07 <i class="fas fa-coins coins"></i></h4>
                    </div>
                    <v-img contain :src="require('@/assets/imgs/svg/skin.svg')" class="skin-image"></v-img>
                    <div class="name">
                        <h4>item name fjkd fdg gnfdksjg kfcgl f</h4>
                    </div>
                    <div class="action">
                        <v-img contain :src="require('@/assets/imgs/svg/waste-bin.svg')" class="delete-icon"></v-img>
                    </div>
                </div>
            </v-flex>
        </v-layout>

        <v-layout row pa-3 mt-5 wrap>
            <h3 class="uppercase">Choose Odds</h3>
            <v-flex v-for="item in all_skins" :key="item.id" xs12>
                <div class="odd">
                    <v-img contain :src="require('@/assets/imgs/svg/skin.svg')" class="odd-image"></v-img>
                    <div class="name">
                        <h4>{{item.name}}</h4>
                    </div>
                    <div class="price">
                        <h4 class="t-c capitalize">${{item.price}}</h4>
                    </div>
                    <div class="percentage">
                        <v-text-field class="odd-percentage" placeholder="50%" type="text" full-width v-model="item.odd"></v-text-field>
                    </div>
                    <div class="action">
                        <v-img contain :src="require('@/assets/imgs/svg/waste-bin.svg')" class="delete-icon"></v-img>
                    </div>
                </div>
            </v-flex>
            <div class="total_odds">
                <h4 class="t-c capitalize">Total Odds : 100% ({{remaining_odds}}% left)</h4>
            </div>
            <div class="case_price">
                <h4 class="t-c capitalize">Case Price : ${{case_price}}</h4>
            </div>
            <v-btn class="button green-btn" @click.stop="showDialog = true">Create Odds</v-btn>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    name: 'casecreator',
    data: function(){
        return{
            case_name: null,
            search: null,
            search_result: [],
            all_skins: [
                {
                    id: 1,
                    image: '@/assets/imgs/svg/skin.svg',
                    name: 'Electronics | MSI | GTX 1070 ARMOR 8G OC',
                    price: 13500,
                    odd: 50
                },
                {
                    id: 2,
                    image: '@/assets/imgs/svg/skin.svg',
                    name: 'Electronics | MSI | GTX 1070 ARMOR 8G OC',
                    price: 13500,
                    odd: 50
                }
            ],
            items: ["Asc", "Desc"],
        }
    },
    computed: {
        remaining_odds: function() {
            let temp = 100;
            this.all_skins.forEach(element => {
                temp = temp - element.odd;
            });
            return temp;
        },
        case_price: function() {
            return 14000
        }
    },
    methods: {
        casePicture: function(){
            return require("@/assets/imgs/svg/case2.svg")
        }
    }
}
</script>
<style lang="scss">

.total_odds, .case_price {
    background-color: #73337a;
    padding: 1rem 4rem;
    margin: 0 2rem 0 0;
}

.green-btn {
    background-color: #4caf50 !important;
}
.odd {
    margin: 1rem 0;
    background-color: #73337a;
    padding: 0 1rem;
    div {
        display: inline-block;
        vertical-align: middle;
    }
    .name {
        margin: 0 0 0 4rem;
        width: calc(50% - 4rem);
    }
    .price {
        width: calc(10% - 4rem);
        margin: 0 4rem;
    }
    .odd-image {
        // width: 20%;
        vertical-align: middle;
        width: 5rem;
        height: auto;
        display: inline-block;
    }
    .percentage {
        color: #fff !important;
        width: calc(20% - 4rem);
        margin: 0 4rem;
        .odd-percentage {
            background-color: rgba(#000, 0.5);
            color: #fff !important;
        }
    }
    .action {
        width: 5%;
        text-align: center;
        .delete-icon {
            vertical-align: middle;
            width: 2rem;
            height: auto;
        }
    }

}
.case-creator{
    h3{
        padding-left: 1rem;
    }
    .case-name{
        .case-name-input{
            input{
                padding: 30px 10px;
                font-size: 16px;
                background: #73337a;
                color: #cccccc !important;
                caret-color: #cccccc;

                &::placeholder{
                    color: #aaaaaa;
                    text-transform: capitalize;
                }
            }
        }
    }
    .case{
        min-height: 150px;

        .case-picture{
            width: 150px;
            height: 100px;
            margin: 5rem 3rem 2rem 10px;
            display: block;
            float: left;
            cursor: pointer;
        }
    }
    // .select{
    //     .v-input{
    //         margin-top: 2rem;
    //         .v-select__selections{
    //             height: 60px;
    //             padding: 0px 15px;
    //         }
    //         .v-input__append-inner{
    //             display: none;
    //         }
    //     }
    // }
    .skin{
        width: 23%;
        min-height: 200px;
        display: inline-block;
        margin: 3% 1%;
        background: #67266e77;
        position: relative;

        .price{
            background: #73337a77;
            padding: 30px 10px;

            .coins{
                color: gold;
            }
        }
        .skin-image{
            display: block;
            margin: 30px auto;
            width: 200px;
            height: 200px;
            cursor: pointer;
        }
        .name{
            width: 80%;
            float: left;
            padding: 20px;
            cursor: pointer;
        }
        .action{
            position: absolute;
            bottom: 0px;
            right: 0px;
            padding: 10px 20px;
            background: #99999967;
            cursor: pointer;

            &:hover{
                background: #99999911;
            }

            .delete-icon{
                width: 20px;
                height: 30px;
                display: block;
            }
        }
    }
}
</style>

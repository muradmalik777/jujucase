<template>
    <v-container fluid class="case-creator spacing">
        <v-layout row>
            <v-flex xs12>
                <div class="case-name">
                <h3 class="uppercase">Case Name</h3>
                <v-text-field class="case-name-input" placeholder="Enter case name" type="text" full-width v-model="case_name"></v-text-field>
                </div>
                <div class="case m-t-2">
                    <h3 class="uppercase m-b-2">case picture</h3>
                    <v-img v-for="image in 5" :key="image" :src="casePicture(image)" class="case-picture"></v-img>
                </div>
                <div class="search m-t-2">
                    <h3 class="uppercase m-b-2">add skins</h3>
                    <v-autocomplete class="skin-search" placeholder="search" v-model="search" :items="search_result"></v-autocomplete>
                </div>
            </v-flex>
        </v-layout>

        <v-layout row>
            <v-flex xs12>
                <div class="skin m-t-3" v-for="item in 10" :key="item">
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
            all_skins: null
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
.case-creator{
    h3{
        padding-left: 14px;
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
        width: 100%;
        min-height: 150px;
        overflow: auto;
        padding: 30px 15px;
        float: left;
        display: block;

        .case-picture{
            width: 150px;
            height: 100px;
            margin-right: 5rem;
            display: block;
            float: left;
            cursor: pointer;
        }
    }
    .search{
        width: 100%;
        display: block;
        float: left;
        margin: 0px 1%;

        .skin-search{
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
            .v-input__append-inner{
                display: none;
            }
        }
    }
    .skin{
        width: 23%;
        float: left;
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

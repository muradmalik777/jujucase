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
                    <v-autocomplete class="skin-search" placeholder="search" v-model="model" :items="states"></v-autocomplete>
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
                    color: #999999;
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

        .skin-search{
            input{
                padding: 30px 10px;
                font-size: 16px;
                background: #73337a;
                color: #cccccc !important;
                caret-color: #cccccc;

                &::placeholder{
                    color: #999999;
                    text-transform: capitalize;
                }
            }
            .v-input__append-inner{
                display: none;
            }
        }
    }
}
</style>

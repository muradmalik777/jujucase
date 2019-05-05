<template>
    <v-container grid-list-md fluid class="case-creator spacing">
        <v-layout row>
            <v-flex xs12 class="case-name">
                <h3 class="uppercase m-b">Case Name</h3>
                <v-text-field class="case-name-input" placeholder="Enter case name" type="text" full-width v-model="new_case.name"></v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12>
                <h3 class="uppercase">case picture</h3>
            </v-flex>
            <v-flex xs12 md4 lg2 v-for="image in 2" :key="image" class="case-image-box" :class="{'selected': selectedImage==image}">
                <v-img :src="casePicture(image)" @click="selectPicture(image)" class="case-picture m-t-3"></v-img>
            </v-flex>
        </v-layout>
        <v-layout row wrap pa-3>
            <v-flex xs12>
                <h3 class="uppercase">add skins</h3>
            </v-flex>
            <v-flex xs10 class="search">
                <v-autocomplete class="skin-search m-t" placeholder="search" v-model="search" :items="search_result"></v-autocomplete>
            </v-flex>
            <v-flex xs1 class="select">
                <v-select background-color="#73337a" color="#fff" :value="items[0]" :items="items"></v-select>
            </v-flex>
        </v-layout>

        <v-layout row wrap pa-3 class="items">
            <v-flex xs12 md4 lg3 class="m-t-3 pointer" v-for="(item, index) in allSkins" :key="index" @click="selectSkin(item)">
                <div class="skin">
                    <div class="price">
                        <h4 class="t-c capitalize">${{item.price}} <i class="fas fa-coins coins"></i></h4>
                    </div>
                    <v-img contain :src="item.iconUrl" class="skin-image"></v-img>
                    <div class="name">
                        <h4>{{item.marketHashName}}</h4>
                    </div>
                    <div class="action">
                        <v-img contain :src="require('@/assets/imgs/svg/waste-bin.svg')" class="delete-icon"></v-img>
                    </div>
                </div>
            </v-flex>
            <v-flex>
                
            </v-flex>
        </v-layout>

        <v-layout row pa-3 mt-5 wrap>
            <h3 class="uppercase">Choose Odds</h3>
            <v-flex v-for="(item, index) in selectedSkins" :key="item.id" xs12>
                <div class="odd">
                    <v-img contain :src="item.iconUrl" class="odd-image"></v-img>
                    <div class="name">
                        <h4>{{item.marketHashName}}</h4>
                    </div>
                    <div class="price">
                        <h4 class="t-c capitalize">${{item.price}}</h4>
                    </div>
                    <div class="percentage">
                        <v-text-field class="odd-percentage" placeholder="50%" type="text" full-width v-model="itemOdds[index]"></v-text-field>
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
            <v-btn class="button green-btn" @click="createCase">Create Case</v-btn>
        </v-layout>
    </v-container>
</template>
<script>
import Api from '@/services/Api'
export default {
    name: 'casecreator',
    data: function(){
        return{
            new_case: {
                name: "",
                price: 0,
                case_image: "",
                items:[]
            },
            page: 1,
            selectedImage: null,
            search: null,
            search_result: [],
            allSkins: [],
            selectedSkins: [],
            itemOdds: [],
            items: ["Asc", "Desc"],
        }
    },
    created: function(){
        this.getAllItems()
    },
    computed: {
        remaining_odds: function() {
            let temp = 100;
            this.itemOdds.forEach(element => {
                temp = temp - element;
            });
            return temp;
        },
        case_price: function() {
            return this.new_case.price;
        }
    },
    methods: {
        casePicture: function(image){
            return require("@/assets/imgs/svg/case"+image+".svg")
        },
        selectPicture: function(image){
            this.new_case.case_image = "@/assets/imgs/svg/case"+image+".svg"
            this.selectedImage = image
        },
        getAllItems: function(){
            let $items = new Api('/items')
            let params = { p : 1 }
            $items.getList(params).then(resp => {
                console.log(resp)
                this.allSkins = resp.items
            })
        },
        selectSkin: function(skin){
            this.selectedSkins.push(skin);
            this.new_case.price += skin.price;
            this.new_case.items.push(skin);
            this.itemOdds.push(100 / this.selectedSkins.length);
        },
        createCase: function() {
            let $cases = new Api('/cases');
            let self = this;
            self.new_case.items.forEach(function(element, index) {
                element.odds = String(self.itemOdds[index]);
            });
            let data = self.new_case;
            $cases.post(data, {}).then(resp => {
                debugger;
            }).catch(function() {
                debugger;
            })
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
.selected{
    background: #4caf50;
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
    .case-image-box{
        margin: 1rem 1rem;
        min-height: 150px;
        .case-picture{
            width: 150px;
            height: 100px;
            cursor: pointer;
            display: block;
            margin: 1.5rem auto;
        }
    }
    .select{
        margin-top: .7rem;
    }
    .skin{
        min-height: 370px;
        background: #67266e77;
        position: relative;
        overflow-y: auto;
        .price{
            background: #73337a77;
            padding: 20px 10px;

            .coins{
                color: gold;
            }
        }
        .skin-image{
            display: block;
            margin: 20px auto;
            width: 200px;
            height: 200px;
        }
        .name{
            width: 80%;
            float: left;
            padding: 10px;
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

<template>
    <div class="spacing" v-if="oneCase != null">
        <div>
            <div class="name-wrapper">
                <h2 class="uppercase heading">{{oneCase.name}}</h2>
                <p class="red-text">{{oneCase.creator}}</p>
            </div>
            <div class="price-wrapper">
                <h1 class="price">${{oneCase.price.$numberDecimal}}</h1>
                <p class="red-text">Cases Opened: {{oneCase.opened}}</p>    
            </div>
        </div>

        <div class="spinner-wrapper">
            <div class="spinner">
                <div class="wrapper">
                    <div class="window">
                        <ul class="list">
                            <li v-for="(item, index) in spinnerItems" :key="index"><v-img contain class="skin-image" :src="item.iconUrl"></v-img></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="spinner-controls">
                <v-btn class="button green-btn" @click.stop="showDialog = true">Open Case</v-btn>
                <v-btn color="button" class="button spin-button">Test Spin</v-btn>
            </div>
        </div>

        <v-container grid-list-lg fluid class="case-container">
            <v-layout row wrap>
                <v-flex xs12>
                    <h3 class="uppercase">This Case Contains</h3>
                </v-flex>
                <v-flex xs12 md4 lg3 v-for="(item, index) in oneCase.items" :key="index">
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
            </v-layout>
        </v-container>

        <v-container grid-list-md class="section-container">
            <h3 class="uppercase">Recent Winnings</h3>
            <div class="p-2">
                <div class="winning m" v-for="i in 8" :key="i">
                    <v-img contain :src="require('@/assets/imgs/svg/' + 'Ellipse 22' + '.svg')" class="winning-img"></v-img>
                </div>
            </div>
        </v-container>

        <v-dialog width="800px" v-model="showDialog">
            <v-card class="dialog">
                <h2 class="t-c">Confirm Order</h2>
                <v-img contain :src="require('@/assets/imgs/svg/case2.svg')" class="case-open-img"></v-img>
                <div class="case-name">
                    <div class="left-wrapper">
                        <p class="bold">Case Name:</p>
                    </div>
                    <div class="right-wrapper">
                        <p>{{oneCase.name}}</p>
                    </div>
                </div>
                <div class="case-prices">
                    <div class="left-wrapper">
                        <p class="bold">Case Price:</p>
                    </div>
                    <div class="right-wrapper">
                        <p class="icon">Case Price: ${{oneCase.price}}</p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<p>Cases Open Count: {{oneCase.opened}}</p>
                        <br/>
                        <p v-if="oneCase.tax">Affiliate Tax: ${{oneCase.tax}}</p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<p v-if="oneCase.tax || oneCase.affiliateCut">Total: ${{oneCase.price + oneCase.tax + oneCase}}</p>
                        <br/>
                        <p v-if="oneCase.affiliateCut">Tax Percentage: {{oneCase.affiliateCut}}%</p>
                    </div>
                </div>
                <div class="case-hash">
                    <div class="left-wrapper">
                        <p class="bold">Case Hash #1:</p>
                    </div>
                    <div class="right-wrapper">
                        <p>{{oneCase.code}}</p>
                    </div>
                </div>

                <div class="case-buttons">
                    <v-btn class="button" @click="showDialog = false">Close</v-btn>
                    <v-btn color="button" @click="newHash()">New Hash</v-btn>
                    <v-btn class="button green-btn"  @click="buyCase()">Buy Case</v-btn>
                </div>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
import Api from '../services/Api.js';
import * as $ from 'jquery'; window["$"] = $; window["jQuery"] = $;

export default {
    name: 'SingleCase',
    data: function () {
        let data = this.$store.state.caseBeingOpened
        return {
            number: 1,
            showDialog: false,
            oneCase: data,
            spinnerItems: []
        }
    },
    mounted: function() {
        // let i = 0;
        // for (i = 0; i < 6; i++) {
        //     $(".list li").clone().appendTo(".list");
        // }
        this.spinnerItems = this.shuffleItems(this.createCaseItems(this.oneCase.items))
        $('.spin-button').click(function () {
            $('.window').css({
                right: "0"
            })
            $('.list li').css({
                border: '4px solid transparent'
            })
            function selfRandom(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            var x = selfRandom(50, 100);
            $('.list li:eq('+50+')').css({
                border:'3px solid #4caf50'
            })
            $('.window').animate({
                right: ((50*130)+(120*8-12)-119)
            }, 5000);
        });
    },
    methods: {
        buyCase: function () {
            this.showDialog = false;
        },
        newHash: function () {
            this.showDialog = false;
        },
        getCaseDetails: function(){
            let api = new Api('/cases');
            api.get(this.$route.params.case_id).then(response =>{
                self.oneCase = response;
            }).catch(() => {

            })
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
@import '../assets/scss/util.scss';

.dialog {
    background-color: $purple-dull;
    padding: 2rem;
    .case-open-img {
        width: 15rem;
        height: auto;
        display: block;
        margin: 2rem auto;
    }
    .case-name, .case-prices, .case-hash {
        padding: 1rem;
        border-top: 1px solid rgba(#fff, 0.15);
    }
    .left-wrapper {
        width: 25%;
        display: inline-block;
    }
    .right-wrapper {
        width: 75%;
        display: inline-block;
        p {
            vertical-align: top;
        }
    }
    p {
        font-size: 1rem;
        display: inline-block;
    }
    .case-hash {
        border-bottom: 1px solid rgba(#fff, 0.15);
    }
    .case-buttons {
        margin-top: 1rem;
        width: fit-content;
        margin: 1rem auto 1rem auto;
    }
}
.skin-image{
    display: block;
    margin: 20px auto;
    width: 150px;
    height: 100px;
}
.name-wrapper {
    width: 50%;
    display: inline-block;
    text-align: left;
}

.price-wrapper {
    width: 50%;
    display: inline-block;
    text-align: right;
}

.spinner-wrapper {
    margin: 4rem 0px;
    .spinner {
        width: 100%;
        height: 163px;
        background: #73337a77;
        li {
            list-style: none;
            display: inline-block;
            float: left;
        }

        .window {
            overflow: hidden;
            position: relative;
            width: 25000px;
            height: 163px;
            right: 0px;
            padding: 10px;
        }

        .wrapper {
            position: relative;
            margin: auto;
            width: 100%;
            overflow-x: hidden;
            overflow-y: hidden;
        }

        .list {
            position: relative;
            margin-left: 230;
            display: inline-block;
        }

        .list li {
            border: 4px solid transparent ;
        }
        .list li .v-img {
            width: 130px;
            height: 130px;
        }
    }
    .spinner-controls {
        display: block;
        width: fit-content;
        margin: 2rem auto;
    }
}

.heading {
    display: inline-block;
}
.speaker-icon {
    width: 50px;
    height: auto;
    display: inline-block;
    vertical-align: middle;
    color: #fff !important;
}

.red-text {
    color: $red;
    margin: 0px;
    font-size: 0.75rem;
}

.case-container {
    margin: 4rem 0px;
    h3 {
        margin: 2rem 0px;
    }
}
.section-container {
    .winning {
        display: inline-block;
        .winning-img {
            width: 5rem;
        }
    }
}
.button {
    background-color: $purple-bright-extra !important;
    color: #fff;
    border-radius: 0px;
    font-weight: 600;
    min-height: 50px;
}

.green-btn {
    background-color: $green-dull !important;
}

.number-input {
    background-color: #fff;
    color: $purple-dark;
    padding: 0px 0px 0px 10px;
    min-height: 50px;
    width: 50px;
    margin: 0px 8px;
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
</style>

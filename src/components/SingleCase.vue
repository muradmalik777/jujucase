<template>
    <div class="spacing" v-if="oneCase != null">
        <div>
            <div class="name-wrapper">
                <h2 class="uppercase heading">{{oneCase.name}}</h2>

                <v-icon class="speaker-icon">volume_up</v-icon>
                <p class="red-text">{{oneCase.creator}}</p>
            </div>
            <div class="price-wrapper">
                <h1 class="price">${{oneCase.price.$numberDecimal}}</h1>
                <p class="red-text">Cases Opened: {{oneCase.opened}}</p>    
            </div>
        </div>

        <div class="spinner-wrapper">
            <div class="bg-purple-dull spinner">
                <div class="wrapper">
                    <div class="window">
                        <ul class="list">
                            
                        </ul>
                        <ul class="list">
                            <li><img src="../assets/imgs/case.svg" alt=""></li>
                            <li><img src="../assets/imgs/case.svg" alt=""></li>
                            <li><img src="../assets/imgs/case.svg" alt=""></li>
                            <li><img src="../assets/imgs/case.svg" alt=""></li>
                            <li><img src="../assets/imgs/case.svg" alt=""></li>
                            <li><img src="../assets/imgs/case.svg" alt=""></li>
                        </ul>
                    </div>
                </div>
                <p style="text-align: center">
                <div class="win">
                    <ul>
                        
                    </ul>
                </div>
            </div>
            <div class="spinner-controls">
                <v-btn class="button green-btn" @click.stop="showDialog = true">Open Case</v-btn>
                <v-btn color="button" class="button">Test Spin</v-btn>
                <input class="number-input" type="number" v-model="number">
            </div>
        </div>

        <div class="case-container">
            <h3 class="uppercase">This Case Contains</h3>
            <CaseContains :caseIcon="oneCase.case_image"/>
        </div>

        <v-container grid-list-md class="section-container">
            <h3 class="uppercase">Recent Winnings</h3>
            <div class="p-2">
                <div class="winning m" v-for="i in 8" :key="i">
                    <v-img contain :src="require('@/assets/imgs/svg/' + 'Ellipse 22' + '.svg')" class="winning-img"></v-img>
                </div>
            </div>
        </v-container>

        <v-dialog width="50%" v-model="showDialog">
            <div class="dialog">
                <h2 class="t-c">Confirm Order</h2>
                <v-img contain :src="require('@/assets/imgs/case.svg')" class="case-open-img"></v-img>
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
                        <p>Case Price: ${{oneCase.price.$numberDecimal}}</p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<p>Cases Open Count: {{oneCase.opened}}</p>
                        <br/>
                        <p v-if="oneCase.tax">Affiliate Tax: ${{oneCase.tax.$numberDecimal}}</p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<p v-if="oneCase.tax || oneCase.affiliateCut">Total: ${{oneCase.price.$numberDecimal + oneCase.tax.$numberDecimal + oneCase.affiliateCut.$numberDecimal}}</p>
                        <br/>
                        <p v-if="oneCase.affiliateCut">Tax Percentage: {{oneCase.affiliateCut.$numberDecimal}}%</p>
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
            </div>
        </v-dialog>
    </div>
</template>
<script>
import CaseContains from '@/components/CaseContains';
import Api from '../services/Api.js';
import * as $ from 'jquery'; window["$"] = $; window["jQuery"] = $;

export default {
    name: 'SingleCase',
    components: {
        CaseContains
    },
    mounted: function() {
        let self = this;
        let api = new Api('/cases');
        api.get(this.$route.params.case_id).then(response =>{
            self.oneCase = response;
        }).catch(() => {

        })
    },
    mounted: function() {
        let i = 0;
        for (i = 0; i < 3; i++) {
            $(".list li").clone().appendTo(".list");
        }
        $('.button').click(function () {
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
            $('.list li:eq('+x+')').css({
                border:'3px solid #4caf50'
            })
            $('.window').animate({
                right: ((x*130)+(x*8-12)-119)
            }, 10000);
        });
    },
    data: function () {
        return {
            number: 1,
            showDialog: false,
            oneCase: null
        }
    },
    methods: {
        buyCase: function () {
            this.showDialog = false;
        },
        newHash: function () {
            this.showDialog = false;
        },
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
@import '../assets/scss/util.scss';

.dialog {
    background-color: $purple-dull;
    padding: 2rem 0px;
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
    // .case-name {
    //     p {
    //         display: inline-block;
    //         font-size: 1rem;
    //     }
    // }
    // .case-prices {
    //     p {
    //         display: inline-block;
    //         font-size: 1rem;
    //     }
    // }
    .case-hash {
        border-bottom: 1px solid rgba(#fff, 0.15);
    }
    .case-buttons {
        margin-top: 1rem;
        width: fit-content;
        margin: 1rem auto 1rem auto;
    }
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
        height: 143px;
        li {
            list-style: none;
            display: inline-block;
            float: left;
        }

        .window {
            overflow: hidden;
            position: relative;
            width: 25000px;
            height: 143px;
            right: 0px;
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
        .list li img {
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
</style>

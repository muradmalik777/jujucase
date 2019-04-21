<template>
    <div class="spacing">
        <div>
            <div class="name-wrapper">
                <h2 class="uppercase heading">Werwer</h2>
                <v-img contain :src="require('@/assets/imgs/svg/case2.svg')" class="speaker-icon"></v-img>
                <p class="red-text">James Hetfield</p>
            </div>
            <div class="price-wrapper">
                <h1 class="price">$0.05</h1>
                <p class="red-text">Cases Opened: 3</p>    
            </div>
        </div>

        <div class="spinner-wrapper">
            <div class="bg-purple-dull spinner">
            
            </div>
            <div class="spinner-controls">
                <v-btn class="button green-btn" @click.stop="showDialog = true">Open Case</v-btn>
                <v-btn color="button">Test Spin</v-btn>
                <input class="number-input" type="number" v-model="number">
            </div>
        </div>

        <div class="case-container">
            <h3 class="uppercase">This Case Contains</h3>
            <CaseContains/>
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
                        <p>WerWer</p>
                    </div>
                </div>
                <div class="case-prices">
                    <div class="left-wrapper">
                        <p class="bold">Case Price:</p>
                    </div>
                    <div class="right-wrapper">
                        <p>Case Price: $0.5451</p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<p>Cases Open Count: 1</p>
                        <br/>
                        <p>Affiliate Tax: $0</p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<p>Total: $0.5451</p>
                        <br/>
                        <p>Tax Percentage: 0%</p>
                    </div>
                </div>
                <div class="case-hash">
                    <div class="left-wrapper">
                        <p class="bold">Case Hash #1:</p>
                    </div>
                    <div class="right-wrapper">
                        <p>U2FsdGvJbBHKbhjLLgg55djhHGH</p>
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

export default {
    name: 'SingleCase',
    // props: [caseId],
    components: {
        CaseContains
    },
    created: function () {
        // console.log(this.$props.caseId);
    },
    data: function () {
        return {
            number: 1,
            showDialog: false
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
        height: 200px;
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

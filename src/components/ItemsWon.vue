<template>
    <div class="spacing">
        <v-container grid-list-xs class="section-container">
                <h2 class="uppercase m-b">Items Won</h2>
            <v-layout row wrap>
                <v-flex v-for="(item, index) in itemsWon" :key="index" xs3>
                    <div class="case-contains">
                        <div class="title-container">
                            <p class="uppercase">odds: {{item.item.odds}}%</p>
                        </div>
                        <v-img contain :src="item.item.iconUrl" class="case-icon"></v-img>
                        <div class="footer-wrapper">
                            <p class="">{{item.item.marketHashName}}</p>
                        </div>
                    </div>

                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
import Api from "@/services/Api.js";

export default {
    name: 'ItemsWon',
    data: function () {
        return {
            itemsWon: [],
            totalWinnings: 0
        }
    },
    created: function(){
        this.getWinnings()
    },
    methods: {
        getWinnings: function(){
            let $object = new Api('/user/winning')
            let params = { user_id: this.$store.state.userData._id }
            $object.post(params).then(response => {
                this.itemsWon = response.items
                this.totalWinnings = response.total_count
            })
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

.section-container {
    padding: 0px;
    .case-contains {
        background-color: #67266e80;
        width: 95%;
        height: 350px;
        position: relative;
        margin-top: 1.5rem;
        .title-container {
            background-color: #67266e80;
            padding: 1rem;
            p {
                margin: 0px;
                font-size: 1rem;
            }
        }
        .case-icon {
            width: 50%;
            height: auto;
            margin: 6rem auto;
        }
        .footer-wrapper {
            position: absolute;
            bottom: 1rem;
            padding: 0px 0px 0px 1rem;
            min-height: 50px;
            p {
                display: inline-block;
                width: 80%;
                font-size: 1rem;
                margin-bottom: 0;
            }
        }

    }
}

</style>

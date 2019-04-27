<template>
    <div>
        <v-container grid-list-md class="section-container">
            <v-layout row wrap>
                <v-flex v-for="item in caseItems" :key="item._id" xs3>
                    
                    <div class="case-contains">
                        <div class="title-container">
                            <p class="uppercase">Range: {{item.lrange}}% - {{item.hrange}}%</p>
                            <p class="uppercase">Odds: {{item.percentage}}%</p>
                        </div>
                        <v-img contain :src="require('@/assets/imgs/svg/case2.svg')" class="case-icon"></v-img> <!-- pass case-icon as prop from parent -->
                        <div class="footer-wrapper">
                            <p class="">{{item.market_hash_name}}</p>
                            <div class="delete">
                                <v-img contain :src="require('@/assets/imgs/svg/info.svg')" class="delete-icon"></v-img>
                            </div>
                        </div>
                    </div>

                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
import Api from '../services/Api.js';

export default {
    name: 'CaseContains',
    props: ['caseIcon'],
    data: function() {
        return {
            caseItems: [],
        }
    },
    created: function () {
        let self = this;
        let api = new Api('/cases');
        api.get(this.$route.params.case_id + '/items').then(response =>{
            self.caseItems = response;
            debugger;
        }).catch(() => {

        })
    },
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

.section-container {
    padding: 0px;
    .case-contains {
        background-color: rgba($purple-dull, 0.75);
        .title-container {
            background-color: $purple-dull;
            padding: 1rem;
            p {
                margin: 0px;
                font-size: 1rem;
            }
        }
        .case-icon {
            width: 50%;
            height: auto;
            margin: 4rem auto;
        }
        .footer-wrapper {
            position: relative;
            padding: 0px 0px 0px 1rem;
            min-height: 50px;
            p {
                display: inline-block;
                width: 75%;
                font-size: 1rem;
                margin-bottom: 0;
            }
            .delete {
                display: inline-block;
                width: calc(25px + 1.5rem);
                height: calc(25px + 1.5rem);
                position: absolute;
                right: 0;
                bottom: 0;
                background-color: rgba(#fff, 0.1);
                padding: 0.75rem;
                .delete-icon {
                    width: 25px;
                    height: auto;
                    vertical-align: middle;
                    margin: auto;
                }
            }
        }

    }
}

</style>

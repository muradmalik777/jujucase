<template>
    <div>
        <v-container grid-list-md class="section-container">
            <v-layout row wrap>
                <v-flex v-for="i in 4" :key="i" xs3>
                    
                    <div class="case-contains">
                        <div class="title-container">
                            <p class="uppercase">Range: 51.0001% - 100%</p>
                            <p class="uppercase">Odds: 49%</p>
                        </div>
                        <v-img contain :src="require('@/assets/imgs/svg/case2.svg')" class="case-icon"></v-img>
                        <div class="footer-wrapper">
                            <p class="">FAMAS | Commando <br/>(Well-Worn)</p>
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
export default {
    name: 'CaseContains',
    // props: [caseId],
    created: function () {
    },
    data: function () {
        return {
        }
    }
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

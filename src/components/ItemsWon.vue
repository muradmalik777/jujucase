<template>
    <div class="spacing">
        <v-container grid-list-md class="section-container">
                <h3 class="uppercase">Items Won</h3>
            <v-layout row wrap>
                <v-flex v-for="i in 10" :key="i" xs3>
                    
                    <div class="case-contains">
                        <div class="title-container">
                            <p class="uppercase">Range: 51.0001% - 100%</p>
                            <p class="uppercase">Odds: 49%</p>
                        </div>
                        <v-img contain :src="require('@/assets/imgs/svg/case2.svg')" class="case-icon"></v-img>
                        <div class="footer-wrapper">
                            <p class="">FAMAS | Commando <br/>(Well-Worn)</p>
                        </div>
                    </div>

                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
export default {
    name: 'ItemsWon',
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
        width: 95%;
        height: 400px;
        position: relative;
        margin-top: 1.5rem;
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
            margin: 6rem auto;
        }
        .footer-wrapper {
            position: absolute;
            bottom: 1rem;
            padding: 0px 0px 0px 1rem;
            min-height: 50px;
            p {
                display: inline-block;
                width: 75%;
                font-size: 1rem;
                margin-bottom: 0;
            }
        }

    }
}

</style>

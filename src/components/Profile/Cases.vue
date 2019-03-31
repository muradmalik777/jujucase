<template>
    <div>
        <v-container grid-list-md class="section-container p-2">
            <h3 class="uppercase">Recent Winnings</h3>
            <div class="p-2">
                <div class="winning m" v-for="i in 15" :key="i">
                    <v-img contain :src="require('@/assets/imgs/svg/' + 'Ellipse 22' + '.svg')" class="winning-img"></v-img>
                </div>
            </div>
        </v-container>
        <v-container grid-list-md class="section-container">
            <h3 class="uppercase">My Cases</h3>
            <div class="p-2">
                <div class="case m-t-2" v-for="i in 8" :key="i">
                    <h6 class="case-name">Luck Boi</h6>
                    <v-img contain :src="require('@/assets/imgs/svg/' + 'case2' + '.svg')" class="case-img m-a m-t-2 m-b-2"></v-img>
                    <h5 class="case-price">$135.01<v-img contain :src="require('@/assets/imgs/svg/coins.svg')" class="coins"></v-img></h5>
                    <v-img contain :src="require('@/assets/imgs/svg/info.svg')" class="case-delete m-a"></v-img>
                </div>
            </div>
        </v-container>
    </div>
</template>
<script>
export default {
    name: 'cases'
}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

.section-container {
    .winning {
        display: inline-block;
        .winning-img {
            width: 5rem;
        }
    }
    .case {
        width: 200px;
        text-align: center;
        display: inline-block;
        .case-name {
            font-size: 1rem;
        }
        .case-img {
            width: 75%;
            height: auto;
        }
        .case-price {
            font-size: 1rem;
            display: inline-block;
            vertical-align: middle;
            .coins {
                margin-left: 10px;
                width: 15px;
                height: auto;
                display: inline-block;
                vertical-align: middle;
            }
        }
        .case-delete {
            width: 25px;
            height: auto;
            margin-top: 10px;
        }
    }
}
</style>

<template>
    <div class="home spacing">
        <div class="banner">
            <h2 class="uppercase t-c">add banner</h2>
        </div>
        <div class="bid-cases">
            <h2 class="uppercase m-t-3">bid cases <span class="uppercase c-purple-bright">start bidding</span></h2>
            <div class="case pointer m-t-3 m-b-3" v-for="item in 10" :key="item">
                <h4 class="t-c capitalize">Empty Slot</h4>
                <v-img :src="require('@/assets/imgs/case.png')" class="case-image"></v-img>
                <h4 class="t-c capitalize price m-b-2">$0.07 <i class="fas fa-coins coins"></i></h4>
                <h3 class="capitalize t-c">supreme case</h3>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'home',

}
</script>
<style lang="scss">
.home{
    overflow: auto;
    min-height: 600px;
    .banner{
        padding: 35px;
        background: #73337a65;
    }
    .bid-cases{
        h2{
            span{
                font-size: 14px;
            }
        }
        .case{
            width: 25%;
            float: left;
            height: 350px;
            padding: 15px;
            &:hover{
                background: #00cf2099;
            }
            .coins{
                color: gold;
            }
            .case-image{
                display: block;
                margin: 3rem auto;
                width: 150px;
                height: 75px;
            }
        }
    }
}
</style>

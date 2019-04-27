<template>
    <div class="home spacing">
        <div class="banner">
            <h2 class="uppercase t-c">add banner</h2>
        </div>
        <div class="bid-cases">
            <h2 class="uppercase m-t-3">Open cases <span class="uppercase c-purple-bright">view selection</span></h2>
            <div class="case pointer m-t-3 m-b-3" v-for="item in cases" :key="item.id" @click="openCase(item._id)">
                <h4 class="t-c capitalize">Empty Slot</h4>
                <v-img :src="require('@/assets/imgs/svg/case2.svg')" class="case-image"></v-img> <!-- Put case Image Here using case_image -->
                <h4 class="t-c capitalize price m-b-2">${{item.price.$numberDecimal}} <i class="fas fa-coins coins"></i></h4>
                <h3 class="capitalize t-c">{{item.name}}</h3>
            </div>
        </div>
    </div>
</template>
<script>
import Api from '../services/Api.js';

export default {
    name: 'home',
    data: function() {
        return {
            cases: [],
        }
    },
    created: function() {
        let self = this;
        let api = new Api('/cases')
        api.getList().then(response =>{
            self.cases = response;
        }).catch(() => {

        })
    },
    methods: {
        openCase: function (caseId) {
            this.$router.push('case/' + caseId);
        }
    }

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
                margin-left: 10px;
            }
            .case-image{
                display: block;
                margin: 3rem auto;
                width: 150px;
                height: 100px;
            }
        }
    }
}
</style>

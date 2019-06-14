<template>
    <v-container fluit grid-list-xl class="spacing">
        <v-layout row wrap>
            <v-flex>
                <h1>{{$store.state.caseBeingBrowsed.name}}</h1>
                <h3 class="capitalize price m-b-2">Price: ${{$store.state.caseBeingBrowsed.price}} <i class="fas fa-coins coins"></i></h3>
            </v-flex>
        </v-layout>
        <v-layout row wrap mt-3>
            <v-flex xs12 md4 lg3 v-for="(item, index) in $store.state.caseBeingBrowsed.items" :key="index" class="case-item">
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
</template>
<script>
export default {
    name: "CaseDisplay",
    data: function(){
        return{

        }
    }
}
</script>
<style lang="scss" scoped>
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

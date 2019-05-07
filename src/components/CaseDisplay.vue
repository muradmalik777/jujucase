<template>
    <v-container fluit grid-list-md class="spacing">
        <v-layout row wrap>
            <v-flex>
                <h1>{{$store.state.caseBeingBrowsed.name}}</h1>
                <h3 class="capitalize price m-b-2">${{$store.state.caseBeingBrowsed.price}} <i class="fas fa-coins coins"></i></h3>
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
    },
    created: function(){
        console.log(this.$store.state.caseBeingBrowsed)
    }
}
</script>
<style lang="scss" scoped>

</style>

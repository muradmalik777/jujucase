<template>
    <div>
        <v-card flat>

        </v-card>
    </div>
</template>
<script>
export default {
    name: 'navbar',
    data: function(){
        return{
            drawer: true,
        }
    }
    
}
</script>
<style lang="scss" scoped>
.v-card{
    width: calc(100%-350px);
    height: 100px;
}
</style>

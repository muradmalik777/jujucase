<template>
    <v-container fluid class="case-creator spacing">
        <v-layout row>
            <v-flex xs12>
                <h3>Case Name</h3>
                <v-text-field class="case-name-input" placeholder="Enter case name" type="text" full-width v-model="case_name"></v-text-field>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    name: 'casecreator',
    data: function(){
        return{
            case_name: null,
        }
    }
}
</script>
<style lang="scss">
.case-creator{
    h3{
        padding-left: 14px;
    }
    .case-name-input{
        // padding: 0px;
        input{
            padding: 30px 10px;
            font-size: 16px;
            background: #73337a;
            color: #cccccc !important;
            caret-color: #cccccc;

            &::placeholder{
                color: #999999;
            }
        }
    }
}
</style>

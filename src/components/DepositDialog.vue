<template>
    <div class="text-xs-center">
        <v-dialog
        v-model="val"
        persistent
        width="700">

            <v-card class="bg-purple-dull">
                <v-form ref="form">
                    <v-card-title class="headline" primary-title>Deposit Funds to your Account</v-card-title>
                    <v-card-text>
                        <v-flex xs12>
                            <h3 class="m-b">Select Amount</h3>
                        </v-flex>
                        <v-flex xs12>
                            <v-btn @click="deposit.amount = 10" :class="{'active-btn': deposit.amount == 10}" class="amount-btn">$10</v-btn>
                            <v-btn @click="deposit.amount = 20" :class="{'active-btn': deposit.amount == 20}" class="amount-btn">$20</v-btn>
                            <v-btn @click="deposit.amount = 50" :class="{'active-btn': deposit.amount == 50}" class="amount-btn">$50</v-btn>
                            <v-btn @click="deposit.amount = 100" :class="{'active-btn': deposit.amount == 100}" class="amount-btn">$100</v-btn>
                            <v-btn @click="deposit.amount = 200" :class="{'active-btn': deposit.amount == 200}" class="amount-btn">$200</v-btn>
                            <v-btn @click="deposit.amount = 500" :class="{'active-btn': deposit.amount == 500}" class="amount-btn">$500</v-btn>
                        </v-flex>
                    </v-card-text>
                    <v-card-actions>
                        <v-flex xs12 class="text-xs-center">
                            <v-btn class="confirm" flat @click="confirmDeposit" :loading="loading">Confirm</v-btn>
                            <v-btn class="close" flat @click="closeDialog">Close</v-btn>
                        </v-flex>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
import Api from '@/services/Api'

export default {
    name: "DepositDialog",
    props: ["dialog"],
    data: function(){
        let data2 = this.$props.dialog
        let data = this.$store.state.userData.email
        return{
            val: data2,
            email: data,
            deposit: {
                amount: 10,
                currency: "USD",
                description: "",
                successUrl: "http://127.0.0.1:8080/payment/success",
                cancelUrl: "http://127.0.0.1:8080/payment/failure",
                customValue: ""
            },
            emailRules: [
                v => !!v || "E-mail is required",
                v => /.+@.+/.test(v) || "E-mail must be valid"
            ],
            loading: false
        }
    },
    watch: {
        dialog: function(newVal, oldVal){
            this.val = newVal
        }
    },
    methods: {
        closeDialog: function(){
            this.$emit('close')
        },
        confirmDeposit: function(){
            this.loading = true
            let $object = new Api("/deposit")
            this.deposit.amount = "$" + parseFloat(this.deposit.amount).toFixed(2)
            this.deposit.description = "Added Funds " + this.deposit.amount
            let data = {
                user: this.$store.state.userData,
                deposit: this.deposit
            }
            $object.post(data).then(resp => {
                let url = "https://test.gamerpay.com/pay/"
                let data = resp.payment_url.split("/")
                let id = data[data.length-1]
                window.location.replace(url+id)
            }).catch(()=>{
                this.loading = false
            })
        }
    }
}
</script>
<style lang="scss">
.v-card{
    padding: 20px;
}
.confirm{
    background: #4caf50 !important;
    color: #000 !important;
    float: right !important;
}
.close{
    color: #ffffff !important;
    float: right !important;
    margin-right: 1rem !important;
}
.amount-btn{
    background: #261132 !important;
    color: #ffffff !important;
    font-size: 18px;
}
.active-btn{
    background: #03b309 !important;
    color: #06000a !important;
    font-weight: 600;
    font-size: 18px;
}
.email{
    input{
        margin-top: 10px !important;
    }
}
</style>

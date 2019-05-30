<template>
     <v-container fluid class="payment-failure spacing">
        <v-layout justify-center row wrap>
            <v-flex xs12 md8 lg6 class="text-xs-center">
                <v-card class="bg-purple-dull">
                    <h3>Transaction Successfull</h3>
                    <h4>Transaction Id: <span class="c-green">{{transaction_id}}</span></h4>
                    <h4>Transaction Amount: <span class="c-green">{{transaction.amount}}</span></h4>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import Api from "@/services/Api";

export default {
  name: "DepositSuccess",
  data: function() {
    return {
      transactionId: null,
      loading: false
    };
  },
  mounted: function() {
    this.failure();
  },
  methods: {
    failure: function() {
      this.startLoader();
      const urlParams = new URLSearchParams(window.location.search);
      this.transactionId = urlParams.get("txn_id");
      let $object = new Api("/payment/failure");
      $object.post({ transaction_id: this.transactionId }).then(response => {
          this.$store.commit('addUser', response.user)
          this.transaction = response.transaction;
          this.endLoader()
      });
    }
  }
};
</script>
<style lang="scss">
</style>

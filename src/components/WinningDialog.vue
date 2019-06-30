<template>
    <div class="text-xs-center">
        <v-dialog
        v-model="val"
        persistent
        width="800">

            <v-card class="bg-purple-dull">
                <v-card-text>
                    <v-layout row>
                        <v-flex xs3>
                            <v-img class="win-image" contain :src="$store.state.winningItem.item.iconUrl"></v-img>
                        </v-flex>
                        <v-flex xs9>
                            <h2 class="c-white">{{$store.state.winningItem.item.marketHashName}}</h2>
                            <h4 class="c-white">Ticket: {{$store.state.winningItem.ticketNumber}}</h4>
                            <h4 class="c-white">Hash: {{$store.state.winningItem.clientHash}}</h4>
                            <h4 class="c-white"  style="word-wrap: break-word;">Secret: {{$store.state.winningItem.roundSecret}}</h4>
                        </v-flex>
                    </v-layout>
                </v-card-text>
                <v-card-actions>
                    <v-flex xs12 class="text-xs-center">
                        <v-btn :loading="loading" @click="sellItem($store.state.winningItem)" class="confirm" flat>Sell this item for ${{$store.state.winningItem.item.price}}</v-btn>
                        <v-btn class="close" flat @click="closeDialog">Later</v-btn>
                    </v-flex>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
import Api from "@/services/Api";

export default {
  name: "DepositDialog",
  props: ["dialog"],
  data: function() {
    let data2 = this.$props.dialog;
    return {
      val: data2,
      loading: false
    };
  },
  watch: {
    dialog: function(newVal, oldVal) {
      this.val = newVal;
    }
  },
  methods: {
    closeDialog: function() {
      this.$emit("closeDialog");
    },
    sellItem: function(item){
      this.loading= true
      let $object = new Api('/user/trade')
      $object.post(item).then(response =>{
          this.$store.commit('addUser', response.user)
          this.loading = false
          this.closeDialog()
      }).catch(()=>{
          this.loading = false
      })
    }
  }
};
</script>
<style lang="scss">
.win-image{
    width: 150px;
    height: auto;
}
.confirm {
  background: #4caf50 !important;
  color: #000 !important;
  float: right !important;
}
.close {
  color: #ffffff !important;
  float: right !important;
  margin-right: 1rem !important;
}
</style>

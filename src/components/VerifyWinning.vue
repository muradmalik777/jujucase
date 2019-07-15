<template>
    <v-container grid-list-xl class="verify-winning spacing">
        <v-layout row wrap justify-center>
            <v-flex xs12 md7 lg5 class="verify-form">
                <h2 class="uppercase m-b-2">verify your result</h2>
                <v-form ref="verifyForm">
                    <label>Case</label>
                    <v-text-field color="#fff" v-model="box.name" background-color="#67266e" readonly :rules="dataRules" required></v-text-field>
                    <label>Client Hash</label>
                    <v-text-field color="#fff" v-model="verify.clientHash" background-color="#67266e" :rules="dataRules" required></v-text-field>
                    <label>Round Secret</label>
                    <v-textarea color="#fff" background-color="#67266e" no-resize :rules="dataRules" v-model="verify.roundSecret"></v-textarea>

                    <v-btn :loading="loading" @click="verifyWinning" class="verify" flat>Verify</v-btn>
                </v-form>
            </v-flex>
            <v-flex xs12 md5 lg4>
                <v-card class="bg-purple-dull m-t-6 result">
                    <v-card-text>
                        <v-layout row>
                            <v-flex xs12>
                                <h3 class="m-b-2 uppercase">Results</h3>
                                <h4 class="c-white m-b">Original Ticket Number: {{$store.state.winningItem.ticketNumber}}</h4>
                                <h4 class="c-white m-b">Item Won: <br> {{$store.state.winningItem.item.marketHashName}}</h4>

                                <h3 class="m-b-2 m-t-2 uppercase">Ticket Ranges</h3>
                                <h4 class="c-white m-b" v-if="this.winningTicket">Winning Ticket Number: {{winningTicket}}</h4>
                                <h4 v-for="(item, i) in result" :key="i" class="c-white m-b">{{item.firstTicket}} - {{item.lastTicket}} : {{item.name}}</h4>
                            </v-flex>
                        </v-layout>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import Api from "@/services/Api";

export default {
  name: "VerifyWinning",
  data: function() {
    let data = this.$store.state.winningItem;
    let data2 = this.$store.state.lastCaseOpened
    return {
      verify: data,
      box: data2,
      result: [],
      winningTicket: null,
      loading: false,
      dataRules: [v => !!v || "The input is required"]
    };
  },
  methods: {
    verifyWinning: function() {
      this.loading = true;
      let $object = new Api("/winning/verify");
      $object.post(this.verify).then(resp => {
          this.winningTicket = resp.roll
          this.result = resp.tickets
          this.loading = false;
      }).catch(() => {
          this.loading = false;
        });
    }
  }
};
</script>
<style lang="scss">
.verify-winning {
  min-height: 90vh;

  .win-image {
    width: 180px;
    height: auto;
    display: block;
    margin: 1rem auto;
  }
  .v-text-field__slot {
    padding: 0.5rem 1rem;
    textarea {
      color: #fff !important;
    }
  }
  label {
    text-transform: capitalize;
  }
  .verify {
    background: #4caf50 !important;
    color: #000 !important;
    width: 120px;
    margin: 0;
    margin-top: 1rem;
  }
  .result {
    margin-left: 50px;
    margin-top: 7rem;
    min-height: 340px;

    h4{
        color: #dddddd;
    }
  }
}
</style>

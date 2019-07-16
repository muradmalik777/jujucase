<template>
    <v-container grid-list-xl class="verify-user spacing">
      <v-layout row wrap justify-center v-if="$store.state.userData.has_applied_verification">
        <v-flex xs12 md10 lg10 class="verify-form">
          <h1>User Account Verification</h1>
          <h3 class="m-b-2">We will verify your age based upon the document you uploaded, after that you can withdraw your items.</h3>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center v-else>
          <v-flex xs12 md8 lg5 class="verify-form">
              <h2 class="uppercase m-b-2">verify your result</h2>
              <v-form ref="verifyForm">
                  <label>Name</label>
                  <v-text-field color="#fff" v-model="verify.name" background-color="#67266e" class="m-b" :rules="dataRules" required></v-text-field>
                  <label>Surname</label>
                  <v-text-field color="#fff" v-model="verify.surname" background-color="#67266e" class="m-b" :rules="dataRules" required></v-text-field>
                  <label>ID Card/Passport</label>
                  <input color="#fff" type="file" class="m-b-2 m-t" :rules="dataRules" required @change="setImage($event)"/>
                  <label>Date of Birth</label>
                  <v-date-picker color="#67266e" v-model="verify.dob" class="m-b date" :landscape="false" :reactive="false"></v-date-picker>
                  <v-btn :loading="loading" @click="verifyUser" class="verify-btn" flat>Verify</v-btn>
              </v-form>
          </v-flex>
      </v-layout>
    </v-container>
</template>
<script>
import Api from "@/services/Api";

export default {
  name: "VerifyWinning",
  data: function() {
    return {
      verify: {
        dob: new Date().toISOString().substr(0, 10),
        supported_types : ["id_card","driving_license","passport"],
        issue_date: "", 
        expiry_date: "",
        document_number: ""
      },
      loading: false,
      dataRules: [v => !!v || "The input is required"]
    };
  },
  methods: {
    verifyUser: function(){
      this.loading= true
      let $object = new Api('/user/verify')
      let params = {
        user: this.$store.state.userData,
        verify: this.verify
      }
      $object.post(params).then(response =>{
        this.loading = false
        this.$store.commit('addUser', response.user)
      }).catch((error)=>{
        this.loading = false
        this.showMessage(error.response.data.message)
      })
    },
    setImage: function(event){
      var self = this;
      var file = event.target.files[0];
        var reader  = new FileReader();
        reader.onloadend = function () {
            self.verify.proof = reader.result;
        }
      reader.readAsDataURL(file);
    },
  }
};
</script>
<style lang="scss">
.verify-user {
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
  .date{
    padding: 0;
    margin-top: 1rem;
    float: left;
    .v-date-picker-years{
      li{
        color: #333;
      }
    }
  }
  label {
    display: block;width: 100%;
    text-transform: capitalize;
  }
  .verify-btn {
    background: #4caf50 !important;
    color: #000 !important;
    width: 120px;
    margin: 0;
    margin-top: 2rem;
    float: left;
    clear: both !important;
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

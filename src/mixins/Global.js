import Vue from 'vue'
import vuetifyToast from 'vuetify-toast'

Vue.mixin({
  computed: {

  },
  methods: {
    logout: function(){
      this.$store.commit('logout')
      this.$router.push("/login")
    },
    showMessage: function(message, type){
      vuetifyToast.show({
        text: message,
        color: type,
        timeout: 4000,
        dismissible: false
      });
    }
  },
  filters: {

  }
});
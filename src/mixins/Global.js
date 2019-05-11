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
        icon: 'information',
        color: type,
        timeout: 3000,
        dismissible: false
      });
    }
  },
  filters: {

  }
});
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
    },
    createCaseItems: function(items){
      var skins = []
      for(let a = 0; a < items.length; a++){
        for(let b = 0; b < items[a].odds*3; b++){
          skins.push(items[a])
        }
      }
      return skins
    },
    shuffleItems: function(items){
        return items.sort(() => Math.random() - 0.5);
    }
  },
  filters: {

  }
});
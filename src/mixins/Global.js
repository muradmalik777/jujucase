import Vue from 'vue'

Vue.mixin({
  computed: {
    $user: function() {
      let user = this.$session.get('user')
      return user
    },
    $isLoggedIn: function() {
      let user = this.$session.get('user')
      if (user){
        return true
      }
      return false
    },
    $steamId: function () {
      let user = this.$session.get('user')
      return user.steam_id
    },
  },
  methods: {

  },
  filters: {

  }

});
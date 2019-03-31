import Vue from 'vue'

Vue.mixin({
  computed: {
    $user: function() {
      let user = this.$session.get('user')
      return user
    },
    $steamId: function () {
      let user = this.$session.get('user')
      return user.steam_id
    },
  },
  methods: {
    logout: function(){
      this.$session.destroy()
      this.$router.push('/')
    }
  },
  filters: {

  }

});
import Vue from 'vue'

Vue.mixin({
  computed: {
    $user: function() {
      let user = this.$session.get('user')
      return user
    },
    $is_logged_in: function() {
      let user = this.$session.get('user')
      if (user){
        return true
      }
      return false
    }
  },
  methods: {

  },
  filters: {

  }

});
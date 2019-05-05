import Vue from 'vue'

Vue.mixin({
  computed: {

  },
  methods: {
    logout: function(){
      this.$store.commit('logout')
      this.$router.push("/login")
    }
  },
  filters: {

  }
});
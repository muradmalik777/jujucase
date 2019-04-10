import Vue from 'vue'

Vue.mixin({
  computed: {

  },
  methods: {
    logout: function(){
      this.$store.commit('logout')
    }
  },
  filters: {

  }
});
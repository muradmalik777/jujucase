<template>
  <v-app>
    <topbar></topbar>
    <div class="content">
        <router-view></router-view>
    </div>
    <loader v-if="this.$store.state.loading"></loader>
  </v-app>
</template>

<script>
import SideBar from '@/components/SideBar';
import TopBar from '@/components/TopBar';
import Loader from '@/components/Loader';


export default {
  name: 'App',
  components: {
    'sidebar': SideBar,
    'topbar': TopBar,
    'loader': Loader
  },
  data () {
    return {
      
    }
  }
}
</script>
<style lang="scss" scoped>
.content{
    width: 100%;
    min-height: 100vh;
    margin-top: 100px;
    overflow-y: auto;
    padding-bottom: 0px;
    background-image: url('assets/imgs/svg/41.svg');
    background-size: cover;
}
</style>


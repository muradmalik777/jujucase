<template>
  <v-app>
    <sidebar></sidebar>
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
    position: absolute;
    width: calc(100% - 300px);
    min-height: 1500px;
    overflow-y: auto;
    top: 100px;
    left: 300px;
    padding-bottom: 0px;
    background-image: url('assets/imgs/svg/41.svg');
    background-size: cover;
}
</style>


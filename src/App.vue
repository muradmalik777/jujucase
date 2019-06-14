<template>
  <v-app>
    <topbar></topbar>
    <div class="content">
        <router-view></router-view>
    </div>
    <foot></foot>
    <loader v-if="this.$store.state.loading"></loader>
  </v-app>
</template>

<script>
import SideBar from '@/components/SideBar';
import TopBar from '@/components/TopBar';
import Foot from '@/components/Foot';
import Loader from '@/components/Loader';


export default {
  name: 'App',
  components: {
    'sidebar': SideBar,
    'topbar': TopBar,
    'loader': Loader,
    'foot': Foot
  },
  data () {
    return {
      
    }
  }
}
</script>
<style lang="scss" scoped>
.content{
    background-image: url('assets/imgs/svg/41.svg');
    background-size: cover;
    padding-bottom: 100px;
}
</style>


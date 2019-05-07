<template>
  <v-app>
    <sidebar></sidebar>
    <topbar></topbar>
    <div class="content">
        <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
import SideBar from '@/components/SideBar'
import TopBar from '@/components/TopBar';


export default {
  name: 'App',
  components: {
    'sidebar': SideBar,
    'topbar': TopBar

  },
  data () {
    return {
      
    }
  }
}
</script>
<style lang="scss" scoped>
.content{
    width: calc(100% - 300px);
    height: 100%;
    position: fixed;
    overflow: auto;
    top: 100px;
    left: 300px;
    padding-bottom: 100px;
    background-image: url('assets/imgs/svg/41.svg');
    position: relative;
    background-size: 100% auto;
}
</style>


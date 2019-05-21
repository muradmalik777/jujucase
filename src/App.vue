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


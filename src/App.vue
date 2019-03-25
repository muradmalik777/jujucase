<template>
  <v-app>
    <sidebar></sidebar>
    <topbar></topbar>
    <div class="content bg-purple-dark">
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
      //
    }
  }
}
</script>
<style lang="scss" scoped>
.content{
    width: calc(100% - 300px);
    height: 100%;
    position: fixed;
    overflow: scroll;
    top: 100px;
    left: 300px;
}
</style>


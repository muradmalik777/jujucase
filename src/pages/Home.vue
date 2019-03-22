<template>
    <div>
        <div class="side-bar">
            <sidebar></sidebar>
        </div>
        <div class="top-bar">
            <topbar></topbar>
        </div>
    </div>
</template>
<script>
import SideBar from '@/components/SideBar'
import TopBar from '@/components/TopBar';

export default {
    name: 'home',
    components: {
        'sidebar': SideBar,
        'topbar': TopBar
    }

}
</script>
<style lang="scss" scoped>
.side-bar{
    max-width: 300px;
    float: left;
    display: block;
}
.top-bar{
    width: calc(100% - 300px);
    display: block;
    float: left;
}
</style>

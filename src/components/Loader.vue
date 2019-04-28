<template>
    <v-container fluid class="loader bg-purple-dark">
        <v-layout align-center justify-center column fill-height>
            <v-flex xs2 style="border:none;">
                <v-img width="150px" height="150px" :src="require('@/assets/imgs/logo.png')"></v-img>
            </v-flex>
            <v-flex xs2>
                <div class="lds-facebook"><div></div><div></div><div></div><div></div><div></div></div>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    name: 'loader',
    data: function(){
        return{

        }
    }
    
}
</script>
<style lang="scss">
.loader{
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: 1000;
}
.lds-facebook {
  display: inline-block;
  position: relative;
  width: 104px;
  height: 64px;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: -6px;
  width: 10px;
  background: #fff;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: 6px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 26px;
  animation-delay: -0.20s;
}
.lds-facebook div:nth-child(3) {
  left: 45px;
  animation-delay: 0.16s;
}
.lds-facebook div:nth-child(4) {
  left: 65px;
  animation-delay: 0.12s;
}
.lds-facebook div:nth-child(5) {
  left: 85px;
  animation-delay: 0s;
}
@keyframes lds-facebook {
  0% {
    top: 6px;
    height: 51px;
  }
  50%, 100% {
    top: 19px;
    height: 26px;
  }
}

</style>

<template>
  <v-app>
    <SideBar />
    <SystemBar />
    <v-main>
      <router-view></router-view>

    </v-main>
  </v-app>
</template>

<script>
/*importamos compinentes| Luis Reyes */

import SideBar from './components/SideBar.vue'
import SystemBar from './components/SystemBar.vue';

export default {
  name: 'App',

  components: {
    SideBar,
    SystemBar
  },
  data: () => ({}),
};
</script>

<style>
.v-main {

  /* background: linear-gradient(50deg, rgba(255, 255, 255, 1) 35%, rgba(244, 237, 255, 1) 90%); */
  background: rgb(255, 255, 255);
  background: -moz-linear-gradient(50deg, rgba(255, 255, 255, 1) 35%, rgba(244, 237, 255, 1) 90%);
  background: -webkit-linear-gradient(50deg, rgba(255, 255, 255, 1) 35%, rgba(244, 237, 255, 1) 90%);
  background: linear-gradient(50deg, rgba(255, 255, 255, 1) 35%, rgba(244, 237, 255, 1) 90%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff", endColorstr="#f4edff", GradientType=1);

}
</style>



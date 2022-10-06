<template>
  <v-app
  style="
    background: #f4edff"><!-- 
    <SideBar /> -->
    <!-- <SystemBar /> -->
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

/* import SideBar from './components/SideBar.vue'
import SystemBar from './components/SystemBar.vue';

 */
export default {
  name: 'App',

  components: {
    /* SideBar,
    SystemBar */
  },

  data: () => ({}),
};
</script>



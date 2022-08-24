<template>
<v-app>
  <SideBar/>
  <v-main>
    <router-view></router-view>
  </v-main>
</v-app>
</template>



<script>
/*importamos el componente Sidebar | Luis Reyes */

import SideBar from './components/SideBar.vue'

export default {
  name: 'App',

  components: {
    SideBar,
  },

  data: () =>({}),
};
</script>


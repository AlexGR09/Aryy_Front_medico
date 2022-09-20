<script>
  import BarraSuperior from './components/Calendario/BarraSuperior.vue'
  import VistaMes from './views/Calendario/VistaMes.vue';
  export default {
    name:'App',
    components:{
    BarraSuperior,
    VistaMes,
    },
  }
</script>

<!-- Vista Calendario-Mes -->
<template>
  <v-app>
    <BarraSuperior/>
    <VistaMes/>
  </v-app>
</template>
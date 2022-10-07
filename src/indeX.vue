<template>
    <div>
      <SideBar />
      <SystemBar />
    </div>
  </template>
  
  <script>
  
  import SideBar from './components/SideBar.vue'
  import SystemBar from './components/SystemBar.vue';
  
  export default {
    name: 'indeX',
  
    components: {
      SideBar,
      SystemBar
    },
  
  };
  </script>
  
  
  
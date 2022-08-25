<template>
   <v-navigation-drawer v-model="drawer" permanent darp app mini-variant mini-variant-width="80">
       <v-list-item class="px-2 py-5">
           <v-list-item-tittle class="text-capitalize" align="center">
               <v-icon color="#3d83df" class="mb-2" large>fa-solid fa-notes-medical</v-icon>
           </v-list-item-tittle>
       </v-list-item>
   </v-navigation-drawer>
    
</template>


<script>
export default {
    data: () => ({
        //drawer: true


        /*Creación de ITEM |  Luis Reyes */
        selectedItem: 0,
        drawer: null,
        items: [
            {icon: 'fa-calendar-days', route:'/calendar'},
            {icon: 'fa-light fa-user-group', route:'/pacientes'},
            {icon: 'fa-solid fa-comment-dots', route:'/mensajes'},
            {icon: 'fa-solid fa-chart-line', route:'/'},
            {icon: 'fa-solid fa-file-invoice', route:'/'},
            {icon: 'fa-regular fa-paper-plane', route:'/'},
            {icon: 'fa-duotone fa-calculator', route:'/'},
            {icon: 'fa-solid fa-gear', route:'/configuración'},
            {icon: 'far fa-question-circle', route:'/'},
            {icon: 'far fa-bell', route:'/'},
            {icon: 'fa-regular fa-circle-user', route:'/'},


        ]
    })
}
</script>


<style scoped>
/* estilos | Luis Reyes */
div >>> .v-list a{
    text-decoration: none;
}
</style>
<template>
<v-navigation-drawer v-model="drawer" app color="white" mini-variant mini-variant-width="90">
      <v-avatar class="d-block text-center mx-auto mt-4" size="40">
          <!-- <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img> -->
          <v-icon color="#3d83df" class="mb-2" large>fa-solid fa-notes-medical</v-icon>
      </v-avatar>
      <v-list flat class="mt-4">
          <v-list-item-group v-model="selectedItem">
              <v-list-item v-for="(item, i) in items" :key="i" active-class="border" :ripple="false">
                  <v-list-item-content>
                      <v-icon v-text="item.icon"></v-icon>
                      <v-list-item-subtitle align="center" v-text="item.text" class="mt-3 caption"></v-list-item-subtitle>
                  </v-list-item-content>
              </v-list-item>
          </v-list-item-group>
      </v-list>
      <div style="position: absolute; bottom: 20px; margin-left: auto; margin-right: auto; left:0; right:0; text-align: center;">
          <v-icon>fas fa-sign-out-alt</v-icon><br><span class="caption">Logout</span>
      </div>

       
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
            {icon: 'fa-calendar-days', route:'/home'},
            {icon: 'fa-light fa-user-group', route:'/about'},
            {icon: 'fa-solid fa-comment-dots', route:'/mensajes'},
            {icon: 'fa-solid fa-chart-line', route:'/'},
            {icon: 'fa-solid fa-file-invoice', route:'/'},
            {icon: 'fa-regular fa-paper-plane', route:'/'},
            {icon: 'fa-duotone fa-calculator', route:'/'},
            {icon: 'fa-solid fa-gear', route:'/configuración'},
           // {icon: 'far fa-question-circle', route:'/'},
            //{icon: 'far fa-bell', route:'/'},
            //{icon: 'fa-regular fa-circle-user', route:'/'},


        ]
    })
}

/**
 <nav>
        <v-navigation-drawer v-model="drawer" darp app mini-variant mini-variant-width="80">
            <v-list>
                <v-list-item class="mb-12">
                    <v-list-item-content>
                        <v-icon color="#3d83df" class="mb-2" large>fa-solid fa-notes-medical</v-icon>
                        <!-- <v-list-item-subtitle aling="center">Aryy</v-list-item-subtitle> -->
                    </v-list-item-content>
                </v-list-item>
            </v-list>


            <v-list flat>
                <v-list-item router to="./" >
                    <v-list-item-content>
                        <v-tooltip  right>
                            <template v-slot:activator="{ on, attrs }">
                                <v-icon dark v-bind="attrs" v-on="on" color="#98a1ab" class="mb-2">fa-solid
                                    fa-calendar-days</v-icon>
                            </template>
                            <span>Calendario</span>
                        </v-tooltip>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item router to="/about" color="primary">
                    <v-list-item-content color="primary">
                        <v-icon title="Pacientes" color="#98a1ab" class="mb-2">fa-light fa-user-group</v-icon>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item router to="/">
                    <v-list-item-content>
                        <v-icon tittle="Panel de control" color="#98a1ab" class="mb-2">fa-solid fa-comment-dots</v-icon>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item router to="/">
                    <v-list-item-content>
                        <v-icon color="#98a1ab" class="mb-2">fa-solid fa-chart-line</v-icon>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item router to="/">
                    <v-list-item-content>
                        <v-icon color="#98a1ab" class="mb-2">fa-solid fa-file-invoice</v-icon>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item router to="/">
                    <v-list-item-content>
                        <v-icon color="#98a1ab" class="mb-2">fa-regular fa-paper-plane</v-icon>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item router to="/">
                    <v-list-item-content>
                        <v-icon color="#98a1ab" class="mb-2">fa-duotone fa-calculator</v-icon>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item router to="/">
                    <v-list-item-content>
                        <v-icon color="#98a1ab" class="mb-2">fa-solid fa-gear</v-icon>
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>
            </v-list>

            <v-list style="position:absolute; bottom: 0;" class="mb-2 ml-3" flat>
                <v-list-item router to="/">
                    <v-list-action>
                        <v-icon color="#98a1ab">far fa-question-circle</v-icon>
                    </v-list-action>
                </v-list-item>

                <v-list-item router to="/">
                    <v-list-action>
                        <v-icon color="#98a1ab">far fa-bell</v-icon>
                    </v-list-action>
                </v-list-item>

                <v-list-item router to="/">
                    <v-list-action>
                        <v-icon color="#98a1ab">fa-regular fa-circle-user</v-icon>
                    </v-list-action>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>





    -----


       <v-navigation-drawer v-model="drawer" app color="white" mini-variant mini-variant-width="80">
       <v-list-item class="px-2 py-5">
           <v-list-item-tittle class="text-capitalize" align="center">
               <v-icon color="#3d83df" class="mb-2" large>fa-solid fa-notes-medical</v-icon>
           </v-list-item-tittle>
       </v-list-item>
       <v-list flat class="mt-4">
                      <vlist-item-group v-model="selectedItem">
               <v-list-item v-for="(item, i) in items" :key="i" active-class="border" :ripple="false">
                   <v-list-item-content>
                       <v-icon v-text="item.icon"></v-icon>
                   </v-list-item-content>
               </v-list-item>
           </vlist-item-group>
       </v-list>
   </v-navigation-drawer>
 */
</script>


<style scoped>
/* estilos | Luis Reyes */
div >>> .v-list a{
    text-decoration: none;
}

.border {
    margin-left: 0px;
    margin-right: 0px;
    background: #704232;
    border-radius: 10%;
    text-decoration: none;
}
.v-list-item-group .v-list-item--active {
    color: white !important;
}
.theme--light.v-list-item--active .v-list-item__subtitle, .theme--light.v-list-item .v-list-item__action-text {
    color: white !important;
}
</style>


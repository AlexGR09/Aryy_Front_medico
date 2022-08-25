<template>
    <v-navigation-drawer v-model="drawer" permanent darp app mini-variant mini-variant-width="80">
        <!-- start code logotipo de Aryy | Luis Reyes-->
        <v-tooltip right>
            <template v-slot:activator="{ on, attrs }">
                <v-list-item-content >
                    <v-icon dark v-bind="attrs" v-on="on" color="#3d83df" class="mb-2" large>fa-solid fa-notes-medical
                    </v-icon>
                </v-list-item-content>
            </template>
            <span>Docplanner</span>
        </v-tooltip>
        <!-- finish code logotipo de Aryy | Luis Reyes-->

        <!-- start code menú | Luis Reyes-->
        <v-list dense>
            <v-list-item v-for="item in items" route :to="item.route" :key="item.title" link active-class="border" :ripple="false" >
                <v-tooltip right>
                    <template v-slot:activator="{ on, attrs }">
                        <v-list-item >
                            <v-list-item-content color="primary" >
                                <v-icon  id="icon" class="mb-2" v-bind="attrs" v-on="on">{{ item.icon }}</v-icon>
                            </v-list-item-content>
                        </v-list-item>
                    </template>
                    <span v-text="item.span"></span>
                </v-tooltip>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item router to="/edicion-de-perfil" color="primary">
                <v-list-item-content color="primary">
                    <v-icon color="#98a1ab" class="mb-2">fas fa-user-md</v-icon>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        <!-- finish code menú | Luis Reyes-->

        <!-- start code icon-absolute | Luis Reyes-->
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
        <!-- finish code icon-absolute | Luis Reyes-->
    </v-navigation-drawer>
</template>



<script>
export default {
    data: () => ({
        //drawer: true
        /*Creación de items |  Luis Reyes */
        selectedItem: 0,
        drawer: null,
        items: [
            { icon: 'fa-calendar-days', route: '/calendar', span: 'Calendario' },
            { icon: 'fa-light fa-user-group', route: '/patients', span: 'Pacientes' },
            { icon: 'fa-solid fa-comment-dots', route: '/messages', span: 'Mensajes' },
            { icon: 'fa-solid fa-chart-line', route: '/dashboard', span: 'Panel de control' },
            { icon: 'fa-solid fa-file-invoice', route: '/vouchers', span: 'Paquete de vales' },
            { icon: 'fa-regular fa-paper-plane', route: '/campaigns', span: 'Campañas' },
            { icon: 'fa-duotone fa-calculator', route: '/quotes', span: 'Presupuesto' },
            { icon: 'fa-solid fa-gear', route: '/settings', span: 'Ajustes' },
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

---------------

        <v-list flat>
            <v-list-item-group v-model="selectedItem" class="mb-2">
                <v-list-item v-for="(item, i) in items" :key="i" active-class="border" :ripple="false">
                    <v-list-item-content>
                        <v-tooltip right>
                            <template v-slot:activator="{ on, attrs }">
                                <v-list-item-content>
                                    <v-icon class="d-block text-center mb-2" v-bind="attrs" v-on="on"
                                        v-text="item.icon"></v-icon>
                                </v-list-item-content>
                            </template>
                            <span v-text="item.span"></span>
                        </v-tooltip>
                        <v-list-item-subtitle align="center" v-text="item.text" class="mt-3 caption">
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
           
           
           
           
           
           <!-- iconos SideBar | Luis Reyes-->
            <v-divider></v-divider>
            <!--icono de Mi Perfil | Luis Reyes-->
            <v-list-item router to="/edicion-de-perfil" color="primary">
                <v-list-item-content color="primary">
                    <v-icon color="#98a1ab" class="mb-2">fas fa-user-md</v-icon>
                </v-list-item-content>
            </v-list-item>
            <!--icono de Mi Perfil | Luis Reyes-->



        </v-list>



 */
</script>


<style scoped>
/* estilos | Luis Reyes */


.border {
    margin-left: 10px;
    margin-right: 10px;
    background: #eef4fd;
    border-radius: 10%;
    text-decoration: none;
}

#icon {
    color: #abb2ba;
}
#icon:hover {
    color: #627282;
}
#icon:active {
    color: #3d83df
}





</style>


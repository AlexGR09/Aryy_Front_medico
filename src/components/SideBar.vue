<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" app mini-variant mini-variant-width="80" expand-on-hover>
            <!--  -->
            <v-avatar class="d-block text-center mx-auto mt-4" color="" size="40">
                <v-icon color="#49D9A0" large>fab fa-atlassian</v-icon>
            </v-avatar>

            <v-divider class="mx-3 my-5"></v-divider>

            <v-list flat class="mt-5">
                <v-list-item-group v-model="selectedItem">

                    <v-list-item v-for="(item, i) in items" :key="i" active-class="border" class="" :ripple="false">
                        <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>{{  item.title  }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar>

        <v-main>
            <!--  -->
        </v-main>
    </v-app>
</template>
  


<script>
export default {
    data: () => ({
        selectedItem: 0,
        drawer: null,
        items: [
            { title: 'Home', icon: 'fa-calendar-days', route: '/calendar', span: 'Calendario' },
            { icon: 'fa-light fa-user-group', route: '/patients', span: 'Pacientes' },
            { icon: 'fa-solid fa-comment-dots', route: '/messages', span: 'Mensajes' },
            { icon: 'fa-solid fa-chart-line', route: '/dashboard', span: 'Panel de control' },
            { icon: 'fa-solid fa-file-invoice', route: '/vouchers', span: 'Paquete de vales' },
            { icon: 'fa-regular fa-paper-plane', route: '/campaigns', span: 'Campañas' },
            { icon: 'fa-duotone fa-calculator', route: '/quotes', span: 'Presupuesto' },
            { icon: 'fa-solid fa-gear', route: '/settings', span: 'Ajustes' },
        ],
    }),
}
</script>
  <style>
  /*   .border {
        margin-left: 12px;
        margin-right: 12px;
        background: #49D9A0;
        border-radius: 50%;
        text-decoration: none;
    
    } */
  
  .v-list-item-group .v-list-item--active {
      color: white !important;
  }
  </style>
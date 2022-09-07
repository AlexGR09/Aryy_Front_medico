<template>
    <v-navigation-drawer id="default-drawer" v-model="drawer" :dark="dark" :right="$vuetify.rtl"
        :src="drawerImage ? image : ''" :mini-variant.sync="mini" mini-variant-width="80" app width="260">
        <template v-if="drawerImage" #img="props">
            <v-img :key="image" :gradient="gradient" v-bind="props" />
        </template>
        <div class="px-2">
            <default-drawer-header />
            <v-divider class="mx-3 mb-2" />
            <default-list :items="items" />
            <v-card class="d-block text-center mx-1 mt-4 my-10 rounded-bl-xl rounded-tr-xl pa-2">
                <v-icon color="#F7AFB0" x-large>fa-solid fa-notes-medical</v-icon>
            </v-card>

            <v-list flat class="mt-5">
                <v-list-item-group v-model="selectedItem">
                    <v-list-item v-for="(item, i) in items" :key="i" route :to="item.route" active-class="activeC"
                        :ripple="false">
                        <v-list-item-icon>
                            <v-icon v-text="item.icon" color="#F7AFB0"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-subtitle align="center" v-text="item.title" class="mt-3 caption">
                        </v-list-item-subtitle>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </div>

        <template #append>
            <div class="pa-4 text-center">
                <app-btn class="text-none mb-4" color="white" href="https://vuetifyjs.com" small text>
                    Proyecto en construcción
                </app-btn>
            </div>
        </template>
        <div class="pt-12" />
    </v-navigation-drawer>
</template> 

<script>
export default {
    data: () => ({
        selectedItem: 0,
        drawer: null,
        items: [
            { title: 'Calendario', icon: 'fa-calendar-days', route: '/calendar', span: 'Calendario' },
            { title: 'Pacientes', icon: 'fa-light fa-user-group', route: '/patients', span: 'Pacientes' },
            { title: 'mensajes', icon: 'fa-solid fa-comment-dots', route: '/messages', span: 'Mensajes' },
            { title: 'Panel de control', icon: 'fa-solid fa-chart-line', route: '/dashboard', span: 'Panel de control' },
            { title: 'Pquetes de vales', icon: 'fa-solid fa-file-invoice', route: '/vouchers', span: 'Paquete de vales' },
            { title: 'Campañas', icon: 'fa-regular fa-paper-plane', route: '/campaigns', span: 'Campañas' },
            { title: 'presupuesto', icon: 'fa-duotone fa-calculator', route: '/quotes', span: 'Presupuesto' },
            { title: 'Ajustes', icon: 'fa-solid fa-gear', route: '/settings', span: 'Ajustes' },
            { title: 'Mi Perfil', icon: 'fas fa-user-md', route: '/edicion-de-perfil', span: 'Mi Perfil' },
        ],
    }),
};
</script>
<style>
.activeC {
    box-shadow: -10px -10px 10px rgba(255, 255, 255, 0.2),
        15px 15px 15px rgba(0, 0, 0, 0.1),
        inset -10px -10px 10px rgba(255, 255, 255, 0.2),
        inset 15px 15px 15px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
}

.v-list-item-group .v-list-item--active {
    color: white !important;
}

.round {
    border: 20px solid grey;
}
</style>
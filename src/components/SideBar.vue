<template>
        <v-navigation-drawer permanent app dark color="#fff" :mini-variant.sync="mini">
            <div class="logotipo">
                <v-img :src="require('@/assets/logos/ICONS_SPA_ISOLOGO.svg')" max-width="100"></v-img>
            </div>
            <v-list dense>
                <v-list-item-group v-model="selectedItem" color="white" active-class="bg-active">
                    <v-list-item class="px-2" v-for="(item, i) in items" :key="i" v-slot="{ active }">
                        <v-list-item-icon class="ml-2" style="width: 20px;">
                            <v-img :src="item.url"></v-img>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title class="text-h7" v-text="item.title"
                                :class="active ? 'white--text' : 'grey--text'"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
</template>
<script>
export default {
    data: () => ({
        selectedItem: 0,
        items: [
            { url: require("@/assets/iconos/icon_inicio.svg"), title: 'Inicio', route: '/calendar', },
            { url: require("@/assets/iconos/icon_calendario.svg"), title: 'Calendario', route: '/patients' },
            { url: require("@/assets/iconos/icon_paciente.svg"), title: 'Pacientes', route: '/messages' },
            { url: require("@/assets/iconos/icon_mensaje.svg"), title: 'Mensajes', route: '/dashboard' },
            { url: require("@/assets/iconos/icon_finanzas.svg"), title: 'Finanzas', route: '/vouchers' },
            { url: require("@/assets/iconos/icon_estadistica.svg"), title: 'Estadísticas', route: '/campaigns' },
            { url: require("@/assets/iconos/icon_marketing.svg"), title: 'Marketing', route: '/quotes' },
            { url: require("@/assets/iconos/icon_noticia.svg"), title: 'Noticias', route: '/settings' },
            { url: require("@/assets/iconos/icon_compras.svg"), title: 'Compras', route: '/edicion-de-perfil' },
            { url: require("@/assets/iconos/icon_asistente.svg"), title: 'Asistente', route: '/edicion-de-perfil' },
            { url: require("@/assets/iconos/icon_ajuste.svg"), title: 'Ajustes', route: '/edicion-de-perfil' },
        ],
        mini: true,
    })
}
</script>
    
<style>
.image {
    border: 2px solid #2EBFAF;
}

.v-navigation-drawer {
    border-right: 1px solid #ddd;
    height: 85px;
    box-shadow: 3px 0px 5px 1px #eaeaea;
}

.logotipo {
    display: flex;
    justify-content: center;
}


.v-list-item:hover {
    background-color: #7900ff;
    color: white;
}


.bg-active {
    background-color: #7900ff;
    color: white !important;
}

.v-img:hover {
    color: white !important;

}
</style>


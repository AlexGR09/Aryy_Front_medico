<template>
    <v-navigation-drawer app color="#ffffff" dark v-model="drawer" :mini-variant.sync="mini" permanent>
        <div class="btn-icon">
            <v-btn icon @click.stop="mini = !mini">
                <v-icon color="#000">mdi-chevron-left</v-icon>
            </v-btn>
        </div>
        <v-list-item class="px-2">
            <v-list-item-avatar>
                <v-img class="px-4" :src="require('@/assets/logos/ICONS_SPA_ISOTIPO.svg')" max-width="80"></v-img>
            </v-list-item-avatar>
            <v-list-item-title>
                <v-img :src="require('@/assets/logos/ICONS_SPA_LOGOTIPO.svg')" max-width="80"></v-img>
            </v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list dense>
            <v-list-item-group v-model="selectedItem" color="white" active-class="bg-active">
                <v-list-item class="px-2 btn-icons-list" v-for="(item, i) in items" :key="i" v-slot="{ active }" route
                    :to="item.route" style="  text-decoration: none;">
                    <v-list-item-icon class="ml-2 " style="width: 20px;">
                        <v-img :class="active ? '' : 'white--src'" active-class="bg-active" :src="item.url"></v-img>
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
    data() {
        return {
            drawer: true,
            items: [
                { url: require("@/assets/iconos/icon_inicio.svg"), title: 'Inicio', route: '/dashboard', },
                { url: require("@/assets/iconos/icon_calendario.svg"), title: 'Calendario', route: '/patients' },
                { url: require("@/assets/iconos/icon_paciente.svg"), title: 'Pacientes', route: '/messages' },
                { url: require("@/assets/iconos/icon_mensaje.svg"), title: 'Mensajes', route: '/hola' },
                { url: require("@/assets/iconos/icon_finanzas.svg"), title: 'Finanzas', route: '/vouchers' },
                { url: require("@/assets/iconos/icon_estadistica.svg"), title: 'Estadísticas', route: '/campaigns' },
                { url: require("@/assets/iconos/icon_marketing.svg"), title: 'Marketing', route: '/quotes' },
                { url: require("@/assets/iconos/icon_noticia.svg"), title: 'Noticias', route: '/settings' },
                { url: require("@/assets/iconos/icon_compras.svg"), title: 'Compras', },
                { url: require("@/assets/iconos/icon_asistente.svg"), title: 'Asistente', },
                { url: require("@/assets/iconos/icon_ajuste.svg"), title: 'Ajustes', },
            ],
            mini: true,
        }
    },
}
</script>

<style>
.image {
    border: 2px solid #2EBFAF;
}

.v-navigation-drawer {
    border-right: 1px solid rgb(158, 157, 157);
    height: 85px;
    box-shadow: 3px 0px 5px 1px #eaeaea;
}

.logotipo {
    display: flex;
    justify-content: center;
}

.bg-active {
    background-color: #7900ff;
    color: white !important;
}


.btn-icons-list:hover {
    background-color: #7900ff;
    color: white;
    text-decoration: none;
}
.btn-icon {
    z-index: 30;
    top: 330px;
    left: 30px;
    border-radius: 2px;
    padding: 5px;
}
</style>
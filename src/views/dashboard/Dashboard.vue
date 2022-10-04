<!--Maquetación de componentes al Dashboard | Luis Reyes-->
<template>
    <div class="container">
        <v-row class="row">
        <v-col cols="12" md="4">
            <h4>CITAS</h4>
            <dashboard-citas></dashboard-citas>
        </v-col>
        <v-col cols="12" md="8">
            <v-row class="match-height">
                <v-col cols="12" sm="4">
                    <dashboard-marketing></dashboard-marketing>
                </v-col>
                <v-col cols="12" sm="4">
                    <dashboard-asistente></dashboard-asistente>
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="12" sm="6" md="4">
            <h4>MENSAJES</h4>
            <dashboard-mensajes></dashboard-mensajes>
        </v-col>
        <v-col cols="12" md="8">
            <h4>NOTICIAS</h4>
            <dashboard-noticias></dashboard-noticias>
        </v-col>
    </v-row>
    </div>
</template>
<script>

// Importamos los componentes al contenedor del Dashboard | Luis Reyes
import DashboardCitas from './DashboardCitas.vue'
import DashboardMensajes from './DashboardMensajes.vue'
import DashboardNoticias from './DashboardNoticias.vue'
import DashboardMarketing from './DashboardMarketing.vue'
import DashboardAsistente from './DashboardAsistente.vue'

export default {
    components: {
        DashboardCitas,
        DashboardMensajes,
        DashboardNoticias,
        DashboardMarketing,
        DashboardAsistente
    }
}

</script>
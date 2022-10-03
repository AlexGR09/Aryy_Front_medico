<!--Maquetación de Cards de Mensajes | Luis Reyes-->
<template>
    <v-card class="cita-proxima">
        <v-row class="ma-0 pa-0">
            <v-col cols="8">
                <v-card-title class="text-no-wrap pt-1 ps-2">CITA PRÓXIMA</v-card-title>
                <v-card-subtitle class="text-no-wrap ps-2"> Nombre del paciente</v-card-subtitle>
                <v-card-text class="d-flex align-center mt-2 pb-2 ps-2">
                    <div>
                        <p>05/ Diciembre / 2022</p>
                        <p>10:00 HRS</p>
                    </div>
                </v-card-text>
            </v-col>
            <v-col cols="4">
                <v-img contain height="108" max-width="83" class="cita-proxima-icono" src="@/assets/iconos/PACIENTES.svg">
                </v-img>
            </v-col>
        </v-row>
    </v-card>
</template>

<style scoped>

.cita-proxima{
    position: relative;   
}
.cita-proxima-icono{
    position: relative;
    bottom: 10%;
    right: 8%;
}

</style>
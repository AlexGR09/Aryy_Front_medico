<template>

    <v-col cols="12" md="4">
        <br>
        <div>
            <h3>Bienvenido, Dr. Armando Bronca Seguro</h3>
            <h4>Tiene 4 citas el día de hoy</h4>
            <br>
            <h2>CITAS</h2>
        </div>
        <br>
        <v-card class="greeting-card">
            <v-row class="ma-0 pa-0">
                <v-col cols="8">
                    <v-card-title class="text-no-wrap pt-1 ps-2">
                        CITA PRÓXIMA
                    </v-card-title>
                    <v-card-subtitle class="text-no-wrap ps-2">
                        <h2>FULANITO DENTAL</h2>
                    </v-card-subtitle>
                    <v-card-text class="d-flex align-center mt-2 pb-2 ps-2">
                        <div>
                            <p class="text-xl font-weight-semibold primary--text mb-2">
                                5 / Diciembre / 2022
                            </p>
                            <p class="text-xl font-weight-semibold primary--text mb-2">
                                10:00 hrs
                            </p>
                        </div>
                    </v-card-text>
                </v-col>
                <v-col cols="4">
                    <v-img contain height="180" width="110" :src="require('@/assets/iconos/PACIENTES.svg')"
                        class="greeting-card-bg"></v-img>
                    <v-img contain height="108" max-width="83" class="greeting-card-trophy"></v-img>
                </v-col>
            </v-row>
        </v-card>
    </v-col>
</template>
  
<style lang="scss" scoped>
.greeting-card {
    position: relative;

    .greeting-card-bg {
        position: absolute;
        bottom: 0;
        right: 0;
    }

    .greeting-card-trophy {
        position: absolute;
        bottom: 10%;
        right: 8%;
    }
}

// rtl
.v-application {
    &.v-application--is-rtl {
        .greeting-card-bg {
            right: initial;
            left: 0;
            transform: rotateY(180deg);
        }

        .greeting-card-trophy {
            left: 8%;
            right: initial;
        }
    }
}

.greeting-card {
    background: rgb(255, 255, 255);
    background: -moz-linear-gradient(50deg, rgba(255, 255, 255, 1) 35%, rgba(244, 237, 255, 1) 90%);
    background: -webkit-linear-gradient(50deg, rgba(255, 255, 255, 1) 35%, rgba(244, 237, 255, 1) 90%);
    background: linear-gradient(50deg, rgba(255, 255, 255, 1) 35%, rgba(244, 237, 255, 1) 90%);
    box-shadow: 115px 8px 9px -5px rgba(94, 185, 255, 0.36);
    -webkit-box-shadow: 115px 8px 9px -5px rgba(94, 185, 255, 0.36);
    -moz-box-shadow: 115px 8px 9px -5px rgba(94, 185, 255, 0.36);
}
</style>
  
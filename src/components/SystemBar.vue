<template>
    <v-app-bar color="white" app dark flat>
        <v-spacer></v-spacer>


        <div class="d-flex justify-end ">
           
            <v-btn small class="withoutupercase" outlined color="grey darken-1">Lista de citas</v-btn>
            <v-btn small class="withoutupercase" outlined color="grey darken-1">Día</v-btn>
            <v-btn small class="withoutupercase" outlined color="grey darken-1">Semana</v-btn>
            <v-btn small class="withoutupercase" outlined color="grey darken-1">Agenda</v-btn>
            <v-btn small class="withoutupercase" outlined color="grey darken-1">Horas disponibles</v-btn>
        </div>

        <v-avatar tile>
            <v-icon small color="#98a1ab">fa-light fa-share-nodes</v-icon>
        </v-avatar>
        <v-avatar tile>
            <v-icon small color="#98a1ab">fa-solid fa-gear</v-icon>
        </v-avatar>
    </v-app-bar>
</template>




<style>
.v-btn.withoutupercase {
    text-transform: none !important;
}
</style>
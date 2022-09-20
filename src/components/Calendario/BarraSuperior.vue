<!-- Lógica -->
<script setup>
    // Random suario temporal
    const user = { fullName:"Anna Doe", email:"Anna.doe@doe.com"}
    // Vistas de calendario
    const vistasCalendario = [
    { text:'Mes', route:'/'},
    { text:'Semana', route:'/projects'},
    { text:'Día', route:'/team'}
    ]
</script>
  
<!-- Estructura -->
<template>
    <div>
        <v-app-bar dense flat class="white my-5">
            <!-- Reiniciar -->
            <v-btn class="ma-2" color="deep-purple darken-2" dark>
                <span>Este mes</span>
            </v-btn>
            <!-- Espacio -->
            <v-spacer/>
            <!-- Buscador -->
            <v-toolbar flat>
                <v-autocomplete
                :loading="loading"
                :items="items"
                :search-input.sync="search"
                flat
                dense
                clearable
                solo-inverted
                hide-no-data
                hide-details
                class="mx-1"
                label="Buscar cita"
                append-icon="mdi-magnify"
                ></v-autocomplete>
            </v-toolbar>
            <!-- Dropdown menu -->
            <div class="text-center">
            <v-menu offset-y bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="deep-purple darken-1" dark v-bind="attrs" v-on="on">
                        Semana
                        <v-icon>mdi-menu-down</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item link v-for="vista in vistasCalendario" :key="vista.text" router :to="vista.route">
                        <v-list-item-title>{{ vista.text }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            </div>
            <!-- Botones -->
            <v-btn icon large color="grey">
                <v-icon>mdi-bell-outline</v-icon>
            </v-btn>
            <v-btn icon large color="grey">
                <v-icon>mdi-cog</v-icon>
            </v-btn>
            <!-- Avatar -->
            <v-menu bottom min-width="150px" rounded offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn icon x-large v-on="on">
                        <v-avatar size="39">
                            <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
                        </v-avatar>
                    </v-btn>
                </template>
                <v-card>
                    <v-list-item-content class="justify-center">
                        <div class="mx-auto text-center">
                            <h3>{{ user.fullName }}</h3>
                            <p class="text-caption mt-1">
                                {{ user.email }}
                            </p>
                            <v-divider class="my-3"/>
                            <v-btn depressed rounded text>
                                Account
                            </v-btn>
                            <v-divider class="my-3"/>
                            <v-btn depressed rounded text>
                                Log out
                            </v-btn>
                        </div>
                    </v-list-item-content>
                </v-card>
            </v-menu>
        </v-app-bar>
    </div>
</template>
  
<!-- Style -->
<style>
    h1{
        color: rebeccapurple;
    }
</style>
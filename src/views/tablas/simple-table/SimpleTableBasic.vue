<template>
    <v-simple-table>
        <template v-slot:default>
            <thead>
                <tr>
                    <th class="text-uppercase">
                        NOMBRE Y APELLIDOS
                    </th>
                    <th class="text-center text-uppercase">
                        Telefono
                    </th>
                    <th class="text-center text-uppercase">
                        Ultima Visita
                    </th>
                    <th class="text-center text-uppercase">
                        Siguiente Visita
                    </th>
                    <th class="text-center text-uppercase">
                        Acciones
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="character in characters" :key="character.id">
                    <td>{{character.name}}</td>
                    <td class="text-center">
                        {{character.id}}
                    </td>
                    <td class="text-center">
                        {{character.species}}
                    </td>
                    <td class="text-center">
                        <a href="#">Crear cita</a>
                    </td>
                    <td class="text-center">
                              <v-img  class="btn btn-outline-success" href="#" :src="require('@/assets/iconos/BT_VER.svg')" width="30px"></v-img>
                              <v-img  class="btn btn-outline-success" href="#" :src="require('@/assets/iconos/BT_EDIT.svg')" width="30px"></v-img>
                              <v-img class="btn btn-outline-success" href="#" :src="require('@/assets/iconos/BT_BORR.svg')" width="30px"></v-img>
                                    
                    </td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>
</template>

<script>
    // eslint-disable-next-line
    /* eslint-disable */
    import axios from 'axios'
    export default {
        name: 'ProfileView',
        components: {
        },
        data() {
    
            return {
                characters: [],
                //agregamos una variable vacio
    
            }
        },
        mounted() {
            console.log('verificando');
            this.getTodos();
    
        },
        methods: {
            getTodos() {
                console.log('peticion GET');
                axios.get('https://rickandmortyapi.com/api/character')
                    .then(res => {
                        /* console.log(res) */
                        this.characters = res.data.results
                    })
                    .catch(e => {
                        /* console.log(e); */
                        console.log(e);
                    })
            },
        }
    }
    </script>
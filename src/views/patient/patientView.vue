<template>
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col">
                <!-- <form class="form-inline my-2 my-lg-0">
                    <input v-model="search" class="form-control mr-sm-2 roundend" type="search"
                        placeholder="Busqueda por nombre" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                </form>
                <div class="row">
                    <div class="col-4">
                        <v-btn class="mt-6 mr-6" color="primary" elevation="2" router to="/addPatient">Agregar
                            paciente</v-btn>
                    </div>
                </div> -->
                <div>
                </div>
                <br>
                <v-col
                    md="12"
                    align="center"
                    justify="center">
                <v-card width="1500" rounded>
                    <v-card-text>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">NOMBRE Y APELLIDOS</th>
                            <th scope="col">TELÉFONO</th>
                            <th scope="col">ÚLTIMA VISITA</th>
                            <th scope="col">SIGUIENTE VISITA</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody v-for="character in characters" :key="character.id">
                        <tr>
                            <td>{{character.name}}</td>
                            <td>{{character.species}}</td>
                            <td>{{character.name}}</td>
                            <td><a class="date">Crear cita</a></td>
                            <td>
                                <v-btn class="ml-2" icon small>
                                  <v-img :src="require('@/assets/iconos/ICONS_SPA_PACIENTES_2_BT_VER.svg')" max-width="23"></v-img>
                                </v-btn>
                                <v-btn class="ml-2" icon small>
                                  <v-img :src="require('@/assets/iconos/ICONS_SPA_PACIENTES_2_BT_EDIT.svg')" max-width="23"></v-img>
                                </v-btn>
                                <v-btn class="ml-2" icon small>
                                  <v-img :src="require('@/assets/iconos/ICONS_SPA_PACIENTES_2_BT_BORR.svg')" max-width="23"></v-img>
                                </v-btn>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </v-card-text>
            </v-card>
        </v-col>
            </div>
        </div>
        <br />
        <div>
            <nav aria-label="Page navigation example ">
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="#">Anterior</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Siguiente</a></li>
                </ul>
            </nav>
        </div>
        
    <inde-x />
    </div>
</template>


<script>
// eslint-disable-next-line
/* eslint-disable */
import indeX from '@/indeX.vue'
import axios from 'axios'
export default {
    name: 'ProfileView',
    components: 
    {
        indeX,
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
<style>
    th{
        font-family: Montserrat;
    }
    tbody{
        font-family: MontserratBold;
    }
    a.date{
        color: #9966ff !important;
        font-family: Montserrat;
        font-size: 15px;
    }
    .boton{
        color: #9966ff;
    }
</style>


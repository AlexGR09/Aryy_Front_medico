<template>
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col">
                <br>
                <form class="form-inline my-2 my-lg-0">
                    <input v-model="search" class="form-control mr-sm-2 roundend" type="search"
                        placeholder="Busqueda por nombre" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                </form>
                <div class="row">
                    <div class="col-4">
                        <v-btn class="aboutMe" color="primary" elevation="2" router to="/patients/agregar">Agregar
                            paciente</v-btn>
                    </div>
                </div>
                <div>
                </div>
                <br>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Especilidad</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody v-for="character in characters" :key="character.id">
                        <tr>
                            <th scope="row">{{character.id}}</th>
                            <td>{{character.name}}</td>
                            <td>{{character.species}}</td>
                            <td>
                                <button type="button" class="btn btn-outline-success">
                                    <i class="fa fa-edit" aria-hidden="true"></i>
                                </button>
                                <button type="button" class="btn btn-outline-danger">
                                    <i class="fa fa-trash" aria-hidden="true"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div>
            <nav aria-label="Page navigation example ">
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="#">atras</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">siguiente</a></li>
                </ul>
            </nav>
        </div>
    </div>
</template>


<script>
// eslint-disable-next-line
/* eslint-disable */
import axios from 'axios'
export default {
    name: 'ProfileView',
    components: 
    {
        
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


<template>
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col">
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Busqueda por nombre" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                </form>



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
                            <td><i class="fa fa-edit" aria-hidden="true"></i> <i class="fa fa-trash" aria-hidden="true"></i></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
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
            characters: []

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
        getItem() {
            axios.put()
        }
    }
}
</script>
    
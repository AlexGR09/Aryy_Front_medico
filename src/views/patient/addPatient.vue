<template>
    <div>
        <h1>agregar paciente</h1>
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
<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col">
        <br>
          <v-col
            md="12"
            align="center"
            justify="center"
          >
            <v-card rounded >
              <v-data-table
                :headers="headers"
                :items="characters"
                sort-by="calories"
              >
                <template v-slot:[`item.create`]>
                    <a>Crear cita</a>
                </template>
                <template v-slot:[`item.actions`]="{ item }">
                    <v-btn class="ml-2" icon small>
                      <v-img :src="require('@/assets/iconos/ICONS_SPA_PACIENTES_2_BT_VER.svg')" max-width="23"></v-img>
                    </v-btn>
                    <v-btn class="ml-2" icon small>
                      <v-img :src="require('@/assets/iconos/ICONS_SPA_PACIENTES_2_BT_EDIT.svg')" max-width="23"></v-img>
                    </v-btn>
                    <v-btn   @click="deleteItem(item)" class="ml-2" icon small>
                      <v-img :src="require('@/assets/iconos/ICONS_SPA_PACIENTES_2_BT_BORR.svg')" max-width="23"></v-img>
                    </v-btn>
                </template>
              </v-data-table>
            </v-card>
          </v-col>
      </div>
    </div>
    <br />
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
            headers: [
        {
          text: 'NOMBRE Y APELLIDOS',
          align: 'start',
          filterable: false,
          value: 'name',
        },
        { text: 'TELÉFONO', value: 'species' },
        { text: 'ÚLTIMA VISITA', value: 'gender' },
        { text: 'SIGUIENTE VISITA', value: 'create', sortable: false  },
        { text: '', value: 'actions', sortable: false },
        { text: '', value: '', sortable: false },
      ],
      editedIndex: -1,
      keys: [
        'Nombre y apellidos',
        'Teléfono',
        'Última visita',
        'Siguiente visita',
      ],
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
                     console.log(res)
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
    a{
        color: #9966ff !important;
        font-family: Montserrat;
        font-size: 15px;
    }
    .boton{
        color: #9966ff;
    }
    .select{
        font-family: MontserratLight;
        font-size: 15px;
    }
</style>

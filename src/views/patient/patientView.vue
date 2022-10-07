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
                  <v-card-title>
                      <v-row justify="end" class="select mb-n16"><v-col md="2" class="select mb-5" >
                          <v-select
                              
                              v-model="sortBy"
                              outlined
                              flat
                              @current-items="current"
                              class="select mb-n16"
                              hide-details
                              dense
                              background-color="clarito"
                              :items="keys"
                              placeholder="Ordenar por"
                          ></v-select>
                      </v-col></v-row>
                  </v-card-title>
                  <v-data-table
                      class="pa-5 mt-n5"
                      :headers="headers"
                      :items="characters"
                      sort-by="calories"
                      :footer-props="{
                          showFirstLastPage: true,
                          firstIcon: 'mdi-arrow-collapse-left',
                          lastIcon: 'mdi-arrow-collapse-right',
                          prevIcon: 'mdi-minus',
                          nextIcon: 'mdi-plus',
                          'items-per-page-text':'Pacientes por página'
                      }"
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
            width:"450",
            align: 'start'
          },
          { text: 'TELÉFONO', value: 'species',width:"250", align: 'start' },
          { text: 'ÚLTIMA VISITA', value: 'gender',width:"250", align: 'start' },
          { text: 'SIGUIENTE VISITA', value: 'create', sortable: false, width:"250", align: 'start'  },
          { text: '', value: 'actions', sortable: false,width:"400", align: 'start' },
          { text: '', value: '', sortable: false, align: 'start'},
        ],
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
  
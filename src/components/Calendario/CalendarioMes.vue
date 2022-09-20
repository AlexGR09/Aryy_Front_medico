<script>
    export default {
      // eventos aleatorios para prueba
      data: () => ({
        today: '2019-01-08',
        events: [
          {
            title: 'Vacaciones',
            details: 'Fiesta en Mecahsoft',
            date: '2018-12-30',
            open: false
          },
          {
            title: 'Vacaciones',
            details: 'Fiesta en Mecahsoft',
            date: '2018-12-31',
            open: false
          },
          {
            title: 'Vacaciones',
            details: 'Fiesta en Mecahsoft',
            date: '2019-01-01',
            open: false
          },
          {
            title: 'Reunión',
            details: 'Reunion de avances con Victor',
            date: '2019-01-07',
            open: false
          },
          {
            title: 'Cumpleaños! 🎂🥳 ',
            details: 'Fiesta de cumpleaños de Luis',
            date: '2019-01-03',
            open: false
          },
          {
            title: 'Nuevo año!',
            details: 'Feliz fiestas de año nuevo',
            date: '2019-01-01',
            open: false
          },
          {
            title: 'Conferencia',
            details: 'Hablar sobre temas relacionados al tema de ayer',
            date: '2019-01-21',
            open: false
          },
          {
            title: 'Entrega',
            details: 'Programar un sistema en menos de 2 horas',
            date: '2019-02-01',
            open: false
          }
        ]
      }),
      computed: {
        // Convierte la lista de eventos en un diccionario de listas con llave = fecha
        eventsMap () {
          const map = {}
          this.events.forEach(e => (map[e.date] = map[e.date] || []).push(e))
          return map
        }
      },
      methods: {
        open (event) {
          alert(event.title)
        }
      }
    }
</script>

<template>
    <v-layout>
      <v-flex>
        <v-sheet height="500">
          <v-calendar :now="today" :value="today" color="error" locale="es-mx">
            <template v-slot:day="{ date }">
              <template v-for="event in eventsMap[date]">
                    <v-btn :key="event.title"
                      small
                      flat
                      block
                      v-on="on">
                      {{event.title}}
                    </v-btn>
              </template>
            </template>
          </v-calendar>
        </v-sheet>
      </v-flex>
    </v-layout>
  </template>
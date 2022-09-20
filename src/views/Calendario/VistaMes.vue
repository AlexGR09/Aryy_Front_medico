<template>
  <div>
    <v-container deep-purple lighten-5 fluid>
    <v-container white rounded-lg>
    <!-- Muestra los botones de navegacion -->
      <v-layout>
        <v-flex d-flex justify-center>
          <CalendarDateSelector
          :current-date="today"
          :selected-date="ultimaFechaSeleccionada"
          @dateSelected="selectDate"
        />
        </v-flex>
      </v-layout>
      <!-- Muestra El calendario -->
      <v-layout py-5>
        <v-flex>
          <CalendarioMes/>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
  </div>
</template>

<script>
import dayjs from "dayjs";
import CalendarDateSelector from "../../components/Calendario/CalendarDateSelector.vue";
import CalendarioMes from "../../components/Calendario/CalendarioMes.vue"

export default {
  name: "CalendarMonth",
  components: {
    CalendarDateSelector,
    CalendarioMes,
  },
  data() {
    return {
      ultimaFechaSeleccionada: dayjs()
    };
  },
  computed: {
    today() {
      return dayjs().format("YYYY-MM-DD");
    }
  },
  methods: {
    selectDate(nuevaFechaSeleccionada) {
      this.ultimaFechaSeleccionada = nuevaFechaSeleccionada;
    }
  }
};
</script>
<template>
  <div>
    <v-flex xs12 sm6 class="py-2">
      <v-btn-toggle dense borderless="true">
        <!-- Event listeners son agregados para activar
              el método apropiado cuando los botones sean
              oprimidos -->
        <v-btn flat @click="selectPrevious">
          <v-icon color="deep-purple darken-1">mdi-chevron-left-box</v-icon>
        </v-btn>
        <v-btn flat @click="selectCurrent" class="font-weight-bold">
          {{ mesSeleccionado }}
        </v-btn>
        <v-btn flat @click="selectNext">
          <v-icon color="deep-purple darken-1">mdi-chevron-right-box</v-icon>
        </v-btn>
      </v-btn-toggle>
    </v-flex>
  </div>
</template>
  
  <script>
  import dayjs from "dayjs";
  export default {
    name: "CalendarModeSelector",
    props: {
      currentDate: {
        type: String,
        required: true
      },
      selectedDate: {
        type: Object,
        required: true
      }
    },
    methods: {
      selectPrevious() {
        let newSelectedDate = dayjs(this.selectedDate).subtract(1, "month");
        this.$emit("dateSelected", newSelectedDate);
      },
      selectCurrent() {
        let newSelectedDate = dayjs(this.currentDate);
        this.$emit("dateSelected", newSelectedDate);
      },
      selectNext() {
        let newSelectedDate = dayjs(this.selectedDate).add(1, "month");
        this.$emit("dateSelected", newSelectedDate);
      }
    },
    computed: {
      mesSeleccionado() { return this.selectedDate.format("MMMM YYYY"); }
    }
  };
  </script>
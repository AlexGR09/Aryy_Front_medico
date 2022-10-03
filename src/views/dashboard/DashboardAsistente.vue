<template>
    <v-card class="cita-proxima">
        <v-row class="ma-0 pa-0">
            <v-col cols="8">
                <v-card-title class=" text-center text-no-wrap pt-1 ps-2">ASISTENTE</v-card-title>
                <div class="text-center">
                    <v-progress-circular :rotate="-90" :size="170" :width="15" :value="value" color="primary">
                        {{ value }} %
                        Completado
                    </v-progress-circular>
                </div>
                <v-card-subtitle class="text-no-wrap ps-2">Realizas detalles de capacitiación aqui</v-card-subtitle>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            interval: {},
            value: 0,
        }
    },
    beforeDestroy() {
        clearInterval(this.interval)
    },
    mounted() {
        this.interval = setInterval(() => {
            if (this.value === 100) {
                return (this.value = 0)
            }
            this.value += 10
        }, 1000)
    },
}
</script>
  
<style scoped>
.v-progress-circular {
    margin: 1rem;
}
</style>
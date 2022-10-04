<!-- Pintando el componente de la tabla | Luis Reyes-->
<template>
    <div class="container text-center">
        <v-row>
        <v-col cols="12">
            <v-card>
                <SimpleTable></SimpleTable>
            </v-card>
        </v-col>
    </v-row>
    </div>
</template>
<script>
    import SimpleTable from './simple-table/SimpleTableBasic.vue'

    export default{
        components:{
            SimpleTable
        },
        setup(){
            return{}
        },
    }
</script>
<template>
    <v-card>
        <v-carousel>
            <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" reverse-transition="fade-transition"
                transition="fade-transition"></v-carousel-item>
        </v-carousel>
        <v-card>
            <h2>fff</h2>
        </v-card>

    </v-card>

</template>


<script>
export default {
    data() {
        return {
            items: [

                {
                    src: '@/assets/fondo.jpg',
                },
            ],
        }
    },
}
</script>
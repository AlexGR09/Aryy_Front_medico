<template>
    <v-row>
        <v-col
        md="7"
        >
        <video ref="videoRef" :src="require('@/assets/videos/intro.mp4')"  id="video-container" width="100%" playsinline muted loop autoplay></video>
        </v-col>
        <v-col
        md="5"
        >
        <form-login />
        </v-col>
    </v-row>
</template>
<script>
  import formLogin from './formLogin.vue'
  export default {
    name: "LoginR",
    components: {
      formLogin,
    },
  }
</script>
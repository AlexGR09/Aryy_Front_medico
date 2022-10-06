<template>
    <v-row>
        <v-col
        xs="7"
        sm="7"
        md="7"
        lg="7"
        mg="7"
        >
        <video
          :src="require('@/assets/videos/intro.mp4')"
          playsinline
          width="100%"
          loop
          autoplay
        ></video>
        </v-col>
        <v-col
        xs="5"
        sm="5"
        md="5"
        lg="5"
        mg="5"
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
<style>
video{
}
</style>
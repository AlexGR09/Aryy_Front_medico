<template>
  <div class="ma-16 pa-16">
    <v-img :src="require('@/assets/logos/ICONS_SPA_ISOLOGO.svg')" max-width="150"></v-img>
    <h1>Especialistas, medicinas y <br/> análisis clínicos en un solo lugar</h1>
    <p>Haz una cita, cotiza tus medicamentos y análisis <br/> clínicos o lleva control de tu tratamiento con <br/>ayuda de aryy.</p>
      
          <v-tabs
            v-model="tabs"
          >
            <v-tab>
              Iniciar sesión
            </v-tab>
            <v-tab>
              Registrarse
            </v-tab>
          </v-tabs>
  
      <v-tabs-items v-model="tabs">
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <vs-input  v-model="username" shadow placeholder="Usuario o teléfono" />
               <vs-input
                  type="password"
                  v-model="value"
                  shadow
                  placeholder="Contraseña"
                  :visiblePassword="hasVisiblePassword"
                  icon-after
                  @click-icon="hasVisiblePassword = !hasVisiblePassword">
                  <template #icon>
                    <i v-if="!hasVisiblePassword" class='mdi-eye'></i>
                    <i v-else class='bx bx-hide'></i>
                  </template>

                  <template v-if="getProgress >= 100" #message-success>
                    Secure password
                  </template>

      </vs-input> 
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-title class="text-h5">
              An even better title
            </v-card-title>
            <v-card-text>
              <p>
                Maecenas
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
  </div>
</template>
<script>
  import Vue from 'vue'
  import Vuesax from 'vuesax'
  import 'vuesax/dist/vuesax.css' //Vuesax styles
  Vue.use(Vuesax, {
    // options here
  })
  export default {
    name: "formLogin",
    data: () => ({
      tabs: null,
      hasVisiblePassword: false
    }),
  }
</script>
<style>
h1{
  font-family: "MontserratBold";
  font-size: 30px;
  color: #4f565f;
}
p{
  font-family: "MontserratLight";
  color: #999999;
  font-size: 20px;
}
</style>
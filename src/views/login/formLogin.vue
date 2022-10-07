<template>
  <div class="ma-16 ">
    <v-img :src="require('@/assets/logos/ICONS_SPA_ISOLOGO.svg')" max-width="150"></v-img>
    <h1>Especialistas, medicinas y <br/> análisis clínicos en un solo lugar</h1>
    <p>Haz una cita, cotiza tus medicamentos y análisis <br/> clínicos o lleva control de tu tratamiento con <br/>ayuda de aryy.</p>
    <!-- ---- Sección de vista iniciar/registrar ---- -->
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
       <!--  ----Iniciar sesión---- -->
       <v-tab-item>
          <v-col
          xs="9"
          sm="9"
          md="9"
          >
          <v-card flat>
            <v-card-text >
              <v-text-field justify-right placeholder="Usuario o telefono" rounded height="15" class="textfield"></v-text-field>
              <br />
              <v-text-field
              height="15"
              rounded 
              class="textfield"
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              placeholder="Contraseña"
              @click:append="show1 = !show1"
            ></v-text-field>
                <v-btn class="mt-4" block color="primary" height="50">
                  Iniciar sesión
                </v-btn>
                <br />
                <p class="accede">O accede usando</p>
                <v-btn outlined class="btn" width="100%" height="50"><v-icon color="blue" class="mr-2">fa-brands fa-square-facebook</v-icon>
                  Iniciar sesión con Facebook
                </v-btn>
                <v-btn class="mt-4 btn" outlined width="100%" height="50"><v-icon class="mr-2 fa-google">fa-brands fa-google</v-icon>
                  Iniciar sesión con Google
                </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
        </v-tab-item>
        <!-- ------Componente para tab de registro----- -->
        <register-component />
      </v-tabs-items>
  </div>
</template>
<script>
  import Vue from 'vue'
  import Vuesax from 'vuesax'
  import registerComponent from './registerComponent.vue'
  import 'vuesax/dist/vuesax.css' //Vuesax styles
  Vue.use(Vuesax, {
    // options here
  })
  export default {
    name: "formLogin",
    components: {
      registerComponent,
    },
    data: () => ({
      tabs: null,
      show1: false,
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
p.accede{
    font-size: 15px;
    font-family: "MontserratMedium";
  }
  .fa-google {
  background: conic-gradient(from -45deg, #ea4335 110deg, #4285f4 90deg 180deg, #34a853 180deg 270deg, #fbbc05 270deg) 73% 55%/150% 150% no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}
.btn {
    text-transform: unset !important;
    font-family: Montserrat;
    border: thin solid #CCCCCC;
}
.textfield{
    box-shadow: 0 0 10pt 2pt #f4edff;
    height: 50px;
    font-family: Montserrat;
  }
</style>
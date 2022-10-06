<template>
    <v-tab-item>
          <v-card flat>
            <v-col
          md="9"
          >
          <v-text-field
            placeholder="Ingresa un usuario"
              class="textfield"
              rounded
            ></v-text-field>
            <br />
            <v-text-field
            placeholder="Ingresa un correo"
              class="textfield"
              rounded
            ></v-text-field>
            <br />
            <v-text-field
              placeholder="Ingresa una contraseña" 
              rounded
              class="textfield"
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.min]"
              :type="show1 ? 'text' : 'password'"
              hint="Debe contener al menos 8 carácteres"
              @click:append="show1 = !show1"
            ></v-text-field>
            <br /> 
            <v-text-field
              placeholder="Confirma tu contraseña"
              class="textfield"
              rounded
              v-model="passwordconfirm"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              hint="Debe contener mínimo 8 carácteres"
              @click:append="show1 = !show1"
            ></v-text-field>
            <v-btn class="mt-5" block color="primary" height="50">
                  Registrarme
            </v-btn>
            <br /> 
            <v-row>
            <v-col 
              xs="1"
              sm="3"
              md="5"
            >
              <p class="accede">O registrate usando</p>
              </v-col>
              <v-col 
              xs="1"
              sm="2"
              md="3"
            >
              <a class="accede">Google</a>
              </v-col>
              <v-col 
              xs="1"
              sm="2"
              md="3"
            >
              <a class="accede">Facebook</a>
              </v-col>
            </v-row>
            </v-col>
          </v-card>
        </v-tab-item>
</template>

<script>
    export default {
      name: "registerForm",
      data: () => ({
        show1: false,
      rules: {
        min: v => v.length >= 8 || 'Debe contener mínimo 8 carácteres',
      },
      }),
    }
  </script>
  <style>
  .textfield{
    box-shadow: 0 0 10pt 2pt #f4edff;
    height: 50px;
    font-family: Montserrat;
  }
  .v-messages__message {
    font-size: 12px;
    
}
p.accede{
    font-size: 15px;
    font-family: "MontserratMedium";
  }
  a.accede{
    font-size: 15px;
    font-family: "MontserratBold";
  }
  </style>
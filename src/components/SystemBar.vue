<template>
    <v-app-bar app color="white"  height="100">
        <h3>{{ $options.name}}</h3>
        <v-spacer></v-spacer>
        <form class="form-inline my-2 my-lg-0">
          <input size="50px" v-model="search" class="form-control mr-6 roundend" type="search"
                        placeholder="Buscar paciente" aria-label="Search">
                </form>
                <v-btn 
                    outlined
                    class="boton mr-4"
                    :loading="isSelecting" 
                    @click="handleFileImport"
                >
                 Importar pacientes
                 <v-img :src="require('@/assets/iconos/ICONS_SPA_PACIENTES_2_IMPORTAR.svg')" class="ml-2" max-width="17"></v-img>
                </v-btn>
                <v-btn 
                    color="primary"
                    class="ml-2 mr-2 boton"
                >
                 Agregar paciente
                 <v-img :src="require('@/assets/iconos/ICONS_SPA_PACIENTES_2_AGREGAR.svg')" class="ml-2" max-width="17"></v-img>
                 <h1></h1>
                </v-btn>
        <v-btn class="ml-4" icon small>
            <v-img :src="require('@/assets/iconos/ICONS_SPA_PACIENTES_2_AJUSTES.svg')" max-width="23"></v-img>
        </v-btn>
        <v-btn class="ml-4" icon small>
            <v-img :src="require('@/assets/iconos/ICONS_SPA_PACIENTES_2_NOTIFICACION.svg')" max-width="23"></v-img>
        </v-btn>
        <v-btn class="ml-5 mr-7" fab  color="#7900ff">
            <v-icon large color="#fff">
                mdi-account
            </v-icon>
        </v-btn>
    </v-app-bar>
</template>
<script>
    export default {
        name: "VistaPacientes",
        data(){
            return {
                isSelecting: false,
                selectedFile: null
            }
        },
        methods: {
            handleFileImport() {
                this.isSelecting = true;

                // After obtaining the focus when closing the FilePicker, return the button state to normal
                window.addEventListener('focus', () => {
                    this.isSelecting = false
                }, { once: true });
                
                // Trigger click on the FileInput
                this.$refs.uploader.click();
            },
            onFileChanged(e) {
                this.selectedFile = e.target.files[0];

                // Do whatever you need with the file, liek reading it with FileReader
            },
        }
    }
</script>
<style>
.boton{
    text-transform: unset !important;
    font-family: MontserratMedium;
}
h3{
    font-family: MontserratBold;
}
</style>
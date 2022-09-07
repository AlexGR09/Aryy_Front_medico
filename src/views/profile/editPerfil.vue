<template>

    <div class="container">


        <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
            }
            <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
                Guardar
            </v-btn>
            <v-btn color="error" class="mr-4" @click="reset">
                cancelar
            </v-btn>

        </v-form>
    </div>
</template>
  
<script>
export default {
    data: () => ({
        valid: true,
        name: '',
        nameRules: [
            v => !!v || '¡complentar informacion¡',
            v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'completar informacion',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        select: null,
        items: [
            'Luis López',
            'Larael Franco Cruz',
            'Juvenal Diaz Mendoza',
            'Item 4',
        ],
        checkbox: false,
    }),
    methods: {
        validate() {
            this.$refs.form.validate()
        },
        reset() {
            this.$refs.form.reset()
        },
        resetValidation() {
            this.$refs.form.resetValidation()
        },
    },
}
</script>



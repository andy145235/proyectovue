<template>
    <v-container>
      <v-form @submit="submitForm">
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field v-model="nombre" label="Nombre" required></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field v-model="apellido" label="Apellido" required></v-text-field>
          </v-col>
        </v-row>
        <v-text-field v-model="correo" label="Correo Electrónico" type="email" required></v-text-field>
        <v-btn type="submit" color="primary">Enviar</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nombre: '',
        apellido: '',
        correo: ''
      }
    },
    methods: {
      submitForm() {
        // Aquí puedes agregar la lógica para enviar el formulario
        // por ejemplo, hacer una solicitud HTTP al servidor
        console.log('Formulario enviado:', this.nombre, this.apellido, this.correo)
      }
    }
  }
  </script>
  
  <style scoped>
  /* Estilos específicos para este componente */
  </style>
  
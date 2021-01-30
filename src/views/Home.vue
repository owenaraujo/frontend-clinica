<template>
  <div class="home">
    <b-container fluid>

      <b-row  >
        <b-col v-for="paciente of pacientes" v-bind:key="paciente.id" md="4"  class=" mt-2"><b-card class="bg-danger">{{paciente.nombre}}</b-card></b-col>
        
        
      </b-row>
    </b-container>
  </div>
</template>

<script>

import {mapState} from 'vuex'

export default {
  name: 'Home',
  components: {
    
  },
  computed:{
    ...mapState(['pacientes'])
  }

}
</script>

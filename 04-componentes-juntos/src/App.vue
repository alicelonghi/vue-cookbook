<template>
  <div id="app">
  	<!-- faz uso das tags dos componentes registrados -->
    <lvBusca></lvBusca>
    <hr>
    <lv-perfil></lv-perfil>
  </div>
</template>

<script>
// importa arquivo dos componentes
import lvBusca from './LvBusca.vue'
import lvPerfil from './LvPerfil.vue'

export default {
  name: 'app',
  // declara componentes para usar aqui
  components: {lvBusca, lvPerfil}
}
</script>
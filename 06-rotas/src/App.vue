<template>
  <div id="app">
  <!-- menu de navegacao entre rotas principais -->
    <router-link to="/">Inicial</router-link>
    <router-link to="/usuarios">Usuarios</router-link>
    <!-- conteudo da rota principal -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>
<template>
  <div id="app">
    <!-- Exibindo título com v-text e uma vez com v-once -->
    <h1 v-text="title"></h1>
    <h1 v-once v-text="title"></h1>

    <!-- Exibindo com mustache -->
    <h2>{{ subtitle }}</h2>
  
    <h2>{{ tarefas.length }}</h2> 
    <!-- Input só aparece quando houver tarefas, e representa a variavel subtitle -->
    <input :disabled="tarefas.length == 0" v-model="subtitle" type="text">
    
    <!-- Caso não tenha tarefas -->
    <div v-if="tarefas.length  <=  0">
      Não há tarefas
    </div>

    <!-- Caso exista tarefas -->
    <div v-if="tarefas.length  > 0">
      Existem {{tarefas.length}} tarefas

      <!-- Percorre a lista de tarefas exibindo cada uma -->
      <ul>
        <li v-for="tarefa in tarefas">{{ tarefa }}</li>
      </ul>

      <!-- Executa a ação para redefinir lista de tarefas -->
      <button @click="tarefas = []">Limpar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      title: 'Listagem de tarefas',
      subtitle: 'Escreva no input abaixo :)',
      tarefas: []
    }
  },
  // Executado quando o componente é montado, seta um title e algumas tarefas depois de 3 segundos
  mounted() {
    setTimeout(() => {
      this.title = "ISSO É UM TÍTULO"
      this.tarefas = ['tarefa  1', 'tarefa 2', 'tarefa 3', 'tarefa 4' ]
    }, 3000 )
  }
}
</script>

<template>
	<div>
		<h1>Novo usuário</h1>
		<!-- envia notificacao de falha ou sucesso -->
		<button @click="falhou">Falha</button>
		<button @click="beleza">Sucesso</button>
	</div>
</template>

<script>
export default{
	name: 'lv-novo-usuario',
	methods: {
	  falhou() {
	  	this.$router.replace('/usuarios/erro')
	  },
	  beleza() {
	  	this.$router.replace('/usuarios/alice')
	  }
	}
}
</script>
<template>
	<div>
		<h1>Notificação</h1>
		<!-- Mostra se recebeu erro ou nao pela rota! -->
		<p v-if="msg == 'erro'">Erro ao cadastrar usuário</p>
		<p v-if="msg != 'erro'">Olá, {{ msg }}</p>
	</div>
</template>

<script>
export default{
	name: 'lv-notificacao',
	props: ['msg'],
}
</script>
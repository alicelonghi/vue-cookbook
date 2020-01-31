<template>
	<div class="cartao">
		<!-- estrutura de um cartao, tem o titulo, e dois slots -->
		<h2>{{ titulo }}</h2>
		<slot></slot>
		<hr>
		<slot name="rodape"></slot>
	</div>
</template>

<script>
export default{
	name: 'lv-cartao',
	// recebendo propriedades simples
	props: [ 'titulo', 'conteudo' ],
}
</script>

<style>
	.cartao { 
		padding: 10px; 
		background: #cacaca;
	}
</style>
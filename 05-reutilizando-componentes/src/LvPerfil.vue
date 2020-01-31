<template>
	<div>
		<!-- Exibe dados do filme -->
		<h3>Ficha</h3>
	    <p>Título: {{ nome }}</p>
	    <p>Gênero: {{ genero }}</p>
	</div>
</template>

<script>
export default{
	name: 'lv-perfil',
	data() {
		// inicia com dados do Pulp Fiction
		return {
			nome: 'Pulp Fiction',
			genero: 'Policial',
		}
	},
}
</script>
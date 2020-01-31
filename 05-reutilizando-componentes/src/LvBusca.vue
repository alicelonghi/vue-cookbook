<template>
	<div>
		<!-- Formulário de busca e resultado da busca -->
		<h3>Buscando filmes</h3>
	    <label>Filme:</label>
	    <input type="text" v-model="busca">
	    <p>Similar: {{ similar(busca) }}</p>
	</div>
</template>

<script>
export default{
	name: 'lvBusca',
	data() {
		return {
			busca: ''
		}
	},
	methods: {
		// retorna o filme similar
		similar(filme) {
			switch( filme.toLowerCase() ) {
				case 'coringa':
					return 'Batman - O Cavaleiro das Trevas'
				case 'star Wars':
					return 'E.T.'
				case 'pulp Fiction':
					return 'O Irlandês'
				case 'whiplash':
					return 'O som do coração'
				default:
					return 'Não encontrado'
			}
		}
	}
}
</script>
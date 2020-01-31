<template>
	<ul>
		<!-- mostra elementos da lista recebida -->
		<li v-for="item in lista">{{ item }}</li >
	</ul>
</template>

<script>
export default{
	name: 'LvLista',
	// propriadades de lista e ordenacao da mesma
	props: {
		ordena: null,
		lista: {
	    	required: true,
			type: Array,
			default: []
		}
	},
	created() {
		// caso tenha a propriedade ordena vai ordenar a lista
		if(typeof this.ordena != 'undefined')
			this.lista.sort()
	}
}
</script>


<style>
li {
    display: inline;
    list-style-type: none;
    padding-right: 20px;
    float: left;
}
</style>
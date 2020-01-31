<template>
	<div>
		<!-- Apenas o titulo do post, usando a mixin -->
		<h1>Lendo {{ 'artigo X' | maiusculo }}</h1>
	</div>
</template>

<script>
import postagem from './postagem'
export default{
	name: 'lv-leitor',
	//declara a mixin
	mixins: [postagem]
}
</script>
<template>
	<div>
		<h1>Usuários</h1>
		<!-- link para sub rota -->
		<router-link to="/usuarios/novo">Novo usuario</router-link>
		<!-- conteudo da subrota -->
		<router-view></router-view>
	</div>
</template>

<script>
export default{
	name: 'lv-usuarios',
}
</script>
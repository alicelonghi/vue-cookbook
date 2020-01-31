import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

//importando componentes/paginas
import Inicial from './LvInicial.vue'
import Usuarios from './LvUsuarios.vue'
import NovoUsuario from './LvNovoUsuario.vue'
import Notificacao from './LvNotificacao.vue'

Vue.use( VueRouter ) // registra router

const router = new VueRouter({
	mode: 'history', // retira # do link
	routes: [
		// path é o caminho da url da rota, component é qual pagina a exibir
		{path: '/', component: Inicial},
		{
			path: '/usuarios',
			component: Usuarios,
			children: [
				{path: 'novo', component: NovoUsuario},
				{path: ':msg', component: Notificacao, props: true}, // possui um item dinâmico, ele será enviado para o componente como propriedade
			]
		},
	],
})

new Vue({
	el: '#app',
	router,  // registra rotas
	render: h => h(App)
})
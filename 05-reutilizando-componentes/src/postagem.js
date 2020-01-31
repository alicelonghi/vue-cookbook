// exporta um objeto com o array de filtros, podendo ser reusado
export default {
	filters: {
		maiusculo: (valor) => {
			return valor.toUpperCase()
		}
	}
}
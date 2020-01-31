<template>
    <div id="app">
        <!-- usa a lista sem ordem e com ordenacao -->
        <h4>Lista um</h4>
        <lv-lista :lista="['feijão', 'arroz', 'carne']"></lv-lista>
        <br>
        <lv-lista :lista="['feijão', 'arroz', 'carne']" ordena></lv-lista>

        <br>

        <!-- Mais uma lista com e sem ordenação -->

        <h4>Lista dois</h4>
        <lv-lista :lista="['leite', 'biscoito', 'bombom', 'aveia']" ordena></lv-lista>
        <br>
        <lv-lista :lista="['leite', 'biscoito', 'bombom', 'aveia']" ></lv-lista>

        <!-- declara um cartao com titulo, conteudo e rodape  -->
        <br><hr>
        <lv-cartao titulo="Cartão">
            Um cartão <strong>lv-cartao</strong>
            <div slot="rodape">
                Meu conteúdo do rodapé
            </div>
        </lv-cartao>

        <!-- chama o leitor do artigo e os comentarios -->
        <br><hr>
        <lv-leitor ></lv-leitor>
        <lv-comentarios></lv-comentarios>

        <!-- insere usuários no chat -->
        <br><hr>
        <lv-usuario nome="Alice" @novaMsg="escrever"></lv-usuario>
        <lv-usuario nome="Fernanda" @novaMsg="escrever"></lv-usuario>
        <!-- mostra o chat na tela -->
        <br>
        <div v-html="chat"></div>
    </div>
</template>

<script>
import LvLista from './LvLista.vue'
import LvCartao from './LvCartao.vue'
import LvLeitor from './LvLeitor.vue'
import LvComentarios from './LvComentarios.vue'
import LvUsuario from './LvUsuario.vue'

export default {
    name: 'app',
    // importa componentes
    components: {LvLista, LvCartao, LvLeitor, LvComentarios, LvUsuario},
    // define o chat
    data() {
        return { chat: '' }
    },
    methods: {
        // quando receber uma mensagem concatena ao chat
        escrever(mensagem) {
            this.chat = mensagem + '<hr>' + this.chat
        }
    }
}
</script>
<template>
  <div class = "container" >
    <ListaJogadores v-bind:lista="lista" @remover-jogador="removerJogador" @toogle-cadastro="toogleCadastro" @toogle-editar="toogleEditar" />
    <CadastraJogador v-if="mostraCadastro" @adicionar-jogador="atualizaLista" />
    <EditaJogador v-if="mostraEdicao" @salvar-jogador="salvarJogador" v-bind:jogador="jogadorSelecionado"/>
  </div>
</template>

<script>
import ListaJogadores from './components/ListaJogadores.vue'
import CadastraJogador from './components/CadastraJogador.vue'
import EditaJogador from './components/EditaJogador.vue'

export default {
  name: 'LayoutDefault',

  components: {
    ListaJogadores,
    CadastraJogador,
    EditaJogador
  },

  data () {
    return {
      lista: [
        {
          id:1,
          nome: "Neymar",
          poder: 91
        },
        {
          id:2,
          nome: "Messi",
          poder: 93
        }
     ],
     jogadorSelecionado: null,
     mostraEdicao: false,
     mostraCadastro: false
    }
  },
  methods: {
    atualizaLista(jogador) {
      jogador.id = this.lista.length+1;
      this.lista.push(jogador);
    },
    removerJogador(jogador){
      let aux = [];
      this.lista.map( (value) => {
        if ( value.nome != jogador.nome) 
          aux.push(value);
        } )
      this.lista = aux;
    },
    toogleCadastro(){
      this.mostraCadastro = !this.mostraCadastro;
    },
    toogleEditar(jogador){
      if(jogador != undefined && jogador != null){
        this.jogadorSelecionado = jogador;
        this.mostraEdicao = !this.mostraEdicao;
      }
      else this.mostraEdicao = false
    },
    salvarJogador(jogador){
      this.lista.forEach(j => {
        if(j.id == jogador.id ) {
          j.nome = jogador.nome;
          j.poder = jogador.poder;
        }
      })
      this.mostraEdicao = false;
    }
  }
}
</script>

<style>
.container {
  display: flex;
  margin: 30px auto;
  align-items: center;
  flex-flow: column;
  align-content: center;
}
</style>

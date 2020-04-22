<template>
  <div @adicionar-jogador="atualizaLista" class="width60" >
    <q-table
      title="Lista de Jogadores"
      :data="lista"
      :columns="columns"
      row-key="nome"
      dark
      color="amber"
      selection="single"
      :selected.sync="selected"
    >
      <template v-slot:top>
        <q-btn class="menu-btn"  color="primary" label="Adicionar Jogador"  @click="addRow" />
        <q-btn class="q-ml-sm menu-btn" color="primary" label="Editar Jogador" @click="editRow"  />
        <q-btn class="q-ml-sm menu-btn" color="primary" label="Remover Jogador" @click="removeRow"  />
      </template>
    </q-table>
  </div>
</template>

<script>
export default {
  name: 'ListaJogadores',
  props: {
    lista: Array
  },
  methods: {
      addRow () {
        this.$emit('toogle-cadastro');
      },

      editRow(){
        this.$emit('toogle-editar', this.selected[0])
      },

      removeRow() {
        if(this.selected.length > 0){
          this.$emit('remover-jogador', this.selected[0])
        }
      },
      atualizaLista(jogador){
        this.data.push(jogador)
      }
  },
  data () {
    return {
     selected: [],
     columns : [
       {
          name: 'nome',
          required: true,
          label: 'Nome',
          align: 'left',
          field: row => row.nome,
          format: val => `${val}`,
          sortable: true
        },

        {
          name: 'poder',
          required: true,
          label: 'Poder',
          align: 'left',
          field: row => row.poder,
          format: val => `${val}`,
          sortable: true
        },
     ],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.width60{
  width: 60%;
}

</style>

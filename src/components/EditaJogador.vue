<template>
  <q-form  @submit="onSubmit" class="formBox">
      <div>
        <q-input
        name="name"
        v-model="nome"
        color="primary"
        label="Nome do Jogador"
        filled
        clearable
      />
      </div>

      <div>
        <q-input
        name="poder"
        v-model="poder"
        color="primary"
        label="Poder"
        filled
        clearable
        class="mgTopBot10"
      />
      </div>

      <div>
        <q-btn label="Salvar" type="submit" color="primary"/>
      </div>
    </q-form>
</template>

<script>
export default {
  name: 'EditaJogador',
  props: {
    jogador:Object
  },
  data() {
    return {
      nome : this.jogador.nome,
      poder: this.jogador.poder
    }
  },
  methods: {
    onSubmit() {
      const jogador = {id:this.jogador.id, nome:this.nome, poder: this.poder}
      this.$emit('salvar-jogador', jogador);
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
.formBox{
  width: 60%;
  margin-top: 10px
}
.mgTopBot10{
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>

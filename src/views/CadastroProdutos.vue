<template>
  <main class="h-100 py-5 text-light bg-dark bg-gradient">
    <form class="container">
      <h1>Cadastro produtos</h1>
      <div class="d-flex flex-column gap-3 mb-3">
          <label for="nomeProduto" class="form-group">Nome:
            <input type="text" class="form-control" id="nomeProduto" placeholder="Ex. Notebook Acer 32'" v-model="nome" required>
          </label>
          <label for="preco" class="form-group">Preco:
            <input type="text" id="preco" class="form-control" v-model="preco" required>
          </label>
          <label for="qEstoque" class="form-group">Quantidade em Estoque:
            <input type="number" id="qEstoque" class="form-control" v-model="quantidade" min="1" required>
          </label>
          <label for="descricao" class="form-group">Descricão do Produto:
            <textarea type="text" id="descricao" class="form-control" v-model="descricao" required></textarea>
          </label>
          <label for="url" class="form-group">Link para imagem do produto:
            <input type="text" id="url" class="form-control" v-model="url" required>
          </label>
          <label for="categorias" class="form-group">Categoria:
            <select class="form-control" id="categorias" v-model="categoria">
              <option selected>Escolha uma Categoria...</option>
              <option>Informática</option>
              <option>Música</option>
              <option>Livros</option>
            </select>
          </label>
        </div>
      <button type="submit" class="btn btn d-flex gap-2" @click.prevent="salvaProduto"><i class="bi bi-save"></i> Salvar</button>
    </form>
  </main>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'; 
  import { buscaCategorias } from '@/services/categoria-services.js'
  import type { Categoria } from '@/models/categoria';
  import { salvaProduto } from '@/services/produtos-services.js'
  import type { Produto } from '@/models/produtos.js';
  import { criaProduto } from '@/models/produtos.js';  
  export default defineComponent({
    name: 'CadastroProdutos',
    data() {
      return {
        categorias: [] as Categoria[],
        nome: '',
        categoria: '',
        quantidade: 0,
        descricao: '',
        preco: '',
        url: '',
        produtos: [] as Produto[]
      }
    },
    methods: {
      salvaProduto() {
        let novoProduto: Produto = criaProduto(this.nome, this.preco, this.quantidade, this.descricao, this.categoria, this.url) 
        salvaProduto(novoProduto).then(resp => {
          this.nome = this.preco = this.descricao = this.categoria = this.url = ''
          this.quantidade = 0
          this.produtos.push(novoProduto)
          console.log(this.produtos)
        })
      }
    },
    mounted() {
      buscaCategorias().then(resp => this.categorias = resp)
    }
  })
</script>
<style scoped>
  .btn{
    background: #8FA8FF;
    color: #fff;
    font-weight: bold;
    transition: 0.3s;
  }

  .btn:hover{
    background: #7d92e0;
  }
</style>
<template>
  <form class="container">
    <h1>Cadastro produtos</h1>
    <div class="d-flex flex-column gap-3 mb-3">
        <label for="nomeProduto" class="form-group">Nome:
          <input type="text" class="form-control" id="nomeProduto" placeholder="Ex. Notebook Acer 32'" v-model="produto.nome" required>
        </label>
        <label for="preco" class="form-group">Preco:
          <input type="text" id="preco" class="form-control" v-model="produto.preco" required>
        </label>
        <label for="qEstoque" class="form-group">Quantidade em Estoque:
          <input type="number" id="qEstoque" class="form-control" v-model="produto.quantidadeEstoque" min="1" required>
        </label>
        <label for="descricao" class="form-group">Descricão do Produto:
          <textarea type="text" id="descricao" class="form-control" v-model="produto.descricaoProduto" required></textarea>
        </label>
        <label for="url" class="form-group">Link para imagem do produto:
          <input type="text" id="url" class="form-control" v-model="produto.url" required>
        </label>
        <label for="categorias" class="form-group">Categoria:
          <select class="form-control" id="categorias" v-model="produto.categoria">
            <option value="Escolha uma Categoria...">Escolha uma Categoria...</option>
            <option v-for="(categoria, index) in categorias" :key="index" :value="categoria.nome">{{ categoria.nome }}</option>
          </select>
        </label>
      </div>
    <button type="submit" class="btn btn d-flex gap-2" @click.prevent="salvaNovoProduto"><i class="bi bi-save"></i> Salvar</button>
  </form>
</template>
<script setup lang="ts">
  import { onMounted, reactive } from 'vue'; 
  import { buscaCategorias } from '@/services/categoria-services.js'
  import type { Categoria } from '@/models/categoria';
  import { salvaProduto } from '@/services/produtos-services.js'
  import type { Produto } from '@/models/produtos.js';

  const produto = reactive({
    nome: '',
    preco: '',
    quantidadeEstoque: 0,
    descricaoProduto: '',
    categoria: '',
    url: ''
  }) as Produto;
  const categorias =  reactive([]) as Categoria[];
  const produtos = reactive([]) as Produto[];

  function salvaNovoProduto(): void {
    const novoProduto = produto
    salvaProduto(novoProduto).then(res => {
      produto.nome = produto.preco = produto.descricaoProduto = produto.categoria = produto.url = ''
      produto.quantidadeEstoque = 0
      produtos.push(novoProduto)
    })
  }

  onMounted(() => {
    buscaCategorias().then(resp => resp.map(categoria => categorias.push(categoria)))
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
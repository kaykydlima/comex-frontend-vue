<template>
  <div class="d-flex flex-column justify-content-center">
    <form class="container text-light mb-4">
      <h1 class="mb-4">Cadastro de Categoria</h1>
      <fieldset>
        <div class="mb-3">
          <label for="nomeCategoria" class="form-label">Nome da categoria: </label>
          <input type="text" id="nomeCategoria" class="form-control" placeholder="Digite o nome da categoria" v-model="valorNomeCategoria">
        </div>
        <button type="submit" class="btn btn-success d-flex gap-2" @click.prevent="salvaCategoria"><i class="bi bi-save"></i> Salvar</button>
      </fieldset>
    </form>
    <section class="container">
      <h2 class="text-center mt-4">Categorias</h2>
      <table class="table m-4 text-light text-center">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Data</th>
            <th scope="col">Status</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(categoria) in categorias" :key="categoria.id">
            <td scope="row">{{ categoria.nome }}</td>
            <td>{{ categoria.criacao }}</td>
            <td>{{ categoria.status }}</td>
            <td>
              <button type="button" class="btn btn-outline-danger" @click="teste(categoria)"><i class="bi bi-trash"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import type { Categoria } from '../models/categoria.js'
import { criaCategoria } from '../models/categoria.js'
import * as categoriaService from '../services/categoria-services.js'

const valorNomeCategoria = ref('')
let categorias = ref<Categoria[]>([]) 

function salvaCategoria(): void {
  if(!valorNomeCategoria.value) alert ('digite um valor válido!')
  else {
    const novaCategoria = criaCategoria(valorNomeCategoria.value)
    categoriaService.salvaCategoria(novaCategoria).then((categoriaCadastrada: Categoria) => {
      valorNomeCategoria.value = ''
      categorias.value.push(categoriaCadastrada)
    })
  }
}

function teste(categoria: Categoria): void {
  categoriaService.apagarCategoria(categoria).then(() => {
    categorias.value = categorias.value.filter(c => c.id !== categoria.id)
  })
}

onMounted(() => {
  categoriaService.buscaCategorias().then(resp => resp.map(categoria => categorias.value.push(categoria)))
  //
})
</script>
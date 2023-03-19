<template>
  <main class="d-flex flex-column justify-content-center text-light bg-dark bg-gradient h-100 p-4">
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
          <tr v-for="(categoria, index) in categorias" :key="index">
            <td scope="row">{{ categoria.nome }}</td>
            <td>{{ categoria.criacao }}</td>
            <td>{{ categoria.status }}</td>
            <td>
              <button type="button" class="btn btn-outline-danger" @click="apagarCategoria(categoria)"><i class="bi bi-trash"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import type { Categoria } from '../models/categoria.js'
  import { criaCategoria } from '../models/categoria.js'
  import * as categoriaService from '../services/categoria-services.js'

  export default defineComponent({
    name: '',
    data() {
      return {
        valorNomeCategoria: '',
        categorias: [] as Categoria[],
      }
    },
    methods: {
      salvaCategoria() {
        if(this.valorNomeCategoria === '') alert('Digite um valor válido')
        else {
          let novaCategoria = criaCategoria(this.valorNomeCategoria) 
          categoriaService.salvaCategoria(novaCategoria).then((categoriaCadastrada: Categoria) => {
          this.valorNomeCategoria = ''
          this.categorias.push(categoriaCadastrada)
        })
        }
      },
      apagarCategoria(categoria: Categoria) {
        categoriaService.apagarCategoria(categoria).then(() => {
          this.categorias = this.categorias.filter(c => c.uuid !== categoria.uuid)
        })
      }      
    },
    mounted() {
      categoriaService.buscaCategorias().then(resp => this.categorias = resp)
    }
  })
</script>
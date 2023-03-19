<template>
  <main class="bg-dark bg-gradient text-light py-5 h-100">
    <div class="container d-flex aling-items-center justify-content-center flex-row gap-3 flex-wrap">
      <div v-for="(produto, index) of produtos">
        <CardProduto :nome="produto.nome" :url="produto.url" :preco="produto.preco" :key="index"/>
      </div>
    </div>
  </main>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import CardProduto from '@/components/card-produto/CardProduto.vue';
  import { buscaProduto } from '@/services/produtos-services.js'
  import type { Produto } from '@/models/produtos';
  export default defineComponent({
    name: 'Home',
    data() {
      return {
        produtos: [] as Produto[]
      }
    },
    components: {
      CardProduto
    }, 
    mounted() {
      buscaProduto().then(resp =>  this.produtos = resp)
    }
  })
</script> 
<template>
  <div class="jumbotron height">
    <h1 class="display-4">Carrinho de compras</h1>
    <div class="d-flex gap-2 align-items-center mb-4" v-for="produto in storeProduto.produtos">
      <img :src="produto.url" alt="" class="box">
      <div class="d-flex-align-items-center">
        <h3 class="lead">{{ produto.nome }}</h3>
        <p class="s">{{ produto.preco }}</p>
      </div>
      </div>
    <p class="lead">
      <a class="btn btn-primary btn-lg" href="#" role="button">Finalizar pedido</a>
    </p>
  </div>
</template>
<script setup lang="ts">
import { useStore } from '@/store/index'
const storeProduto = useStore()
</script>
<style>
  .box{
    background-color: #FFF;
    width: 60px;
    height: 60px;
  }

</style>
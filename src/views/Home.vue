<template>
  <div class="container-fluid">
    <div id="carouselExampleIndicators" class="carousel slide mb-5">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://images.unsplash.com/photo-1586062129117-08db958ba215?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="d-block w-100" alt="Controle Xbox one">
        </div>
        <div class="carousel-item active" v-for="produto in produtos">
          <img :src="produto.url" class="d-block w-100" :alt=produto.descricaoProduto>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <section class="container">
    <h2 class="font-4 text-center mb-5 fs-1"><i class="bi bi-star-fill fs-2"></i> Mais vendidos</h2>
    <div class="d-flex aling-items-center justify-content-center flex-row gap-3 flex-wrap">
      <CardProduto v-for="(produto, index) of produtos" :nome="produto.nome" :url="produto.url" :preco="produto.preco" :key="index" v-if="produtos.length > 0"/>
      <p v-else>Sem produtos encontrados</p>
    </div>
  </section>
</template>
<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import CardProduto from '@/components/card-produto/CardProduto.vue';
import { buscaProduto } from '@/services/produtos-services.js';
import type { Produto } from '@/models/produtos';

const produtos = reactive([]) as Produto[];
onMounted(() => buscaProduto().then(resp => resp.map(produto => produtos.push(produto))));
</script> 
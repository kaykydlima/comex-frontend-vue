<template>
  <BarraNavegacao />
  <main class="bg-dark bg-gradient text-light p-4">
    <router-view></router-view>
  </main>
  <Rodape />
</template>
<script setup lang="ts">
import BarraNavegacao from './components/barra-navegacao/BarraNavegacao.vue';
import Rodape from './components/rodape/Rodape.vue';
</script>
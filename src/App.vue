<template>
  <BarraNavegacao />
  <Home />
  <Rodape />
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import BarraNavegacao from './components/barra-navegacao/BarraNavegacao.vue';
  import Rodape from './components/rodape/Rodape.vue'
  import Home from './views/Home.vue';
  export default defineComponent({
    name: 'App',
    components: {
    BarraNavegacao,
    Rodape,
    Home
}
  })
</script>
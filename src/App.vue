<template>
  <BarraNavegacao />
  <Rodape />
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import BarraNavegacao from './components/barra-navegacao/BarraNavegacao.vue';
  import Rodape from './components/rodape/Rodape.vue'
  export default defineComponent({
    name: 'App',
    components: {
      BarraNavegacao,
      Rodape,
    }
  })
</script>
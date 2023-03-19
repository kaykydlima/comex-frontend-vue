<template>
  <BarraNavegacao />
  <CadastroCategoria />
  <Rodape />
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import BarraNavegacao from './components/barra-navegacao/BarraNavegacao.vue';
  import Rodape from './components/rodape/Rodape.vue'
  import CadastroCategoria from './views/CadastroCategoria.vue';
  export default defineComponent({
    name: 'App',
    components: {
      BarraNavegacao,
      Rodape,
      CadastroCategoria
    }
  })
</script>
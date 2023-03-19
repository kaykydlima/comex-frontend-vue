<template>
  <BarraNavegacao />
  <!-- <CadastroCategoria /> -->
  <CadastroProdutos />
  <!-- <CardProduto /> -->
  <Rodape />
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import BarraNavegacao from './components/barra-navegacao/BarraNavegacao.vue';
  import CardProduto from './components/card-produto/CardProduto.vue';
  import Rodape from './components/rodape/Rodape.vue'
  import CadastroCategoria from './views/CadastroCategoria.vue';
import CadastroProdutos from './views/CadastroProdutos.vue';
  export default defineComponent({
    name: 'App',
    components: {
    BarraNavegacao,
    Rodape,
    CadastroCategoria,
    CardProduto,
    CadastroProdutos
}
  })
</script>
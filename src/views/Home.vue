<template>
  <CardProduto />
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import CardProduto from '@/components/card-produto/CardProduto.vue';
  export default defineComponent({
    name: 'Home',
    components: {
      CardProduto
    }
  })
</script> 
<template>
  <MenuMobile/>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import MenuMobile from './MenuMobile.vue';
  export default defineComponent({
    name: 'BarraNavegacao',
    components: {
      MenuMobile,
    }
  })

</script>

<style>
  .menu {
    align-items: center;
    background: var(--roxo);
    display: flex;
    height: 50px;
    justify-content: space-between;
  }

  .logo{
      padding: 12px;
  }

  .cabecalho{
      display: flex;
      flex-direction: column; 
      justify-content: center;
  }
</style>
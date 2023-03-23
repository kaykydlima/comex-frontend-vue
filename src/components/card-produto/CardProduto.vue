<template>
<div class="mais-vendidos__card">
  <img :src="url" alt="Texto alternativo da imagem" class="mais-vendidos__card-img">
  <div class="mais-vendidos__card-textos">
    <h3 class="nome-produto">{{ nome }}</h3>
    <div class="box-valor-produto">
      <span class="valor-produto-simbolo"></span>
      <p class="valor-produto">{{ preco }}</p>
    </div>
  </div>
  <button class="botao-produto">Comprar</button>
</div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  nome: {
    type: String,
    default: ''
  },
  url: {
    type: String,
    default: ''
  },
  preco: {
    type: String,
    default: ''
  }
});
</script>
<style scoped>
.mais-vendidos__card {
  align-items: center;
  border: 2px #8FA8FF solid;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 350px;
  justify-content: center;
  padding: 2rem 1rem;
  text-align: center;
  width: 225px;
}

.mais-vendidos__card-img {
  width: 100%;
}

.nome-produto {
  font-weight: 500;
  font-size: 18px;
}

.box-valor-produto {
  align-items: flex-start;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.valor-produto-simbolo {
  background: url(@/assets/dolas.svg) no-repeat;
  height: 20px;
  width: 30px;
}

.valor-produto {
  font-size: 14px;
}

.botao-produto {
  background: #8FA8FF;
  border-radius: 5px;
  border: none;
  color: #FFF;
  font-weight: 600;
  font-size: 16px;
  padding: 13px 53px;
  text-decoration: none;
}
</style>
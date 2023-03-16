<template>
<!-- menu mobile -->
  <header class="cabecalho menu-mobile">
    <nav class="menu">
      <a href="#" class="logo"><img src="../../assets/logo.svg" alt="Comex logo" class="logo"></a>
      <ul class="menu__lista menu__lista-disable">
          <li class="menu__lista-item"><a href="#">Produtos</a></li>
          <li class="menu__lista-item"><a href="#">Categorias</a></li>
          <li class="menu__lista-item"><a href="#">Contato</a></li>
          <li class="menu__lista-item">Buscar</li>
          <li class="menu__lista-item">Carrinho</li>
          <li class="menu__lista-item"><a href="#">Entrar</a></li>
      </ul>
      <button id="botao-menu" class="botao-menu"><img src="#"></button>
    </nav>
    <div class="search-bar">
      <input type="search" name="" id="" placeholder="Pesquisar..." class="cabecalho__input">
      <img src="#" alt="">
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'MenuMobile',
    data() {

    },
    methods: {

    }
  })
</script>

<style scoped>
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

/* menu hamburguer */

.menu__lista{
    align-items: center;
    background: var(--roxo);
    color: var(--branco);
    height: 210px;
    justify-content: space-evenly;
    padding: 1rem;
    position: absolute;
    right: 0;
    text-decoration: underline;
    top: 50px;
    width: 172px;
}

.menu__lista-active{
    display: flex;
    flex-direction: column;
    z-index: 3;
}

.menu__lista-disable{
    display: none;
}

.menu__lista-item{
    font-size: 14px;
}

.menu__lista-item > a{
    color: var(--branco);
}

.botao-menu{
    background: transparent;
    border: none;
    margin: 0 1rem;
}

/* input cabecalho */

.cabecalho__input{
    border: none;
    font-size: 14px;
    padding: 5px;
    outline: none;
    width: 100%;
}

.search-bar{
    align-self: center;
    border: 2px solid var(--roxo);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    padding: 9px 14px;
    width: 80%;
}

.cabecalho__input::placeholder{
    color: #9F9999;
}

.menu-desktop{
    display: none;
}

/* adaptação para tablet */
@media screen and (min-width: 600px){
    .menu{
        height: 80px;
    }

    a > .logo{
        width: 130px;
        padding: 0;
    }

    .logo{
        padding: 20px 60px;
    }

    .botao-menu{
        margin: 0 2rem;
    }

    .search-bar{
        width: 65%;
    }

}
</style>
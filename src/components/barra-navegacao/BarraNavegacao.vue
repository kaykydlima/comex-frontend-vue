<template>
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark p-4">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse px-20" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="#"><img src="../../assets/logo.svg" alt="logo comex" class="img"></a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">Produtos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active">Categorias</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'BarraNavegacao',

  })
</script>
<style scoped>
  .img {
    width: 100px;
  }

  @media screen and (max-width: 991px) {
    .img {
      margin: 1rem 0;
    }
  }
</style>
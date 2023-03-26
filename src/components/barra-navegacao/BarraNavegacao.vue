<template>
  <nav class="navbar navbar-expand-lg navbar-dark p-4">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse px-20" id="navbarTogglerDemo01">
        <router-link to="/" class="navbar-brand" ><img src="../../assets/logo.svg" alt="logo comex" class="img"></router-link>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cadastro-produtos" class="nav-link active">Produtos</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cadastro-categorias" class="nav-link active">Categorias</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cadastro-cliente" class="nav-link active">Cliente</router-link>
          </li>
        </ul>
        <form class="d-flex align-items-center gap-2" role="search">
          <input class="form-control" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit"><i class="bi bi-search"></i></button>
          <router-link to="/carrinho-compras" class="nav-link active text-light font-weight-bold"><i class="bi bi-cart4"></i></router-link>
        </form>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
</script>
<style scoped>
.img {
  width: 100px;
}

.font-size {
  font-size: 25px;
}

@media screen and (max-width: 991px) {
  .img {
    margin: 1rem 0;
  }
}
</style>
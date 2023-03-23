<template>
  <footer class="container-fluid text-light">
    <div class="d-flex align-items-initial p-5 justify-content-between box-footer md-flex-row">
      <a href="#"><img src="../../assets/logo.svg" alt="Logo Comex" class="img"></a>
      <ul class="d-flex gap-4 mt-1">
        <li><a href="#"><i class="bi bi-instagram icone text-light"></i></a></li>
        <li><a href="#"><i class="bi bi-twitter icone text-light"></i></a></li>
        <li><a href="#"><i class="bi bi-linkedin icone text-light"></i></a></li>
      </ul>
    </div>
  </footer>
</template>
<script setup lang="ts">
</script>
<style scoped>
.img{
  width: 125px;
}

.icone{
  font-size: 25px;
}

@media screen and (max-width: 400px){
  .box-footer{
    align-items: center !important;
    flex-direction: column;
    gap: 25px;
  }

  .box-footer ul{
    padding: 0 !important;
  }

  .icone{
    font-size: 20px;
  }
  
  .img{
    width: 90px;
  }
}
</style>
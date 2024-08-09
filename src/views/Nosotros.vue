<script setup>
  import NavBar from '../components/NavBar.vue';
  import Banner from '../components/Banner.vue';
  import TituloYtexto from '../components/TituloYtexto.vue';
  import ContainerCardImgYtexto from '../components/ContainerCardImgYtexto.vue';
  import Footer from '../components/Footer.vue';
</script>

<template>
  
    <header>
      <NavBar></NavBar>
    </header>
    <main>
      <Banner></Banner>
      <TituloYtexto></TituloYtexto>
  
      <div class="container">
        <ContainerCardImgYtexto></ContainerCardImgYtexto>
      </div>
 
    </main>
  
    <Footer>  
    </Footer>
  </template>
  
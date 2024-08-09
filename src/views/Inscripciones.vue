<script setup>
  import NavBar from '../components/NavBar.vue';
  import Banner from '../components/Banner.vue';
  import FormInscripcion from '../components/FormularioPortafolioComponentePrincipal.vue';
  import Footer from '../components/Footer.vue';
</script>

<template>
    <header>
      <NavBar></NavBar>
    </header>
    <main>
      <Banner></Banner>
      <div class="p-5">
        <h2 class="text-center pb-2">Únete a <span class="especial-font fs-5">Design Dynasty</span> y muestra tu talento al mundo.</h2>
        <p class="texto">Estamos en busca de artistas apasionados que deseen compartir su creatividad y visión con una audiencia global. Si crees que tienes lo necesario para inspirar y sorprender, envía tu portafolio a través del formulario a continuación. Cada mes, seleccionamos a dos artistas destacados para brindarles una plataforma donde puedan exhibir sus obras y conectar con una comunidad vibrante de amantes del arte y creativos. ¡Esperamos ver tu arte!</p>
      </div>
      <FormInscripcion></FormInscripcion>
    </main>
    <Footer></Footer>
</template>

<style>
  h2{
    line-height: 1.4;
  }
</style>

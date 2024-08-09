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
    <div class="p-4">
        <h2 class="text-center mb-3">¡Bienvenido a <br><span class="especial-font">Design Dynasty</span></h2>
        <p class="texto">Únete a nuestra comunidad global de creativos donde puedes exhibir tu talento y explorar obras inspiradoras de artistas de todo el mundo. Cada mes, vota por tus portafolios favoritos y sé parte de nuestra misión de celebrar y compartir la creatividad. ¡No pierdas la oportunidad de destacar tu arte!</p>
      </div>
      <h3 class="px-4 text-center">
        Sube tu portafolio hoy y haz que tu talento sea reconocido en <span class="especial-font">nuestra plataforma </span>
      </h3>
      <FormInscripcion>
      </FormInscripcion>
  </main>
  <Footer>  
  </Footer>
</template>

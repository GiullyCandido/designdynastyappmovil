<script setup>
import NavBar from '../components/NavBar.vue'
import Banner from '../components/Banner.vue'
import AnclaBannerVertical from '../components/AnclaBannerVertical.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <header>
    <NavBar></NavBar>
  </header>
  <main>
    <Banner></Banner>
    <div class="container">
      <div class="p-4">
        <h2 class="text-center">¡Descubre a los ganadores del mes!</h2>
        <p class="texto">En <span class="especial-font">Design Dynasty</span>, celebramos la creatividad global. Este mes, los usuarios han elegido dos talentos excepcionales cuyos portafolios serán destacados. ¡Explora y encuentra inspiración en sus obras innovadoras!</p>
      </div>
      <AnclaBannerVertical
        :id="1"
        rutaIMGrl="../src/assets/sentez-vang-s-1.jpg"
        cardTitle="Vang Studio"
        descripcion="Tipología: Estudio interdisciplinario de diseño y arquitectura"
      ></AnclaBannerVertical>
      <AnclaBannerVertical
        :id="2"
        rutaIMGrl="../src/assets/imgcardMikeKus.jpg"
        cardTitle="Mike Kus"
        descripcion="Tipología: diseñador multidisciplinario"
      ></AnclaBannerVertical>
    </div>
  </main>
  
  <Footer>
  </Footer>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import BarraNavegacion from '../components/NavBar.vue'
import CartaPresentacionArtistas from '../components/CardPresentacionArtistas.vue'
import Galeria from '../components/Galeria.vue'
import PiePagina from '../components/Footer.vue'

const artistas = {
  1: {
    titulo: "Vang Studios",
    subtitulo: "SENTEZ",
    nombre: "Proyecto Tienda Sentez",
    nacionalidad: "Argentina",
    tipologia: "Tipología: Estudio interdisciplinario de diseño y arquitectura",
    presentacion: "Los paradigmas se expanden y el pensamiento lógico se distorsiona. Un comportamiento muy personal arraigado en la esencia de la marca: romper y construir. Siguiendo esta lógica, se propone revertir el esquema tradicional de la tienda. Aquello que toca el suelo vivirá en el techo.",
    rutaImagen: "../src/assets/logo-vang-studio.png"
  },
  2: {
    titulo: "Universo Creativo de Mike Kus",
    subtitulo: "Detalles del Artista",
    nombre: "Mike Kus",
    nacionalidad: "Británico",
    edad: "40 años",
    tipologia: "Tipología: diseñador multidisciplinario.",
    presentacion: "Mike Kus es un diseñador multidisciplinario con especialización en branding, diseño gráfico, diseño web, ilustración y fotografía. Su amplio rango de habilidades le permite crear experiencias visuales cohesivas y memorables en una variedad de medios y plataformas.",
    rutaImagen: "../src/assets/logomikekus.jpg"
  }
}

const ruta = useRoute()
const idArtista = ref(Number(ruta.params.id))
const artista = ref({})

onMounted(() => {
  artista.value = artistas[idArtista.value] || {}
})
</script>

<template>
  <BarraNavegacion></BarraNavegacion>
  <main>
    <div class="m-2">
      <RouterLink class="btn btn-danger" to="/ganadores">X</RouterLink>
    </div>
    <div class="container m-0" v-if="artista">
      <CartaPresentacionArtistas
        :titulo="artista.titulo"
        :subtitulo="artista.subtitulo"
        :nombre="artista.nombre"
        :nacionalidad="artista.nacionalidad"
        :tipologia="artista.tipologia"
        :presentacion="artista.presentacion"
        :rutaImagen="artista.rutaImagen"
      >
      </CartaPresentacionArtistas>
    </div>
    <Galeria :artistId="idArtista"></Galeria>
  </main>
  <PiePagina></PiePagina>
</template>

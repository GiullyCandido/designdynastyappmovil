<script setup>
    import CardImgYtexto from '../components/CardImgYtexto.vue';
    let ArrayTextoYimg = [
        {
            titulo : "Misión",
            descripcion : "Nuestra misión es proporcionar una plataforma donde los amantes del arte, los diseñadores y los creativos puedan encontrar inspiración, explorar nuevas tendencias y conectarse con talentos emergentes. Creemos en la importancia de compartir el arte y en el poder transformador que tiene para enriquecer nuestras vidas.",
            imagenSRC : "../src/assets/bg-1.jpg"
        },
        {
            titulo : "Visión",
            descripcion : "Aspiramos a convertirnos en el epicentro global donde la creatividad converge, donde las fronteras del arte se desdibujan y donde cada individuo encuentra su fuente inagotable de inspiración. Nos esforzamos por ser el catalizador que impulsa el cambio positivo a través del poder del arte compartido, enriqueciendo así las vidas de personas en todo el mundo.",
            imagenSRC : "../src/assets/bg-2.jpg"
            
        }
    ]
</script>

<template>
    <CardImgYtexto v-for="I in ArrayTextoYimg" 
    :titulo="I.titulo"
    :descripcion="I.descripcion"
    :imagenSRC="I.imagenSRC"
    class="flex-row-reverse"
    >
    </CardImgYtexto>
</template>

<style>
    
</style>
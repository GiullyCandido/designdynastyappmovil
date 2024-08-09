<script setup>
    defineProps({
        titulo: String,
        subtitulo: String,
        nombre: String,
        nacionalidad: String,
        edad: String,
        tipologia: String,
        presentacion: String,
        rutaImagen: String
    })
</script>
<template>
    <div class="custom">
        <div class="row text-end p-4">
            <h1 class="">
                {{ titulo }}
            </h1>
            <h2 class="border-bottom custom-border mt-5 fs-4  border-secondary">
                {{ subtitulo }}
            </h2>
            <p class="">
                {{ nombre }}
            </p>
            <p class="">
                {{ nacionalidad }}
            </p>
            <p class="">
                {{ edad }}
            </p>
            <p class="border-bottom border-secondary fs-4 texto-justity">
                {{ tipologia }}
            </p>
            <p class="texto-justity">
                {{ presentacion }}
            </p>
            <div>
                <img class="img-fluid" :src="rutaImagen">
            </div>
        </div>
    </div>
</template>

<style>
    .custom {
        width: 70%;
        margin-left: auto;
        
    }
    .custom-border{
        width: auto;
        margin-left: auto;
    }
    .texto-justity{
        text-align: justify;
    }

    @media (min-width: 768px) {
        .custom{
            width: 55vw;
        }
    }
    @media (min-width: 992px) {
        .custom{
        width: 45vw;
        }
    }

</style>

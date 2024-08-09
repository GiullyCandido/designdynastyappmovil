<script setup>
    defineProps({
        titulo: String,
        descripcion: String,
        imagenSRC: String,
    })
</script>

<template>
    <div class="row mb-3 contenedor-wd-md">
        <div class="col-5">
            <img :src="imagenSRC" class="img-fluid img-full-hg" alt="" srcset="">
        </div>
        <div class="col-7">
            <h3 class="texto-justify-pd"> 
                {{ titulo }}
            </h3>
            <p class="texto-justify-pd">
                {{ descripcion }}
            </p>
        </div>
    </div>
</template>

<style>
.texto-justify-pd{
    text-align: justify;
}
.img-full-hg{
    height: 100%;
    width: auto;
    object-fit: cover;
    margin: 0;
}


@media (min-width: 380px) {
    .texto-justify-pd{
        padding-left: 3%;
    }
}

@media (min-width: 768px) {
    .contenedor-wd-md{
    width: 80vw;
    margin: auto;
    }
}
@media (min-width: 992px) {
    .contenedor-wd-md{
    width: 45vw;
    margin: auto;
    }
}

</style>

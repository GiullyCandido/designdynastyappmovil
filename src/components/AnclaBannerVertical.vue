<script setup>
defineProps({
    id: Number,
    rutaIMGrl: String,
    cardTitle: String,
    descripcion: String
})
</script>

<template>
    <div class="row">
        <div class="contenedor-img m-auto style-contenedor">
            <RouterLink :to="`/artista/${id}`">
                <div class="card text-bg-dark border-0 mb-3">
                    <img :src="rutaIMGrl" class="card-img" alt="...">
                    <div class="card-img-overlay style-card">
                        <h3 class="card-title fs-2">{{ cardTitle }}</h3>
                        <p class="card-text p-3 fs-5 position-absolute bottom-0 start-0 mb-3">{{ descripcion }}</p>
                    </div>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<style>
.style-card {
    background-color: rgba(35, 39, 63, 0.614);
}

@media (min-width: 768px) {
    .style-contenedor {
        width: 75vw;
    }
}
@media (min-width: 992px) {
    .style-contenedor {
        width: 50vw;
    }
}
</style>




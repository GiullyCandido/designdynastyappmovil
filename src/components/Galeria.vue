<script setup>
import { ref, onMounted, watch } from 'vue';

const props = defineProps({
    artistId: Number
});

const imagenes = ref([]);

const fetchImages = async () => {
    try {
        const response = await fetch('/portafolios.json');
        const data = await response.json();
        const artist = data.find(artist => artist.id === props.artistId);
        if (artist) {
            imagenes.value = artist.imagenes;
        }
    } catch (error) {
        console.error('Error fetching images:', error);
    }
};

onMounted(fetchImages);
watch(() => props.artistId, fetchImages);

</script>

<template>

    <div class="container galaeriaContenedor">
        <div class="row">
            <div class="col-12 g-1">
                <img :src="imagenes[0]" class="img-fluid" alt="...">
            </div>
            <div class="col-6 g-1" v-for="(imagen, index) in imagenes.slice(1, 3)" :key="index+1">
                <img :src="imagen" class="img-fluid" alt="...">
            </div>
            <div class="col-12 g-1" v-if="imagenes.length > 3">
                <img :src="imagenes[3]" class="img-fluid" alt="...">
            </div>
            <div class="col-6 g-1" v-for="(imagen, index) in imagenes.slice(4)" :key="index+4">
                <img :src="imagen" class="img-fluid" alt="...">
            </div>
        </div>
    </div>
</template>

<style>
    @media (min-width: 768px) {
        .galaeriaContenedor{
            width: max-content;
            margin: auto;
        }
        .galaeriaContenedor img{
            width: 100%;
            height: auto;
        }
    }
</style>
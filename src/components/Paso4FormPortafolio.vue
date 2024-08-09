<script setup>
import { ref, computed } from 'vue';

const emitir = defineEmits(['valido', 'anterior']);

const archivos = ref([]);
const limiteArchivos = 6;
const mostrarErrores = ref(false);

const manejarArchivos = (evento) => {
  const archivosSeleccionados = Array.from(evento.target.files);
  const urls = archivosSeleccionados.map(file => URL.createObjectURL(file));
  archivos.value = urls;
};

const errorArchivos = computed(() => {
  return archivos.value.length === 0 ? 'Debe subir al menos un archivo' : archivos.value.length > limiteArchivos ? `No puede subir más de ${limiteArchivos} archivos` : '';
});

function validarPaso() {
  mostrarErrores.value = true;
  if (!errorArchivos.value) {
    emitir('valido', { archivos: archivos.value });
  }
}

function pasoAnterior() {
  emitir('anterior');
}
</script>

<template>
  <div class="container bg-dark text-white rounded p-4">
    <h2 class="pb-3">Subida de Archivos</h2>
    <form method="post" @submit.prevent="validarPaso">
      <div class="row mt-3 mb-5">
        <label for="archivos" class="col-12 col-form-label">Sube hasta 6 archivos</label>
        <div class="col-12">
          <input type="file" id="archivos" @change="manejarArchivos" multiple>
          <p v-if="mostrarErrores && errorArchivos" class="mensaje-error">{{ errorArchivos }}</p>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-12">
          <button class="btn btn-outline-danger me-2" type="button" @click="pasoAnterior">Anterior</button>
          <button class="btn btn-success" type="submit">Siguiente</button>
        </div>
      </div>
    </form>
  </div>
</template>

<style>
.mensaje-error {
  color: red;
}
</style>

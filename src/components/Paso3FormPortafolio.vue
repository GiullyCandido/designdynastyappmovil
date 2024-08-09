<script setup>
import { ref, computed } from 'vue';

const emitir = defineEmits(['valido', 'anterior']);

const descripcion = ref('');
const mostrarErrores = ref(false);

const errorDescripcion = computed(() => {
  return descripcion.value === '' ? 'La descripción es obligatoria' : '';
});

function validarPaso() {
  mostrarErrores.value = true;
  if (!errorDescripcion.value) {
    emitir('valido', { descripcion: descripcion.value });
  }
}

function pasoAnterior() {
  emitir('anterior');
}
</script>

<template>
  <div class="container bg-dark text-white rounded p-4">
    <h2 class="pb-3">Descripción del Proyecto</h2>
    <form method="post" @submit.prevent="validarPaso">
      <div class="row mt-3 mb-3">
        <label for="descripcion" class="col-12 col-form-label">Descripción Corta del Proyecto</label>
        <div class="col-12">
          <textarea class="form-control" id="descripcion" v-model="descripcion"></textarea>
          <p v-if="mostrarErrores && errorDescripcion" class="mensaje-error">{{ errorDescripcion }}</p>
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
  
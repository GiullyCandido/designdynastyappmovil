<script setup>
  import { ref, computed } from 'vue';

  
  const emitir = defineEmits(['valido', 'anterior']);
  
  const nombreProyecto = ref('');
  const categorias = ref('');
  const mostrarErrores = ref(false);
  
  const errorNombreProyecto = computed(() => {
    return nombreProyecto.value === '' ? 'El nombre del proyecto es obligatorio' : '';
  });
  
  const errorCategorias = computed(() => {
    return categorias.value === '' ? 'Las categorías son obligatorias' : '';
  });
  
  function validarPaso() {
    mostrarErrores.value = true;
    if (!errorNombreProyecto.value && !errorCategorias.value) {
      emitir('valido', { nombreProyecto: nombreProyecto.value, categorias: categorias.value });
    }
  }
  
  function pasoAnterior() {
    emitir('anterior');
  }
</script>

<template>
  <div class="container bg-dark text-white rounded p-4">
    <h2 class="pb-3">Información del Proyecto</h2>
    <form method="post" @submit.prevent="validarPaso">
      <div class="mb-3 row">
        <label for="nombreProyecto" class="col-7 col-form-label">Nombre del Proyecto</label>
        <div class="col-5">
          <input type="text" class="form-control" id="nombreProyecto" v-model="nombreProyecto">
          <p v-if="mostrarErrores && errorNombreProyecto" class="mensaje-error">{{ errorNombreProyecto }}</p>
        </div>
      </div>
      <div class="mb-3 row">
        <label for="categorias" class="col-7 col-form-label">Tipología/Categorías</label>
        <div class="col-5">
          <input type="text" class="form-control" id="categorias" v-model="categorias">
          <p v-if="mostrarErrores && errorCategorias" class="mensaje-error">{{ errorCategorias }}</p>
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
  
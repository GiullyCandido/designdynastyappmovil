<script setup>
  import { ref, computed } from 'vue';
  import Paso1 from './Paso1FormPortafolio.vue';
  import Paso2 from './Paso2FormPortafolio.vue';
  import Paso3 from './Paso3FormPortafolio.vue';
  import Paso4 from './Paso4FormPortafolio.vue';

  const pasos = [Paso1, Paso2, Paso3, Paso4];
  const indicePasoActual = ref(0);
  const formularioEnviado = ref(false);

  const componentePasoActual = computed(() => {
    return pasos[indicePasoActual.value];
  });

  const datosFormulario = ref({
    nombre: '',
    pais: '',
    nombreProyecto: '',
    categorias: '',
    descripcion: '',
    archivos: []
  });

  const formulariosGuardadosLS = ref([]);

  // Recuperar (get) los datos guardados de localStorage
  if (localStorage.getItem('formulariosGuardadosLS')) {
    formulariosGuardadosLS.value = JSON.parse(localStorage.getItem('formulariosGuardadosLS'));
  }

  function manejarValidacion(datos) {
    Object.assign(datosFormulario.value, datos);
    localStorage.setItem('datosFormulario', JSON.stringify(datosFormulario.value));
    if (indicePasoActual.value < pasos.length - 1) {
      indicePasoActual.value++;
    } else {
      enviarFormulario();
    }
  }

  function pasoAnterior() {
    if (indicePasoActual.value > 0) {
      indicePasoActual.value--;
    }
  }

  function enviarFormulario() {
    console.log('Formulario enviado:', datosFormulario.value);
    formularioEnviado.value = true;

    formulariosGuardadosLS.value.push({ ...datosFormulario.value });

    localStorage.setItem('formulariosGuardadosLS', JSON.stringify(formulariosGuardadosLS.value));

    datosFormulario.value = {
      nombre: '',
      pais: '',
      nombreProyecto: '',
      categorias: '',
      descripcion: '',
      archivos: []
    };

    indicePasoActual.value = 0;
  }
</script>

<template>
  <div class="container mt-4 mb-4">
    <component :is="componentePasoActual"
               @valido="manejarValidacion"
               @anterior="pasoAnterior"
               v-bind="datosFormulario.value">
    </component>

    <div v-if="formularioEnviado" class="alert alert-success mt-3" role="alert">
      Formulario enviado con éxito.
    </div>
  </div>
</template>

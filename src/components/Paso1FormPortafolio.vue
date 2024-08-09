<script setup>
import { ref, computed } from 'vue';


const emitir = defineEmits(['valido']);

const nombre = ref('');
const pais = ref('');
const mostrarErrores = ref(false);

const errorNombre = computed(() => {
  return nombre.value === '' ? 'El nombre es obligatorio' : '';
});

const errorPais = computed(() => {
  return pais.value === '' ? 'El país es obligatorio' : '';
});

function validarPaso() {
  mostrarErrores.value = true;
  if (!errorNombre.value && !errorPais.value) {
    emitir('valido', { nombre: nombre.value, pais: pais.value });
  }
}

const paises = [
  "Afganistán", "Albania", "Alemania", "Andorra", "Angola", "Antigua y Barbuda", "Arabia Saudita", "Argelia", "Argentina", "Armenia", 
  "Australia", "Austria", "Azerbaiyán", "Bahamas", "Bangladés", "Barbados", "Baréin", "Bélgica", "Belice", "Benín", 
  "Bielorrusia", "Birmania", "Bolivia", "Bosnia y Herzegovina", "Botsuana", "Brasil", "Brunéi", "Bulgaria", "Burkina Faso", "Burundi", 
  "Cabo Verde", "Camboya", "Camerún", "Canadá", "Catar", "Chad", "Chile", "China", "Chipre", "Ciudad del Vaticano", 
  "Colombia", "Comoras", "Corea del Norte", "Corea del Sur", "Costa de Marfil", "Costa Rica", "Croacia", "Cuba", "Dinamarca", "Dominica", 
  "Ecuador", "Egipto", "El Salvador", "Emiratos Árabes Unidos", "Eritrea", "Eslovaquia", "Eslovenia", "España", "Estados Unidos", "Estonia", 
  "Esuatini", "Etiopía", "Filipinas", "Finlandia", "Fiyi", "Francia", "Gabón", "Gambia", "Georgia", "Ghana", 
  "Granada", "Grecia", "Guatemala", "Guinea", "Guinea-Bisáu", "Guinea Ecuatorial", "Guyana", "Haití", "Honduras", "Hungría", 
  "India", "Indonesia", "Irak", "Irán", "Irlanda", "Islandia", "Islas Marshall", "Islas Salomón", "Israel", "Italia", 
  "Jamaica", "Japón", "Jordania", "Kazajistán", "Kenia", "Kirguistán", "Kiribati", "Kuwait", "Laos", "Lesoto", 
  "Letonia", "Líbano", "Liberia", "Libia", "Liechtenstein", "Lituania", "Luxemburgo", "Macedonia del Norte", "Madagascar", "Malasia", 
  "Malaui", "Maldivas", "Malí", "Malta", "Marruecos", "Mauricio", "Mauritania", "México", "Micronesia", "Moldavia", 
  "Mónaco", "Mongolia", "Montenegro", "Mozambique", "Namibia", "Nauru", "Nepal", "Nicaragua", "Níger", "Nigeria", 
  "Noruega", "Nueva Zelanda", "Omán", "Países Bajos", "Pakistán", "Palaos", "Panamá", "Papúa Nueva Guinea", "Paraguay", "Perú", 
  "Polonia", "Portugal", "Reino Unido", "República Centroafricana", "República Checa", "República del Congo", "República Democrática del Congo", "República Dominicana", "Ruanda", "Rumania", 
  "Rusia", "Samoa", "San Cristóbal y Nieves", "San Marino", "San Vicente y las Granadinas", "Santa Lucía", "Santo Tomé y Príncipe", "Senegal", "Serbia", "Seychelles", 
  "Sierra Leona", "Singapur", "Siria", "Somalia", "Sri Lanka", "Sudáfrica", "Sudán", "Sudán del Sur", "Suecia", "Suiza", 
  "Surinam", "Tailandia", "Tanzania", "Tayikistán", "Timor Oriental", "Togo", "Tonga", "Trinidad y Tobago", "Túnez", "Turkmenistán", 
  "Turquía", "Tuvalu", "Ucrania", "Uganda", "Uruguay", "Uzbekistán", "Vanuatu", "Venezuela", "Vietnam", "Yemen", 
  "Yibuti", "Zambia", "Zimbabue"
];
</script>

<template>
  <div class="container bg-dark text-white rounded p-4">
    <h2 class="pb-3">Información del Autor</h2>
    <form method="post" @submit.prevent="validarPaso">
      <div class="mb-3 row">
        <label for="nombre" class="col-sm-8 col-form-label">Nombre (Marca o Artista)</label>
        <div class="col-sm-4">
          <input type="text" class="form-control" id="nombre" v-model="nombre">
          <p v-if="mostrarErrores && errorNombre" class="mensaje-error">{{ errorNombre }}</p>
        </div>
      </div>
      <div class="mb-3 row">
        <label for="pais" class="col-sm-4 col-form-label">País</label>
        <div class="col-sm-8">
          <select class="form-select" id="pais" v-model="pais">
            <option value="" disabled>Selecciona un país</option>
            <option v-for="paisNombre in paises" :key="paisNombre" :value="paisNombre">{{ paisNombre }}</option>
          </select>
          <p v-if="mostrarErrores && errorPais" class="mensaje-error">{{ errorPais }}</p>
        </div>
      </div>
      <button type="submit" class="btn btn-success">Siguiente</button>
    </form>
  </div>
</template>

<style>
.mensaje-error {
  color: red;
}

.bg-dark {
  background-color: #343a40 !important;
}

.pb-3 {
  padding-bottom: 0.75rem !important;
}

.mb-3 {
  margin-bottom: 1rem !important;
}

.col-form-label {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 0;
}


</style>

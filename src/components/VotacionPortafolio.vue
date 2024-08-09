<script setup>
import { ref } from 'vue';

const portafolios = ref([]);
const votos = ref({});
const portafolioIzquierda = ref({});
const portafolioDerecha = ref({});

function inicializarVotacion(portafoliosGuardados) {
  portafolios.value = portafoliosGuardados;
  if (portafolios.value.length >= 2) {
    elegirPortafolios();
  } else {
    portafolioIzquierda.value = {};
    portafolioDerecha.value = {};
  }
}

function elegirPortafolios() {
  const indice1 = Math.floor(Math.random() * portafolios.value.length);
  let indice2;
  do {
    indice2 = Math.floor(Math.random() * portafolios.value.length);
  } while (indice2 === indice1);

  portafolioIzquierda.value = portafolios.value[indice1];
  portafolioDerecha.value = portafolios.value[indice2];
}

function votar(lado) {
  const seleccionado = lado === 'izquierda' ? portafolioIzquierda.value : portafolioDerecha.value;
  votos.value[seleccionado.nombreProyecto] = (votos.value[seleccionado.nombreProyecto] || 0) + 1;
  localStorage.setItem('votos', JSON.stringify(votos.value));
  elegirPortafolios();
}

function cargarVotosGuardados() {
  const votosGuardados = JSON.parse(localStorage.getItem('votos') || '{}');
  votos.value = votosGuardados;
}

const formulariosGuardados = JSON.parse(localStorage.getItem('formulariosGuardadosLS') || '[]');
inicializarVotacion(formulariosGuardados);
cargarVotosGuardados();

</script>

<template>
  <div class="container mt-4 mb-3">
    <div class="row">
      <div class="col-12" v-if="portafolioIzquierda.nombreProyecto">
        <div class="card text-bg-dark border-0 mb-3" @click="votar('izquierda')">
          <img src="\BannerMotorola.jpg" class="card-img" alt="...">
          <div class="card-img-overlay style-card">
            <h3 class="card-title fs-2">{{ portafolioIzquierda.nombreProyecto }}</h3>
            <p class="card-text p-3 fs-5 position-absolute bottom-0 start-0 mb-3">Tipología: {{ portafolioIzquierda.categorias }}</p>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="text-center fs-1">
              <p class="zoomable">VS</p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12" v-if="portafolioDerecha.nombreProyecto">
        <div class="card text-bg-dark border-0 mb-3" @click="votar('derecha')">
          <img src="/Starbucks_Publicidad.jpg" class="card-img" alt="...">
          <div class="card-img-overlay style-card">
            <h3 class="card-title fs-2">{{ portafolioDerecha.nombreProyecto }}</h3>
            <p class="card-text p-3 fs-5 position-absolute bottom-0 start-0 mb-3">Tipología: {{ portafolioDerecha.categorias }}</p>
          </div>
        </div>
      </div>
      <div v-if="portafolios.length < 2" class="col-12 mt-3">
        <div class="alert alert-warning" role="alert">
          Aún no hay suficientes portafolios para iniciar la votación.
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .card {
    cursor: pointer;
  }
  .style-card {
    background: rgba(0, 0, 0, 0.5);
  }

  @keyframes zoomIn {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }

    .zoomable {
      animation: zoomIn 1.5s infinite;
    }
</style>

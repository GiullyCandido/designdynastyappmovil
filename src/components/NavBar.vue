<template>
    <nav class="bg navbar navbar-expand-lg">
  <div class="container-fluid ">
    <RouterLink to="/" class="especial-font navbar-brand text-white icono ">Design Dynasty</RouterLink>
    <button id="toggler" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNavDropdown">
      <ul class="navbar-nav ">
        <li class="nav-item ms-3 mb-3 mt-2">
          <RouterLink to="/" class="navbar-brand text-white">Inicio</RouterLink>
        </li>
        <li class="nav-item ms-3 mb-3">
          <RouterLink to="/nosotros" class="navbar-brand text-white">Nosotros</RouterLink>
        </li>
        <li class="nav-item ms-3 mb-3">
          <RouterLink to="/ganadores" class="navbar-brand text-white">Portafolios Ganadores</RouterLink>
        </li>
        <li class="nav-item ms-5 mb-3">
          <RouterLink to="/inscripciones" class="navbar-brand text-white">Sube tu Portafolio</RouterLink>
        </li>
        <li class="nav-item ms-3 mb-3">
          <RouterLink to="/votacion" class="navbar-brand text-white">Votaciones</RouterLink>
        </li>      
      </ul>
    </div>
  </div>
</nav>
</template>
<style>
  .bg{
    background-color: rgb(95, 62, 90);
  }
  #toggler{
    background-color: rgb(255, 255, 255);
    border: none;
  }
  .icono{
    text-shadow: 2px 2px 4px rgba(225, 0, 255, 0.423);
    font-weight: 300;
    font-size: 15px;
  }
</style>
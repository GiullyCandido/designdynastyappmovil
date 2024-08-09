import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Nosotros from '../views/Nosotros.vue'
import Ganadores from '../views/PortafoliosGanadores.vue'
import Inscripciones from '../views/Inscripciones.vue'
import Votacion from '../views/Votacion.vue'
import ArtistaView from '../views/ArtistaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/nosotros',
      name: 'nosotros',
      component: Nosotros
    },
    {
      path: '/ganadores',
      name: 'Ganadores',
      component: Ganadores
    },
    {
      path: '/inscripciones',
      name: 'Inscripciones',
      component: Inscripciones,
    },
    {
      path: '/votacion',
      name: 'Votaciones',
      component: Votacion,
    },
    {
      path: '/artista/:id',
      name: 'artista',
      component: ArtistaView
    },
    
  ]
})

export default router

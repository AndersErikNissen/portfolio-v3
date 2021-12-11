import { createRouter, createWebHashHistory } from 'vue-router'
import Hjem from '../views/HjemPage.vue'

const routes = [
  {
    path: '/',
    name: 'Hjem',
    component: Hjem
  },
  {
    path: '/profil',
    name: 'Profil',
    component: () => import('../views/ProfilPage.vue')
  },
  {
    path: '/case-studies',
    name: 'CaseStudies',
    component: () => import('../views/CaseStudiesPage.vue')
  },
  {
    path: '/design',
    name: 'Design',
    component: () => import('../views/DesignPage.vue')
  },
  {
    path: '/kontakt',
    name: 'Kontakt',
    component: () => import('../views/KontaktPage.vue')
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

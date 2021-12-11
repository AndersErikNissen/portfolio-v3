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
    path: '/case-studies/:case',
    name: 'TemplateCaseStudie',
    component: () => import('../views/TemplateCaseStudie.vue'),
    // Makes it so the :params will be passed on as a prop to the component.
    props: true
  },
  {
    path: '/case-studies',
    name: 'CaseStudies',
    component: () => import('../views/CaseStudiesPage.vue')
  },
  {
    path: '/designs/:design',
    name: 'TemplateDesign',
    component: () => import('../views/TemplateDesign.vue'),
    // Makes it so the :params will be passed on as a prop to the component.
    props: true
  },
  {
    path: '/designs',
    name: 'Designs',
    component: () => import('../views/DesignPage.vue')
  },
  {
    path: '/kontakt',
    name: 'Kontakt',
    component: () => import('../views/KontaktPage.vue')
  },
  {
    path: '/notfound',
    name: 'NotFound',
    component: () => import('../views/ErrorPage.vue')
  },
  {
    // It seems that is just the way to type the last path that picks up everything that comes this far.
    path: "/:pathMatch(.*)*",
    name: "LastStop",
    redirect: '/notfound'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

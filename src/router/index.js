import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Home
  },
  {
    path: '/cases',
    name: 'Cases',
    component: () => import('../views/AllCasesPage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import ClientForm from '../components/ClientForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    }
    ,
    {
      path: '/clients/',
      name: 'clients',

      component: () => import('../pages/Clients.vue'),
      props: true
    },
    {
      path: '/client',
      name: 'newClient',

      component: ClientForm,
      props: true
    },
    {
      path: '/client/:id',
      name: 'editClient',

      component: () => import('../components/ClientForm.vue'),
      props: true
    },
    ,
    {
      path: '/chambres',
      name: 'chambres',

      component: () => import('../pages/Chambres.vue'),
      props: true
    },
    {
      path: '/chambre/:id',
      name: 'chambre',

      component: () => import('../pages/Chambre.vue'),
      props: true
    },
  ],
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Fonctionnalites from '../views/Fonctionnalites.vue'
import Apropos from '../views/Apropos.vue'
import Inscription from '../views/Inscription.vue'
import Connexion from '../views/Connexion.vue'
import Compte from '../views/Compte.vue'
import Tasks from '../views/Tasks.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/fonctionnalites',
    name: 'Fonctionnalites',
    component: Fonctionnalites
  },
  {
    path: '/apropos',
    name: 'Apropos',
    component: Apropos
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/inscription',
    name: 'Inscription',
    component: Inscription
  },
  {
    path: '/connexion',
    name: 'Connexion',
    component: Connexion
  },
  {
    path: '/compte',
    name: 'Compte',
    component: Compte
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: Tasks
  },
  // {
  //   path: '/connexion',
  //   name: 'Connexion',
  //   component: () => import(/* webpackChunkName: "connexion" */ '../views/Connexion.vue')
  // },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "settings" */ '../views/Settings.vue'),
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Timebourse from '../views/Timebourse.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Timebourse',
    component: Timebourse
  },
  {
    path: '/connexion',
    name: 'Connexion',
    component: () => import(/* webpackChunkName: "connexion" */ '../views/Connexion.vue')
  },
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

// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

//   if (requiresAuth && !auth.currentUser) {
//     next('/login')
//   } else {
//     next()
//   }
// })




export default router

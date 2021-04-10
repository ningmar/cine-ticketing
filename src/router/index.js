import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home')
  },
  {
    path: '/compra',
    component: () =>
      import(/* webpackChunkName: "compra" */ '@/views/Purchase'),
    children: [
      {
        path: '',
        name: 'purchase',
        redirect: { name: 'check-purchase' }
      },
      {
        path: '/comprueba',
        name: 'check-purchase',
        component: () =>
          import(
            /* webpackChunkName: "compra" */ '@/views/Purchase/CheckPurchase'
          )
      },
      {
        path: '/acceso',
        name: 'access-room',
        component: () =>
          import(/* webpackChunkName: "compra" */ '@/views/Purchase/AccessRoom')
      }
    ]
  },
  {
    path: '/registro',
    name: 'Register',
    component: () =>
      import(/* webpackChunkName: "registro" */ '@/views/Register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (to.hash) {
        if (document.querySelector(to.hash)) {
          return {
            selector: to.hash,
            behavior: 'smooth'
          }
        }
        return false
      }

      return { x: 0, y: 0 }
    }
  }
})

export default router

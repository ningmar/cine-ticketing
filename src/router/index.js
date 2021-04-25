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
      }
    ]
  },
  {
    path: '/registro',
    component: () =>
      import(/* webpackChunkName: "registro" */ '@/views/Register'),
    children: [
      {
        path: '/registro',
        name: 'register',
        component: () =>
          import(
            /* webpackChunkName: "registro" */ '@/views/Register/RegisterCard'
          )
      },
      {
        path: '/registro-solo-pass',
        name: 'register-solo-pass',
        component: () =>
          import(
            /* webpackChunkName: "registro" */ '@/views/Register/RegisterPassword'
          )
      }
    ]
  },
  {
    path: '/contacto',
    component: () =>
      import(/* webpackChunkName: "contacto" */ '@/views/Contact'),
    children: [
      {
        path: '/contacto',
        name: 'contact-company',
        component: () =>
          import(
            /* webpackChunkName: "contacto" */ '@/views/Contact/ContactCompany'
          )
      }
    ]
  },
  {
    path: '/legal',
    component: () => import(/* webpackChunkName: "policy" */ '@/views/Policy'),
    children: [
      {
        path: '/acceso',
        name: 'access-room',
        component: () =>
          import(
            /* webpackChunkName: "policy" */ '@/views/Policy/PolicyAccessRoom'
          )
      },
      {
        path: '/proteccion-datos-contacto',
        name: 'data-protection-contact',
        component: () =>
          import(
            /* webpackChunkName: "policy" */ '@/views/Policy/PolicyDataProtection'
          )
      },
      {
        path: '/proteccion-datos-curriculum',
        name: 'data-protection-curriculum',
        component: () =>
          import(
            /* webpackChunkName: "policy" */ '@/views/Policy/PolicyDataProtection'
          )
      }
    ]
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

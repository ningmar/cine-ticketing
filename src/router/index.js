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
  routes
})

export default router

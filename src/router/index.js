import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  /*RUTA CALENDARIO */
  {
    path: '/calendar',
    name: 'calendar',
    component: () => import(/* webpackChunkName: "about" */ '../views/calendar/CalendarView.vue')
  },
  /*RUTA PACIENTE */
  {
    path: '/patients',
    name: 'patient',
    component: () => import(/* webpackChunkName: "about" */ '../views/patient/patient-view.vue')
  },
  /*RUTA MENSAJES */
  {
    path: '/messages',
    name: 'messages',
    component: () => import(/* webpackChunkName: "about" */ '../views/message/messages-view.vue')
  },
  /*RUTA PAQUETE DE VALES */
  {
    path: '/vouchers',
    name: 'vouchers',
    component: () => import(/* webpackChunkName: "about" */ '../views/vouchers/VouchersView.vue')
  },
  /*RUTA PAQUETE DE VALES */
  {
    path: '/campaigns',
    name: 'campaigns',
    component: () => import(/* webpackChunkName: "about" */ '../views/campaigns/CampaignsView.vue')
  },
  /*RUTA PRESUPUESTOS */
  {
    path: '/quotes',
    name: 'quotes',
    component: () => import(/* webpackChunkName: "about" */ '../views/quotes/QuotesView.vue')
  },
  /*RUTA AJUSTES */
  {
    path: '/settings',
    name: 'settings',
    component: () => import(/* webpackChunkName: "about" */ '../views/settings/SettingsView.vue')
  },
  /*RUTA AJUSTES */
  {
    path: '/edicion-de-perfil',
    name: 'profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/profile/ProfileView.vue')
  },
  
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

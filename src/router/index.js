import Vue from 'vue'
import VueRouter from 'vue-router'
import CalendarView from '../views/calendar/CalendarView.vue'


Vue.use(VueRouter)

const routes = [

  /*Ruta Dasboard | Luis Reyes */
  {
    path: '/',
    name: 'dashboard'
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/dashboardView.vue')
  },
  {
    path: '/calendar',
    name: 'calendario',
    component: CalendarView
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
  {
    path: '/patients/agregar',
    name: 'addPatient',
    component: () => import(/* webpackChunkName: "about" */ '../views/patient/addPatient.vue')
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
  /*RUTA PERFIL */
  {
    path: '/edicion-de-perfil',
    name: 'profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/profile/ProfileView.vue')
  },
  {
    path: '/edicion-de-perfil/editar',
    name: 'Editprofile',
    component: () => import(/* webpackChunkName: "about" */ '../views/profile/editPerfil.vue')
  },
  
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})




export default router

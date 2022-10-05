import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [

  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login/login.vue')
  },
  /*RUTA CALENDARIO */
  /*{
    path: '/calendar',
    name: 'calendar',
    component: () => import( '../views/calendar/calendarView.vue')
  },*/
  /*RUTA PACIENTE */
  {
    path: '/patient',
    name: 'patient',
    component: () => import(/* webpackChunkName: "about" */ '../views/patient/patientView.vue')
  },

  {
    path: '/addPatient',
    name: 'addPatient',
    component: () => import(/* webpackChunkName: "about" */ '../views/patient/addPatient.vue')
  },

  {
    path: '/editPatient',
    name: 'editPatient',
    component: () => import(/* webpackChunkName: "about" */ '../views/patient/editPatient.vue')
  },

  {
    path: '/deletePatient',
    name: 'deletePatient',
    component: () => import(/* webpackChunkName: "about" */ '../views/patient/deletePatient.vue')
  },

  {
    path: '/verPatient',
    name: 'verPatient',
    component: () => import(/* webpackChunkName: "about" */ '../views/patient/verPatient.vue')
  },

  /*RUTA MENSAJES */
  /*{
    path: '/messages',
    name: 'messages',
    component: () => import( '../views/message/messagesView.vue')
  },*/
  /*RUTA PAQUETE DE VALES */
  /*{
    path: '/vouchers',
    name: 'vouchers',
    component: () => import( '../views/vouchers/VouchersView.vue')
  },*/
  /*RUTA PAQUETE DE VALES */
  /*{
    path: '/campaigns',
    name: 'campaigns',
    component: () => import( '../views/campaigns/CampaignsView.vue')
  },*/
  /*RUTA PRESUPUESTOS */
  /*{
    path: '/quotes',
    name: 'quotes',
    component: () => import( '../views/quotes/QuotesView.vue')
  },*/
  /*RUTA AJUSTES */
  /*{
    path: '/settings',
    name: 'settings',
    component: () => import( '../views/settings/SettingsView.vue')
  },*/
  /*RUTA PERFIL */
  /*{
    path: '/edicion-de-perfil',
    name: 'profile',
    component: () => import( '../views/profile/ProfileView.vue')
  },*/
  
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})




export default router

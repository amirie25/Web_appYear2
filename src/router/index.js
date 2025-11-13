import { createRouter, createWebHistory } from 'vue-router'
import Home from '../component/pages/Home.vue'
import NewAppointment from '../component/pages/NewAppointment/NA_County.vue'
import CancelAppointment from '../component/pages/CancelAppointment/CA_Email.vue'
import Account from '../component/pages/Account.vue'

import CAPassword from '../component/pages/CancelAppointment/CA_Password.vue'


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/new-appointment', name: 'NewAppointment', component: NewAppointment },
  { path: '/cancel-appointment', name: 'CancelAppointment', component: CancelAppointment },
  { path: '/account', name: 'Account', component: Account },

  { path: '/cancel-appointment/password', name: 'CAPassword', component: CAPassword },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
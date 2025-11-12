import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NewAppointment from '../views/NewAppointment.vue'
import CancelAppointment from '../views/CancelAppointment.vue'
import Account from '../views/Account.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/new-appointment', name: 'NewAppointment', component: NewAppointment },
  { path: '/cancel-appointment', name: 'CancelAppointment', component: CancelAppointment },
  { path: '/account', name: 'Account', component: Account },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
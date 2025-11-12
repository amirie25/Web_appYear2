import { createRouter, createWebHistory } from 'vue-router'
import Home from '../component/Home.vue'
import NewAppointment from '../component/NewAppointment.vue'
import CancelAppointment from '../component/CancelAppointment.vue'
import Account from '../component/Account.vue'
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
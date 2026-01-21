import { createRouter, createWebHistory } from 'vue-router'
import Home from '../component/pages/Home.vue'
import NewAppointment from '../component/pages/NewAppointment/NA_County.vue'
import CancelAppointment from '../component/pages/CancelAppointment/CA_Email.vue'
import Account from '../component/pages/Account.vue'

import CAPassword from '../component/pages/CancelAppointment/CA_Password.vue'

import CASuccessful from '../component/pages/CancelAppointment/CA_Successful.vue'

import NA_County from '../component/pages/NewAppointment/NA_County.vue'
import NA_CityAdress from '../component/pages/NewAppointment/NA_CityAdress.vue'
import NA_DateHour from '../component/pages/NewAppointment/NA_DateHour.vue'
import NA_Service from '../component/pages/NewAppointment/NA_Service.vue'
import NA_Successful from '../component/pages/NewAppointment/NA_Successful.vue'


const routes = [
  { path: '/', name: 'Home', component: Home },

  { path: '/cancel-appointment', name: 'CancelAppointment', component: CancelAppointment },
  { path: '/account', name: 'Account', component: Account },

  { path: '/cancel-appointment/password', name: 'CAPassword', component: CAPassword },

  { path: '/cancel-appointment/successful', name: 'CASuccessful', component: CASuccessful },
{
  path: '/new-appointment',
  redirect: '/new-appointment/county'
},
{
  path: '/new-appointment/county',
  name: 'NA_County',
  component: NA_County
},
{
  path: '/new-appointment/city-address',
  name: 'NA_CityAdress',
  component: NA_CityAdress
},
{
  path: '/new-appointment/date-hour',
  name: 'NA_DateHour',
  component: NA_DateHour
},
{
  path: '/new-appointment/service',
  name: 'NA_Service',
  component: NA_Service
},
{
  path: '/new-appointment/successful',
  name: 'NA_Successful',
  component: NA_Successful
}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
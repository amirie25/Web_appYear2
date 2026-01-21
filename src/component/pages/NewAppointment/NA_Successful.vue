<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAppointmentStore } from '@/stores/appointment'

const router = useRouter()
const appointmentStore = useAppointmentStore()

const summary = computed(() => appointmentStore.summary)

const goHome = () => {
  appointmentStore.reset()
  router.push({ name: 'Home' })
}
</script>

<template>
  <div>
    
    <h1>Appointment created successfully</h1>
    <br />
    <h3>Summary</h3>

    <p>{{ summary }}</p>

    <br />
    <RouterLink to="/new-appointment/service">Create another</RouterLink>
    <br /><br />
    <button @click="goHome">Go Home</button>
  </div>
</template>

<style>

</style>

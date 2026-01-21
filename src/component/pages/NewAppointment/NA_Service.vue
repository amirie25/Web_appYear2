<script setup>
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useServicesStore } from '@/stores/services'
import { useAppointmentStore } from '@/stores/appointment'

const router = useRouter()
const servicesStore = useServicesStore()
const appointmentStore = useAppointmentStore()

const selected = ref(servicesStore.selected?.id || '')

const selectedService = computed(() =>
  servicesStore.all.find(s => s.id === selected.value) || null
)
const isValid = computed(() => !!selected.value)

watch(selected, val => {
  servicesStore.select(val)
  appointmentStore.setService(val)
})

const next = () => {
  if (!isValid.value) return
  router.push({ name: 'NA_County' })
}
</script>

<template>
  <div>
    <h1>New Appointment</h1>
    <br />
    <h3>Select a service</h3>

    <select v-model="selected">
      <option value="" disabled>Select...</option>
      <option v-for="s in servicesStore.all" :key="s.id" :value="s.id">
        {{ s.name }} ({{ s.durationMin }} min)
      </option>
    </select>

    <p>Selected: {{ selectedService?.name || '-' }}</p>

    <RouterLink to="/cancel">Go to Cancel page</RouterLink>
    <br /><br />
    <button @click="next" :disabled="!isValid">Next</button>
  </div>
</template>

<style></style>

<script setup>
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useLocationStore } from '@/stores/location'
import { useAppointmentStore } from '@/stores/appointment'

const router = useRouter()
const locationStore = useLocationStore()
const appointmentStore = useAppointmentStore()

const city = ref(locationStore.selectedCity || '')
const address = ref(locationStore.address || '')

const cities = computed(() => locationStore.citiesForSelectedCounty)
const isValid = computed(() => city.value.length >= 2 && address.value.length >= 5)

watch(city, val => {
  locationStore.setCity(val)
  appointmentStore.setCity(val)
})

watch(address, val => {
  locationStore.setAddress(val)
  appointmentStore.setAddress(val)
})

const next = () => {
  if (!isValid.value) return
  router.push({ name: 'NA_DateHour' })
}
const back = () => router.push({ name: 'NA_County' })
</script>

<template>
  <div>
    
    <h1>New Appointment</h1>
    <br />
    <h3>Enter city and address</h3>

    <div v-if="!locationStore.countySelected">
      <p>Please select a county first.</p>
      <button @click="back">Go back</button>
    </div>

    <div v-else>
      <select v-model="city">
        <option value="" disabled>Select city...</option>
        <option v-for="c in cities" :key="c" :value="c">{{ c }}</option>
      </select>

      <br /><br />

      <input v-model="address" placeholder="Street, number, etc." />

      <p>City: {{ city || '-' }}</p>
      <p>Address: {{ address || '-' }}</p>

      <br />
      <button @click="back">Back</button>
      <button @click="next" :disabled="!isValid">Next</button>
    </div>
  </div>
</template>

<style>

</style>

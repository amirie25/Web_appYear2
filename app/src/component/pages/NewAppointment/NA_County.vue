<script setup>
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useLocationStore } from '@/stores/location'
import { useAppointmentStore } from '@/stores/appointment'

const router = useRouter()
const locationStore = useLocationStore()
const appointmentStore = useAppointmentStore()

const county = ref(locationStore.selectedCounty || '')

const isValid = computed(() => county.value.length >= 2)

watch(county, val => {
  locationStore.setCounty(val)
  appointmentStore.setCounty(val)
})

const next = () => {
  if (!isValid.value) return
  router.push({ name: 'NA_CityAdress' })
}
const back = () => router.push({ name: 'NA_Service' })
</script>

<template>
  <div>
    
    <h1>New Appointment</h1>
    <br />
    <h3>Select county</h3>

    <select v-model="county">
      <option value="" disabled>Select...</option>
      <option v-for="c in locationStore.allCounties" :key="c" :value="c">{{ c }}</option>
    </select>

    <p>Selected county: {{ county || '-' }}</p>

    <br />
    <button @click="back">Back</button>
    <button @click="next" :disabled="!isValid">Next</button>
  </div>
</template>

<style>

</style>

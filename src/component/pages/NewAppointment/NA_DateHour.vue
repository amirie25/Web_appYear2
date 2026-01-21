<script setup>
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAppointmentStore } from '@/stores/appointment'
import { useUiStore } from '@/stores/ui'

const router = useRouter()
const appointmentStore = useAppointmentStore()
const uiStore = useUiStore()

const date = ref(appointmentStore.date || '')
const hour = ref(appointmentStore.hour || '')

const isValidDate = computed(() => !!date.value)
const isValidHour = computed(() => /^([01]\d|2[0-3]):([0-5]\d)$/.test(hour.value))
const isValid = computed(() => isValidDate.value && isValidHour.value)

watch(date, val => appointmentStore.setDate(val))
watch(hour, val => appointmentStore.setHour(val))

const next = async () => {
  if (!isValid.value) return
  uiStore.setLoading(true)
  // fake save delay logic could be here
  uiStore.setLoading(false)
  router.push({ name: 'NA_Successful' })
}

const back = () => router.push({ name: 'NA_CityAdress' })
</script>

<template>
  <div>
    <h1>New Appointment</h1>
    <br />
    <h3>Select date and hour</h3>

    <input type="date" v-model="date" />
    <br /><br />
    <input type="time" v-model="hour" />

    <p>Date: {{ date || '-' }}</p>
    <p>Hour: {{ hour || '-' }}</p>
    <p v-if="!isValidHour && hour">Hour must be HH:MM (24h)</p>

    <br />
    <button @click="back">Back</button>
    <button @click="next" :disabled="!isValid">
      {{ uiStore.isLoading ? 'Saving...' : 'Next' }}
    </button>
  </div>
</template>

<style>

</style>

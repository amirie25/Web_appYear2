<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToPasswordPage = () => {
  router.push('/cancel-appointment/password')
}
</script>

<template>
  <button
    class="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
    @click="goToPasswordPage"
  >
    Cancel Appointment
  </button>
</template>
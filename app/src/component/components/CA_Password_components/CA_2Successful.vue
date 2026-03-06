<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToSuccessfulPage = () => {
  router.push('/cancel-appointment/successful')
}
</script>

<template>
  <button
    class="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
    @click="goToSuccessfulPage"
  >
    Confirm Cancellation
  </button>
</template>
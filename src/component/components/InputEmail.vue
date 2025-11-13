<script setup>
defineProps(['value'])
</script>

<template>
  <input
    type="email"
    :value="value"
    placeholder="Enter your email"
    class="border p-2 rounded w-full"
    @input="emit('changeValue', $event.target.value)"
  />
</template>
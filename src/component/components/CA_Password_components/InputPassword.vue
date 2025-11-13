<script setup>
defineProps(['value'])
const emit = defineEmits(['changeValue'])
</script>

<template>
  <input
    type="password"
    :value="value"
    placeholder="Enter your password"
    class="border p-2 rounded w-full"
    @input="emit('changeValue', $event.target.value)"
  />
</template>
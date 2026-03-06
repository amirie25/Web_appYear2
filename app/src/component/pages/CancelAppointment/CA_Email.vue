<script setup>
import InputEmail from '@/component/components/InputEmail.vue';
import CA_2Password from '@/component/components/CA_2Password.vue'
import {ref} from 'vue';

const email = ref('')
const updateEmail = (val) => {
  email.value = val
}
</script>

<template>
  <div>
    <h1>Cancel an Appointment</h1>

    <br></br>
    <h3>Please enter your email</h3>
 <InputEmail :value="email" @changeValue="updateEmail" />
  
  <p>Enter email: {{ email }}</p>
  <CA_2Password />
  </div>
</template>

<style>
@import "bootstrap-icons";
</style>
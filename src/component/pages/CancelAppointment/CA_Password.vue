<script setup>
import InputPassword from '@/component/components/CA_Password_components/InputPassword.vue' 
import CA_2Successful from '@/component/components/CA_Password_components/CA_2Successful.vue'
import { ref } from 'vue' 

const password = ref('')

const updatePassword = (val) => {
  password.value = val
}
</script>

<template>
  <div>
    <h1>Please enter your password</h1>

    <br />
    <h3>Enter your account password</h3>
    <InputPassword :value="password" @changeValue="updatePassword" />
    <p>Entered password: {{ password }}</p>
    <CA_2Successful />
  </div>
</template>

<style>

</style>
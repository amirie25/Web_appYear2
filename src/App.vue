<script setup></script>

<template>
  <div id="app">
    <nav class="menu">
      <router-link to="/" class="link" exact-active-class="active">Home</router-link>
      <router-link to="/new-appointment" class="link" active-class="active">New Appointment</router-link>
      <router-link to="/cancel-appointment" class="link" active-class="active">Cancel Appointment</router-link>
      <router-link to="/account" class="link" active-class="active">Account</router-link>
    </nav>

    <router-view />
  </div>
</template>

<style scoped>
.menu {
  display: flex;
  justify-content: center;
  background-color: #a5b3ff;
  padding: 12px;
}
.link {
  color: white;
  text-decoration: none;
  margin: 0 20px;
  font-weight: 600;
  font-size: 16px;
}
.link:hover {
  text-decoration: underline;
}
.active {
  color: #ffd700; 
}
</style>

<script setup>
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar v-if="$route.name !== 'Resume'" />
  <router-view> </router-view>
  <Footer v-if="$route.name !== 'Resume'" />
</template>

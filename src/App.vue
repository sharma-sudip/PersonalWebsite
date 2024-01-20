<script setup>
import Footer from "./components/footer.vue";
import Navbar from "./components/navbar.vue";
</script>

<template>
  <Navbar v-if="$route.name !== 'Resume'" />
  <router-view> </router-view>
  <Footer v-if="$route.name !== 'Resume'" />
</template>

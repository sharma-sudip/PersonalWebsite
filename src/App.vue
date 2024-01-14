<script setup>
import Footer from "./components/footer.vue";
import Navbar from "./components/navbar.vue";
</script>

<template>
  <Navbar />
  <router-view class="p-4 pl-1"> </router-view>
  <Footer />
</template>

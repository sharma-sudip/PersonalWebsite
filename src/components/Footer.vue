<template>
  <div
    class="w-full flex flex-column gap-2 md:flex-row justify-content-between p-3 fadeindown animation-duration-1000 foot"
  >
    <div class="flex flex-column gap-2">
      <span class="prof-title font-bold text-xl">Reach Out to me!</span>
      <span class="w-full md:w-6 text-sm opacity-50"
        >I AM AVAILABLE ON ALMOST EVERY SOCIAL MEDIA, YOU CAN CONTACT ME
        ANYWHERE. I WILL GET BACK TO YOU WITHIN 24 HOURS</span
      >
      <span class="font-bold line-height-3">Junior Software Developer</span>
      <div class="flex flex-row gap-2 opacity-50">
        <font-awesome-icon
          :icon="['fas', 'location-dot']"
          size="xl"
          color="black"
        />
        <span>Salem,NH</span>
      </div>
    </div>
    <BrandIcons />
  </div>
</template>
<script setup>
import BrandIcons from "./BrandIcons.vue";
</script>

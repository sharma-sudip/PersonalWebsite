<template>
  <div class="div flex flex-column p-3">
    <Intro />
    <div>
      <h1 class="ml-4">Experience</h1>
      <Divider class="ml-4" />
    </div>
    <div class="flex flex-column md:flex-row gap-4 md:gap-2">
      <ExperienceComponent
        v-for="(value, key) in exprerienceData"
        :data="value"
        :key="key"
      />
    </div>
  </div>
</template>

<script setup>
import Intro from "../components/Intro.vue";
import ExperienceComponent from "../components/ExperienceComponent.vue";
import exprerienceData from "../data/experience";
</script>

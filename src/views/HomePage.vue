<template>
  <div class="div flex flex-column p-2">
    <Intro />
    <div>
      <h1 class="ml-1">Experience</h1>
      <Divider class="ml-4" />
    </div>
    <div class="flex flex-column md:flex-row gap-4 md:gap-2 exp">
      <ExperienceComponent
        v-for="(value, key) in exprerienceData"
        :data="value"
        :key="key"
        class="experience"
      />
    </div>
    <Education class="mt-4" />
  </div>
</template>

<script setup>
import Intro from "../components/Intro.vue";
import ExperienceComponent from "../components/ExperienceComponent.vue";
import exprerienceData from "../data/experience";
import Education from "../components/Education.vue";
import { onMounted } from "vue";
import { animationHelper } from "../js/observer";
onMounted(() => {
  animationHelper(".experience", ["zoomin", "animation-duration-1000"]);
});
</script>

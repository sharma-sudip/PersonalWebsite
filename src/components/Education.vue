<template>
  <div class="flex flex-column p-card shadow-8 p-4 edu">
    <span class="font-bold text-3xl">Education</span>
    <div class="mt-3">
      <img src="/YSU.png" class="w-8rem h-8rem" />
    </div>
    <span class="font-bold mt-3">Youngstown State University</span>
    <span class="text-sm">Bachelor of Science in Computer Science</span>
    <span class="text-sm">August 2018 - May 2022</span>
    <span class="text-sm">GPA : 3.5</span>
    <ul class="text-sm">
      <li>
        Studied Software Engineering, Data Structures and Algorithms, and some
        advanced mathematics
      </li>
      <li>Awards & Honors: Honors Scholarship, Dean’s List, President List</li>
    </ul>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { animationHelper } from "../js/observer";
onMounted(() => {
  animationHelper(".edu", ["zoomin", "animation-duration-1000"]);
  return true;
});
</script>

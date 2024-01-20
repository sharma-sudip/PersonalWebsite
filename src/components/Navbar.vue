<template>
  <div
    class="w-full md:h-4rem h-15rem p-3 md:p-0 flex flex-column md:flex-row justify-content-start md:justify-content-between bg-white align-items-center"
  >
    <div class="w-4 pl-2"></div>
    <div
      class="flex flex-column md:flex-row justify-content-start md:justify-content-around w-full md:w-8"
    >
      <div class="border-round cursor-pointer p-2 on-hover">Introduction</div>
      <div class="p-2 on-hover" @click="scrollToWorkExperience">
        Work Experiences
      </div>
      <div class="p-2 on-hover" @click="openInNewTab">Resume</div>
      <div class="p-2 on-hover" @click="openAchievement">Achievements</div>
      <div class="p-2 on-hover" @click="openContactMe">Contact Me</div>
    </div>
  </div>
</template>
<script setup>
let scrollToWorkExperience = () => {
  const element = document.querySelector(".exp");
  element.scrollIntoView({ behavior: "smooth" });
};
const openInNewTab = () => {
  window.open("/Resume.pdf", "_blank");
};

const openAchievement = () => {
  window.open("https://meritpages.com/Sudip-Sharma/4873238");
};

const openContactMe = () => {
  const element = document.querySelector(".foot");
  element.scrollIntoView({ behavior: "smooth" });
};
</script>

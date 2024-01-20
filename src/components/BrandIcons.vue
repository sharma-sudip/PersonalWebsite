<template>
  <div class="flex flex-row gap-2 justify-content-start align-items-center">
    <font-awesome-icon
      :icon="['fab', 'facebook']"
      size="2xl"
      style="color: #164dda"
      class="cursor-pointer"
      @click="openFacebook"
    />
    <font-awesome-icon
      :icon="['fab', 'instagram']"
      size="2xl"
      style="color: #ae2d72"
      class="cursor-pointer"
      @click="openInstagram"
    />
    <font-awesome-icon
      :icon="['fab', 'github']"
      size="2xl"
      style="color: #060505"
      class="cursor-pointer"
      @click="openGithub"
    />
    <font-awesome-icon
      :icon="['fab', 'linkedin']"
      size="2xl"
      style="color: #0e3d8a"
      class="cursor-pointer"
      @click="openLinkedIn"
    />
  </div>
</template>
<script setup>
let openFacebook = () => {
  window.open(
    "https://www.facebook.com/profile.php?id=100007793984746",
    "_blank"
  );
};
let openGithub = () => {
  window.open("https://github.com/sharma-sudip", "_blank");
};
let openLinkedIn = () => {
  window.open("https://www.linkedin.com/in/sharmasudip/", "_blank");
};
let openInstagram = () => {
  window.open("https://www.instagram.com/sudipsharma2427/", "_blank");
};
</script>

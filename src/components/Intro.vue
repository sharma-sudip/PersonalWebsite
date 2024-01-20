<template>
  <div class="flex flex-column">
    <div
      class="flex flex-column md:flex-row align-items-center md:align-items-center gap-1 w-full"
    >
      <div class="card w-full md:w-9 fadeinleft animation-duration-1000">
        <Card
          class="border-none"
          :pt="{
            root: {
              class: ['border-none border-noround shadow-none '],
            },
            content: {
              class: ['greeting-text-p '],
            },
          }"
        >
          <template #title> SUDIP SHARMA <Divider /></template>
          <template #content>
            <p class="m-0">
              I am a computer science graduate at Youngstown State University
              with specialization in software development. I am actively looking
              for full time software developer opportunities. I am proficient in
              React, C, C++, Java and Python programming languages.
            </p>
          </template>
          <template #footer>
            <BrandIcons />
          </template>
        </Card>
      </div>
      <div
        class="photo w-full md:w-4 fadeinright animation-duration-1000 transition-delay-500 transition-ease-in mb-3 md:mb-0"
      >
        <img
          class="h-18rem w-18rem border-circle ml-3 md:ml-0 md:mb-0"
          style="border: 8px solid var(--indigo-500)"
          src="/Sudip-Profile-Facebook.jpeg"
        />
      </div>
    </div>
    <div
      class="w-full h-auto flex gap-2 cursor-pointer fadeinleft animation-duration-1000"
    >
      <Button
        label="Resume"
        size="small"
        :pt="{ root: { class: ['bg-indigo-500 border-none'] } }"
        @click="openInNewTab"
        class="w-full md:w-2 ml-2"
      />
    </div>
  </div>
</template>

<script setup>
import BrandIcons from "./BrandIcons.vue";

const openInNewTab = () => {
  window.open("/Resume.pdf", "_blank");
};
</script>

<template>
  <div
    class="flex flex-column align-items-center md:w-4 sm:w-full border-round shadow-8"
  >
    <div
      class="flex w-full h-9rem flex-column border-round border-noround-bottom p-2 md:p-0 text-sm md:text-base"
      :class="props.data.styleAttributes?.headerColor"
    >
      <h2 class="text-white align-self-center">
        {{ props.data?.companyName }}
      </h2>
    </div>
    <div class="-mt-8">
      <img
        :src="props.data.styleAttributes?.imageUrl"
        class="max-w-max w-9rem h-9rem border-circle"
      />
    </div>
    <div class="flex flex-column w-full align-items-center">
      <span class="text-xl font-bold">{{ props.data?.jobTitle }}</span>
      <span class="text-sm">{{ props.data?.jobDuration }}</span>
    </div>
    <div class="text-sm p-3">
      <ul>
        <li v-for="(value, key) in props.data?.content" :key="key">
          {{ value }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  data: Object,
});
</script>

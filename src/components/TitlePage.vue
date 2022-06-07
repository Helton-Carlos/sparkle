<script setup lang="ts">
import { ref } from "vue";

defineProps<{ title: string; subtitle: string }>();
</script>

<template>
  <div class="m-8">
   <div class="flex">
      <h2 class="font-bold uppercase">{{ title }}</h2>
   </div>
    <p class="font-normal">{{ subtitle }}</p>
  </div>
</template>


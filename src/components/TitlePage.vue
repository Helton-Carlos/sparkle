<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

defineProps<{ title: string; subtitle: string }>();

function routeBack() {
  router.push({ name: "home" });
}
</script>

<template>
  <div class="m-8">
    <div class="flex">
      <div class="text-indigo-500 hover:text-indigo-800">
        <svg
          @click="routeBack"
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
      <div>
        <h2 class="font-bold uppercase text-lg">{{ title }}</h2>
        <i class="font-semibold text-slate-500">{{ subtitle }}</i>
      </div>
    </div>
  </div>
</template>


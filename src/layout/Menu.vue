<script setup lang="ts">
import { ref } from "vue";

export interface IMeunu {
  path: string;
  name: string;
}

const routes = ref<IMeunu[]>([
  {
    path: "/",
    name: "Home",
  },
  {
    path: "staff",
    name: "Staff",
  },
  {
    path: "records",
    name: "Records",
  },
  {
    path: "task",
    name: "Task",
  },
  {
    path: "settings",
    name: "Settings",
  }
]);
</script>

<template>
  <div class="bg-white w-[275px] h-screen border-2 shadow-lg">
    <div>
      <h1 class="my-8 font-bold text-center animate__animated animate__bounce">Sparkle</h1>
    </div>
    <div v-for="route in routes" :key="route.name">
      <router-link :to="route.path">
        <p class="px-3 py-2 mx-10 my-3 font-semibold hover:text-white hover:bg-indigo-500 hover:rounded-xl">{{route.name}}</p>
      </router-link>
    </div>
  </div>
</template>
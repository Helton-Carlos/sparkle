<script setup lang="ts">
import { ref } from "vue";
export interface IMeunu {
  path: string;
  name: string;
}

const routes = ref<IMeunu[]>([
  {
    path: "/",
    name: "home",
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
  <div class="bg-white w-[305px] h-screen border-2 shadow-lg">
    <div>
      <h1>Sparkle</h1>
    </div>
    <div v-for="route in routes" :key="route.name">
      <router-link :to="route.path" class="bg-indigo-500">
        <p>{{route.name}}</p>
      </router-link>
    </div>
  </div>
</template>
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
  },
]);
</script>

<template>
  <div class="bg-white w-[275px] h-screen border-2 shadow-lg">
    <div class="flex my-8 text-indigo-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-7 w-7 ml-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>

      <h1 class="font-extrabold">
        Sparkle
      </h1>
    </div>

    <div>
      <router-link :to="route.path" v-for="route in routes" :key="route.name">

        <p
          class="
            px-3
            py-2
            mx-10
            my-3
            font-semibold
            hover:text-white hover:bg-indigo-500 hover:rounded-xl
          "
          exact-active-class="exact-active"
        >
          {{ route.name }}
        </p>

      </router-link>
    </div>
  </div>
</template>
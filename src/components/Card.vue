<script setup lang="ts">
export interface ICard {
  title?: string;
  subtitle?: string;
  color?: string;
}

defineProps<ICard>();
</script>

<template>
  <div>
    <div class="w-[320px] rounded-md bg-white shadow-md">
      <div class="flex px-4 pt-3">
        <div class="pr-1 mr-1 bg-red-500" v-if="color === 'red'"></div>
        <div class="pr-1 mr-1 bg-blue-500" v-if="color === 'blue'"></div>
        <div class="pr-1 mr-1 bg-green-500" v-if="color === 'green'"></div>
        <h4 class="font-bold capitalize">{{ title }}</h4>
      </div>

      <div class="px-4 pt-2 pb-3" v-if="subtitle">
        <p>
          {{ subtitle }}
        </p>
      </div>
    </div>
  </div>
</template>


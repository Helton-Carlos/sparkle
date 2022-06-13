<script setup lang="ts">

export interface ICard {
  title: string;
  subtitle: string;
}

defineProps<ICard>()
</script>

<template>
  <div class="m-8">
    <div class="w-[350px] rounded-md bg-white shadow-md">
      <h4 class="px-4 pt-3 font-bold uppercase">{{ title }}</h4>

      <div class="px-4 pb-3" v-if="title">
        <p>
          {{subtitle}}
        </p>
      </div>
    </div>
  </div>
</template>


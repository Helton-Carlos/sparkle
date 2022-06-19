<script setup lang="ts">
export interface ICard {
  title?: string;
  color?: string;
}

defineProps<ICard>();
</script>

<template>
  <div class="w-full rounded-md bg-white shadow-md">
    <div class="flex px-4 pt-3">
      <div class="pr-1 mr-1 bg-red-500" v-if="color === 'red'"></div>
      <div class="pr-1 mr-1 bg-blue-500" v-if="color === 'blue'"></div>
      <div class="pr-1 mr-1 bg-green-500" v-if="color === 'green'"></div>

      <h4 class="font-bold capitalize">{{ title }}</h4>
    </div>
    <div>
      <div class="group flex items-center mx-4 py-4">
        <img class="shrink-0 h-12 w-12 pr-1 rounded-full" src="https://assets.imgix.net/hp/snowshoe.jpg?auto=compress&w=900&h=600&fit=crop" alt="avatar" />
        <div class="ltr:ml-3 rtl:mr-3">
          <p class="text-sm font-medium group-hover:text-indigo-500">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus assumenda at rerum explicabo,
           dolorem accusantium id eum facere voluptates voluptatem alias illum aperiam porro aliquid 
           repellendus cumque perferendis obcaecati iusto.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


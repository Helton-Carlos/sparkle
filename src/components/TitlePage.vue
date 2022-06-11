<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

defineProps<{ title: string; subtitle: string }>();

function routeBack(){
 router.push({ name: 'home' })
}
</script>

<template>
  <div class="m-8">
    
   <div class="flex">
      <img src="../assets/arrow.svg" alt="seta" @click="routeBack" class="mr-2 cursor-pointer"/>
      <h2 class="font-bold uppercase">{{ title }}</h2>
   </div>

   <p class="ml-6 font-normal">{{ subtitle }}</p>
    
  </div>
</template>


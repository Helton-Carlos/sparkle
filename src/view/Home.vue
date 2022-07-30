<script setup lang="ts">
import Main from "../layout/Main.vue";
import Menu from "../layout/Menu.vue";
import TitlePage from "../components/TitlePage.vue";
import Card from "../components/Card.vue";
import { ref, computed } from "vue";

const user = ref<string>("Helton Brito");

const number = ref<number>(7);

const hours = computed(() => {
  const hour = new Date().getHours()
  if (hour >= 0 && hour <= 12) {
    return "bom dia";
  } else if (hour > 12 && hour < 18) {
    return "boa tarde";
  } else {
    return "boa noite";
  }
})

</script>

<template>
  <Main />
  <div class="flex">
    <Menu />
    <div class="m-6">
      <TitlePage title="Home" subtitle="Seja bem vindo a o Sparkle!" />
      
      <div class="bg-indigo-500 w-full h-[150px] rounded-md text-white shadow-md mb-4 p-5">
        <div class="flex mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-1" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          
          <p class="capitalize">{{ hours }}: <strong>{{ user }}.</strong></p>
        </div>

        <hr>
        
        <div class="flex justify-between gap-4 px-1 mt-4 md:px-4">

          <div class="flex ">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            
            <div>
              <p class="text-sm capitalize">Hoje:</p>
              
              <p class="text-3xl">{{ number }} </p>
            </div>
          </div>

          <div class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

            <div>
              <p class="text-sm capitalize">Hora extras:</p>
              
              <p class="text-3xl">05:55+</p>
            </div>
          </div>

          <div class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>

            <div>
              <span class="text-sm capitalize">Projetos:</span>

              <p class="text-3xl">{{ number }} </p>
            </div>
          </div>

        </div>

      </div>

      <div class="flex flex-col gap-4 md:flex-wrap md:flex-row">
        <Card color="blue" title="Atividades para hoje:" grafic="grafic" />

        <Card color="blue" title="Ganho Semanal:" grafic="grafic" />

        <Card color="blue" title="QR-Code funcionário:" :code="true" />
      </div>

    </div>
  </div>
</template>


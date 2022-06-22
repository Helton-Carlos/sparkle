<script setup lang="ts">
import Main from "../layout/Main.vue"
import Menu from "../layout/Menu.vue";
import TitlePage from "../components/TitlePage.vue";
import Card from "../components/Card.vue";

import { ref, computed, onMounted } from "vue";

const hours = computed(() => {
  const now = new Date();
  return (
    "Hoje é " + now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear()
  );
});
const size = ref<boolean>(true);

const ativades = ref<string>("Reunião as 19:00");

const setor = ref<string>("Administrativo");

onMounted(() => {
  if (window.screen.width <= 756) {
    size.value = false
  } else { !size.value  }
})

</script>

<template>
  <Main />
  <div class="flex">
    <Menu v-show="size" />
    <div class="m-6">
      <TitlePage title="Home" subtitle="Seja bem vindo a o Sparkle!" />

      <div class="flex flex-col gap-4 md:flex-wrap md:flex-row">
        <Card color="blue" title="Atividades para hoje:" grafic="grafic" />

        <Card color="blue" title="Ganho Semanal:" grafic="grafic" />

        <Card color="blue" title="Atividades semana passada:" grafic="grafic" />
      </div>

      <div class="flex flex-col gap-4 md:flex-wrap md:flex-row mt-4">
        <Card color="blue" title="Organize seu dia:" :subtitle="hours" />

        <Card color="blue" title="Setor de atuação:" :subtitle="setor" />

        <Card color="blue" title="Número de atividades semanais:" :subtitle="ativades" />
      </div>
    </div>
  </div>
</template>


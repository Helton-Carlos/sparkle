<script setup lang="ts">
import Main from "../layout/Main.vue"
import Menu from "../layout/Menu.vue";
import TitlePage from "../components/TitlePage.vue";
import Card from "../components/Card.vue";

import { ref, computed } from "vue";

const hours = computed(() => {
  const now = new Date();
  return (
    "Hoje é " + now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear()
  );
});

const ativades = ref<string>("Reunião as 19:00");

const setor = ref<string>("Administrativo");
</script>

<template>
  <Main />
  <div class="flex">
    <Menu />
    <div class="m-6">
      <TitlePage title="Home" subtitle="Seja bem vindo a o Sparkle!" />

      <div class="flex flex-col gap-4 md:flex-wrap md:flex-row">
        <Card color="blue" title="Organize seu dia:" :subtitle="hours" />

        <Card color="blue" title="Setor de atuação:" :subtitle="setor" />

        <Card color="blue" title="Número de atividades semanais:" :subtitle="ativades" />
      </div>

      <div class="mt-4">
        <Card
          color="blue"
          title="Atividades para hoje:"
          grafic="grafic"
        />
      </div>
    </div>
  </div>
</template>

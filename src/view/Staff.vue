<script setup lang="ts">
import Main from "../layout/Main.vue";
import Menu from "../layout/Menu.vue";
import TitlePage from "../components/TitlePage.vue";
import Card from "../components/Card.vue";
import { ref, computed } from "vue";

const faltas = ref<string>("quadro Faltas semanais");
const ativades = ref<string>("Reunião as 19:00");
const setor = ref<string>("Administrativo");

const hours = computed(() => {
  const now = new Date();
  return (
    "Hoje é " + now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear()
  );
});
</script>

<template>
  <Main />
  <div class="flex">
    <Menu />
    <div class="m-6">
      <TitlePage title="staff" subtitle="Controle de funcionários." />

      <div class="flex flex-col gap-4 md:flex-wrap md:flex-row">
        <Card color="green" :title="faltas" grafic="grafic" />

        <Card color="green" title="Quantidade de funcionários faltosos:" subtitle="2" />
      </div>

      <div class="flex flex-col gap-4 mt-4 md:flex-wrap md:flex-row">
        <Card color="green" title="Organize seu dia:" :subtitle="hours" />

        <Card color="green" title="Setor de atuação:" :subtitle="setor" />

        <Card color="green" title="Número de atividades semanais:" :subtitle="ativades" />
      </div>
    </div>
  </div>
</template>

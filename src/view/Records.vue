<script setup lang="ts">
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
  <div class="flex">
    <Menu />
    <div class="m-8">
      <TitlePage title="Records" subtitle="Página de registros" />
   
      <div class="flex flex-col gap-4 md:flex-wrap md:flex-row">
        <Card color="red" title="Organize seu dia:" :subtitle="hours" />

        <Card
          color="red"
          title="Setor de atuação:"
          :subtitle="setor"
        />

        <Card
          color="red"
          title="Atividades para hoje:"
          :subtitle="ativades"
        />
      </div>
   </div>
  </div>
</template>

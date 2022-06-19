<script setup lang="ts">
import Menu from "../layout/Menu.vue";
import TitlePage from "../components/TitlePage.vue";
import Card from "../components/Card.vue";
import { ref } from "vue";

const faltas = ref<string>("quadro Faltas semanais ");
</script>

<template>
  <div class="flex">
    <Menu />
    <div class="m-8">
      <TitlePage title="staff" subtitle="Controle de funcionários." />

       <div class="flex flex-col gap-4 md:flex-wrap md:flex-row">

        <Card
          color="green"
          :title="faltas"
          grafic="grafic"
        />

         <Card
          color="green"
          title="Quantidade de funcionários faltosos:"
          subtitle="2"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Menu from "../layout/Menu.vue";
import TitlePage from "../components/TitlePage.vue";
import CardTalks from "../components/CardTalks.vue";
</script>

<template>
  <div class="flex">
    <Menu />
    <div class="m-8">
      <TitlePage title="talks" subtitle="Converse com seus colaboradores." />
      
      <CardTalks color="blue" title="talks:" />
    </div>
  </div>
</template>

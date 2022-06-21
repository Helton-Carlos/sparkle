<script setup lang="ts">
import Main from "../layout/Main.vue";
import Menu from "../layout/Menu.vue";
import TitlePage from "../components/TitlePage.vue";
import CardTalks from "../components/CardTalks.vue";
</script>

<template>
  <Main />
  <div class="flex">
    <Menu />
    <div class="m-6">
      <TitlePage title="talks" subtitle="Converse com seus colaboradores." />

      <CardTalks color="blue" title="talks:" />
    </div>
  </div>
</template>

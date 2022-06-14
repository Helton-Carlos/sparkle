<script setup lang="ts">
import Menu from "../layout/Menu.vue";
import TitlePage from "../components/TitlePage.vue";
</script>

<template>
  <div class="flex">
    <Menu />
    <div class="m-8">
      <TitlePage
        title="Configurações"
        subtitle="Deixe seu sistema com seu estilo."
      />
    </div>
  </div>
</template>

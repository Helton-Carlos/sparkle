<script setup lang="ts">
import Main from "../layout/Main.vue";
import Menu from "../layout/Menu.vue";
import TitlePage from "../components/TitlePage.vue";
</script>

<template>
  <Main />
  <div class="flex">
    <Menu />
    <div class="m-6">
      <TitlePage
        title="Configurações"
        subtitle="Deixe seu sistema com seu estilo."
      />
    </div>
  </div>
</template>

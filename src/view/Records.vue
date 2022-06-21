<script setup lang="ts">
import Main from "../layout/Main.vue";
import Menu from "../layout/Menu.vue";
import TitlePage from "../components/TitlePage.vue";
import Card from "../components/Card.vue";
import { ref } from "vue";
</script>

<template>
  <Main />
  <div class="flex">
    <Menu />
    <div class="m-6">
      <TitlePage title="Records" subtitle="Página de registros" />

      <div class="flex flex-col gap-4 md:flex-wrap md:flex-row">
        <Card color="red" title="Cadastrar coloboradores:" input="input" />
      </div>
    </div>
  </div>
</template>

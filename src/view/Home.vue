<script setup lang="ts">
import Menu from "../layout/Menu.vue";
import TitlePage from '../components/TitlePage.vue'
import Card from '../components/Card.vue'
</script>

<template>
  <div class="flex">
    <Menu />
    <div>
      <TitlePage title="Home" subtitle="Seja bem vindo a o Sparkle!" />

      <Card title="valor 1" subtitle="subtitle 1" />
    </div>
  </div>
</template>

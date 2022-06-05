<script setup lang="ts">
import Menu from "../layout/Menu.vue";
import TitlePage from '../components/TitlePage.vue'
</script>

<template>
  <div class="flex">
    <Menu />
      <div>
      <TitlePage title="Records" subtitle="subRecords" />
    </div>
  </div>
</template>

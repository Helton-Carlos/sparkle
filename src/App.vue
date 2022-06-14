<script setup lang="ts">
</script>

<template >
 <transition mode="out-in">
  <router-view></router-view>
 </transition>
</template>

<style>
.v-enter,
.v-leave-to {
  transform: translate3d(-20px, 0, 0);
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}

.router-link-exact-active {
  color: blue;
  font-weight: bold;
}

body{
  margin:0;
  padding:0;
  background-color: #f1f1f1;
}
</style>

<script setup lang="ts">
import { ref } from "vue";

function shipmmentLogin() {
  alert("hey")
}
</script>

<template>
  <div class="flex justify-between flex-row items-center m-10">

    <form @submit="shipmmentLogin" class="flex flex-col">
      <label>E-mail</label>
      <input type="email" name="email" id="email">

      <label>Password</label>
      <input type="email" name="email" id="email">

      <input type="submit" value="Login" />

      <button :disabled="true">Ainda não tenho conta</button>
    </form>

    <img src="../assets/Login-talk.svg" alt="login-img" class="w-[450px]" />

  </div>
</template>

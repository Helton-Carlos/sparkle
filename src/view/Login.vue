<script setup lang="ts">
import { ref } from 'vue';

const email = ref<string>("")
const password = ref<string>("")

function shipmmentLogin() {
  alert(email.value + ' ' + password.value)
}
</script>

<template>
  <div class="flex items-center justify-between mx-10 mt-20 md:mx-36 md:mt-20">
    <form @submit.prevent="shipmmentLogin()" class="flex flex-col w-[400px]">
      <div>
        <h1 class="mb-4 text-3xl font-semibold">Login</h1>
      </div>
      
      <label>E-mail:</label>
      <input type="email" name="email" id="email" class="px-2 py-2 mt-1 mb-4 rounded-md focus:ring-fuchsia-300"
        placeholder="josesantos@gmail.com" v-model.trim="email">

      <label>Password:</label>
      <input type="password" name="password" id="password" class="px-2 py-2 mt-1 mb-4 rounded-md focus:ring-indigo-500 "
        placeholder="*********" v-model.trim="password">

      <input type="submit" value="Login" class="px-2 py-2 mb-4 text-white bg-indigo-700 rounded-md shadow hover:bg-indigo-900" />

      <router-link to="/" class="text-center text-blue-700 hover:text-blue-200">Ainda não tenho conta?</router-link>
    </form>

    <div class="hidden md:block">
      <img src="../assets/Login-talk.svg" alt="login-img" class="w-[450px] h-[450px]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const email = ref<string>("")
const password = ref<string>("")

const router = useRouter();

function shipmmentLogin() {
  console.log(email +' '+ password)
  router.push({ name: 'Home' })
}
</script>

<template>
  <div class="w-full">

    <div class="flex flex-row items-center justify-between">

      <form @submit="shipmmentLogin" class="flex flex-col w-[350px]">
        <label>E-mail</label>
        <input type="email" name="email" id="email" class="px-2 py-1 mb-4 focus:border-indigo-500"
          placeholder="josesantos@gmail.com" v-model="email">

        <label>Password</label>
        <input type="password" name="password" id="password" class="px-2 py-1 mb-4 focus:border-indigo-500"
          placeholder="*********" v-model="password">

        <input type="submit" value="Login" class="px-2 py-1 mb-4 text-white bg-indigo-700" />

        <router-link to="/" class="text-center text-blue-700 hover:text-blue-200">Ainda não tenho conta?</router-link>
      </form>

      <div>
        <img src="../assets/Login-talk.svg" alt="login-img" class="w-[450px] h-[450px]" />
      </div>

    </div>

  </div>
</template>

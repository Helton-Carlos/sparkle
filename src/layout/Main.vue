<script setup lang="ts">

function onMenu():void{
  alert("hey")
}
</script>

<template>
  <div class="bg-white w-full h-[60px] border-b-2 z-50">
    <div class="flex justify-between mx-7 md:mx-10">
      <div class="flex pt-4 text-indigo-500">
        <div class="mt-1 mr-3 md:hidden" @click="onMenu">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 hover:bg-gray-200 hover:rounded-xl hover:p-1" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd" />
          </svg>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>

        <h1 class="font-extrabold">Sparkle</h1>
      </div>

      <div class="mt-3">
        <img class="w-8 h-8 rounded-full shrink-0"
          src="https://assets.imgix.net/hp/snowshoe.jpg?auto=compress&w=900&h=600&fit=crop" alt="avatar" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>

<template>
  <div class="bg-white w-[305px] h-screen border-2 shadow-lg">
    <div>
      <h1>Sparkle</h1>
    </div>
    <div>
      <router-link to="/">
        <span>icon</span>
        <p>Main</p>
      </router-link>
      <router-link to="/staff">
        <span>icon</span>
        <p>Staff</p>
      </router-link>
      <router-link to="/records">
        <span>icon</span>
        <p>Records</p>
      </router-link>
      <router-link to="/task">
        <span>icon</span>
        <p>Task</p>
      </router-link>
      <router-link to="/settings">
        <span>icon</span>
        <p>Settings</p>
      </router-link>
    </div>
  </div>
</template>
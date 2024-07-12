<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div class="app">
    <AContainer>
      <RouterView />
    </AContainer>
  </div>
  <AToasts />
</template>

<style scoped>
.app {
  .a-container {
    width: 100%;
    height: 100dvh;
  }
}
</style>

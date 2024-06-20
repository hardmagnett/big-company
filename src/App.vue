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
  display: flex;
  width: 100%;
  flex-flow: row nowrap;

  height: 100%;
  position: absolute;

  .a-container {
    flex: 1 1 auto;
    overflow-y: auto; /*Не помню зачем это. Хорошо-бы узнать*/
  }
}
</style>

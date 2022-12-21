<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MainMenu from '@/components/omni-present/layout/MainMenu/MainMenu.vue';

</script>

<template>
  <img alt="Логотип" src="@/assets/app/images/logo.svg" width="24" height="24" />

  <MainMenu/>

  <div class="container">
    <h1>Какой-то заголовок</h1>
    <RouterView />
  </div>


</template>

<style scoped lang="scss">
.container {
  // временный хардкод.
  margin-left: 300px;
}
</style>

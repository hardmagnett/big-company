<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MainMenu from '@/components/layout/MainMenu/MainMenu.vue';

</script>

<template>
  <img alt="Логотип" src="@/assets/images/logo.svg" width="24" height="24" />

  <RouterLink :to="{name: 'dashboard'}">Панель управления</RouterLink>
  <RouterLink :to="{name: 'employees'}">Сотрудники</RouterLink>
  <RouterLink :to="{name: 'departments'}">Отделы</RouterLink>

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

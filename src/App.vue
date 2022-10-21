<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <img alt="Логотип" src="@/assets/images/logo.svg" width="24" height="24" />

  <RouterLink :to="{name: 'dashboard'}">Панель управления</RouterLink>
  <RouterLink :to="{name: 'employees'}">Сотрудники</RouterLink>
  <RouterLink :to="{name: 'departments'}">Отделы</RouterLink>

  <RouterView />
</template>

<style scoped>

</style>

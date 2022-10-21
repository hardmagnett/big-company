<template>
  <div class="main-menu">
    <MainMenuItem />
    <MainMenuItem />
    <MainMenuItem />
  </div>
</template>

<script setup lang="ts">
import MainMenuItem from '@/components/layout/MainMenu/MainMenuItem.vue';

</script>

<style scoped lang="scss">
// Обычно позиционирование компонента делается снаружи.
// Но т.к. это меню должно быть всегда в одном и том-же месте, то оно спозиционировано изнутри.
.main-menu {
  padding: 16px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 200px;
  outline: 1px solid darkred;
}
</style>

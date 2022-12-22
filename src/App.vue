<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MainMenu from '@/components/omni-present/layout/MainMenu/MainMenu.vue';
import HeaderMenu from "@/components/omni-present/layout/HeaderMenu/HeaderMenu.vue";
// export default {
  // components: {HeaderMenu}
// }


</script>

<template>
  <HeaderMenu/>

  <MainMenu/>

  <!--<div class="container">-->
  <container>
    <h1>Какой-то заголовок</h1>
    <RouterView />
  </container>
  <!--</div>-->


</template>

<style scoped lang="scss">
.container {
  // временный хардкод.
  margin-left: 300px;
}
</style>

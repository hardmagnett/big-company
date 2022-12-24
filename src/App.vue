<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MainMenu from '@/a-library/components/layout/MainMenu/MainMenu.vue';
import HeaderMenu from "@/a-library/components//layout/HeaderMenu/HeaderMenu.vue";
// export default {
  // components: {HeaderMenu}
// }


</script>

<template>
  <HeaderMenu/>

  <MainMenu/>

  <container>
    <RouterView />
  </container>


</template>

<style scoped lang="scss">
.container {
  // временный хардкод.
  margin-left: 300px;
}
</style>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AHamburger from "@/a-library/components/layout/AHamburger/AHamburger.vue";

</script>

<template>
  <div class="app">
    <AHamburger />



    <AMainMenu/>

    <AContainer>
      <!--<template v-slot:header>-->
      <!--  <APageHeader>Структура кампании</APageHeader>-->
      <!--</template>-->
      <RouterView />
    </AContainer>
  </div>

</template>

<style scoped lang="scss">
.a-hamburger {
  position: absolute;
  top: 130px;
  left: 130px;
  z-index: 15;
}
.app {
  display: flex;
  width: 100%;
  flex-flow: row nowrap;

  height: 100%;
  position: absolute;
  .main-menu {
    //outline: 1px solid purple;
    flex: 0 0 auto;
  }
  .a-container {
    //outline: 1px solid orange;
    flex: 1 1 auto;
    overflow-y: auto;
  }
}

</style>

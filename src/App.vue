<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AHamburger from "@/a-library/components/layout/AHamburger/AHamburger.vue";

</script>

<template>
  <AHamburger />
  <AMainMenu/>

  <AContainer>
    <RouterView />
  </AContainer>
</template>

<style scoped lang="scss">
.a-hamburger {
  position: absolute;
  top: 130px;
  left: 130px;
  z-index: 300000;
}
.container {

}
</style>

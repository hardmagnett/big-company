<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <!--<AHeader/>-->

  <AMainMenu/>

  <AContainer>
    <RouterView />
  </AContainer>
</template>

<style scoped lang="scss">
.container {
}
</style>

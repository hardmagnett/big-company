<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <AMainMenu/>

  <AContainer>
    <RouterView />
  </AContainer>
</template>

<style scoped lang="scss">
.container {
}
</style>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template class="foo">
  <img alt="Vue logo" class="logo" src="@/assets/images/logo.svg" width="24" height="24" />

  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>

  <RouterView />
</template>

<style scoped>

</style>

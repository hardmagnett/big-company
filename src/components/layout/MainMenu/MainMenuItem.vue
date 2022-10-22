<script setup lang="ts">

import type {MenuItem} from '@/components/layout/MainMenu/types';

const props = defineProps<{
  menuItem: MenuItem
}>()

</script>

<template>
  <div class="main-menu-item">

    <RouterLink v-if="menuItem.route" :to="{name: menuItem.route.to}">{{menuItem.title}}</RouterLink>
    <a v-if="!menuItem.route">{{menuItem.title}}</a>

    <template v-if="menuItem.children">
      <MainMenuItem
          v-for="childMenuItem in menuItem.children"
          :key="childMenuItem.id"
          :menuItem="childMenuItem"
      />
    </template>
  </div>
</template>

<style scoped lang="scss">
.main-menu-item {
  > .main-menu-item {
    margin-left: 16px;
  }
}
</style>

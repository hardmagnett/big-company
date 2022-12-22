<script setup lang="ts">

import type {MenuItem} from '@/components/omni-present/layout/MainMenu/types';

const props = defineProps<{
  menuItem: MenuItem
}>()

</script>

<template>
  <div class="main-menu-item">

    <RouterLink
        v-if="menuItem.route"
        :to="{name: menuItem.route.to}"
        active-class="header-menu__link--active"
        exact
    >
      {{menuItem.title}}
    </RouterLink>
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
  --accentedColor: var(--clrBgBlueAccent);
  .header-menu__link--active {
    background-color: var(--accentedColor)
  }
  a {
    padding-left: 16px;
    padding-right: 16px;
    //outline: 1px solid darkred;
    display: block;
    --height: calc(var(--gap) * 2);
    height: var(--height);
    line-height: var(--height);
    color: var(--clrFontBlueDark);
    text-decoration: none;
    transition: background-color var(--timeShort);
    //font-size: var(--fsSmall);
    font-size: var(--fsTiny);
    font-weight: var(--fontBold);

    &:hover {
      background-color: var(--accentedColor)
    }
  }

  > .main-menu-item {
    margin-left: 16px;
    //color: clrFont(light, main);
  }
  &:hover {
    a {

    }

  }
}
</style>

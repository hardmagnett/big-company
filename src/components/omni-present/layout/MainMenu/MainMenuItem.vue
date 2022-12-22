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
  //height: calc(var(--gap) * 2);
  //display: flex;
  //align-items: center;
  //outline: 1px solid darkred;
  --accentedColor: var(--clrBgBlueAccent);
  .header-menu__link--active {
    background-color: var(--accentedColor)
  }
  a {
    display: block;
    height: calc(var(--gap) * 2);
    line-height: calc(var(--gap) * 2);
    //color: var(--clrFontBlueLight);
    color: var(--clrFontBlueDark);
    text-decoration: none;
    transition: background-color var(--timeShort);

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

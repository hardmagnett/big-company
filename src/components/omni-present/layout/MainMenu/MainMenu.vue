<script setup lang="ts">
import MainMenuItem from '@/components/omni-present/layout/MainMenu/MainMenuItem.vue';

import type {MenuItem} from '@/components/omni-present/layout/MainMenu/types';

let i = 0
const menuItems = [
  {
    id: i++,
    title: 'Панель управления',
    route: {
      to: 'dashboard'
    },
  } as MenuItem ,
  {
    id: i++,
    title: 'Сотрудники',
    route: {
      to: 'employees'
    },
  } as MenuItem ,
  {
    id: i++,
    title: 'Отделы',
    route: {
      to: 'departments'
    },
  } as MenuItem ,
  {
    id: i++,
    title: 'Компоненты',
    children: [
      {
        id: i++,
        title: 'Заголовки',
        route: {
          to: 'headers'
        },
      } as MenuItem ,
      {
        id: i++,
        title: 'Кнопки',
        route: {
          to: 'buttons'
        },
      } as MenuItem ,
      {
        id: i++,
        title: 'Элементы форм',
        route: {
          to: 'inputs'
        },
      } as MenuItem
    ]
  }
]

</script>

<template>
  <div class="main-menu">
    <MainMenuItem
        v-for="menuItem in menuItems"
        :key="menuItem.id"
        :menuItem="menuItem"
    />
  </div>
</template>

<style scoped lang="scss">
// Обычно позиционирование компонента делается снаружи.
// Но т.к. это меню должно быть всегда в одном и том-же месте, то оно спозиционировано изнутри.
.main-menu {
  //padding: 16px;
  padding-top: calc(var(--gap) / 2);
  padding-bottom: calc(var(--gap) / 2);
  position: fixed;
  left: 0;
  top: var(--headerHeight);
  bottom: 0;
  width: 200px;
  background-color: var(--clrBgBlueSmall);
}
</style>

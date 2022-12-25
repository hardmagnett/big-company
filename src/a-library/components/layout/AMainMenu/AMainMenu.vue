<script setup lang="ts">
import AMainMenuItem from '@/a-library/components/layout/AMainMenu/AMainMenuItem.vue';

import type {MenuItem} from '@/a-library/components/layout/AMainMenu/types';

let i = 0
const menuItems = [
  {
    id: i++,
    title: 'Структура компании',
    icon: 'mdi-family-tree',
    route: {
      to: 'departments'
    },
  } as MenuItem ,
  {
    id: i++,
    title: 'Сотрудники',
    icon: 'mdi-account-group',
    route: {
      to: 'employees'
    },
  } as MenuItem ,
  {
    id: i++,
    title: 'Компоненты',
    icon: 'mdi-vuejs',
    children: [
      {
        id: i++,
        title: 'Заголовки',
        icon: 'mdi-format-size',
        route: {
          to: 'headers'
        },
      } as MenuItem ,
      {
        id: i++,
        title: 'Кнопки',
        icon: 'mdi-button-cursor',
        route: {
          to: 'buttons'
        },
      } as MenuItem ,
      {
        id: i++,
        title: 'Элементы форм',
        icon: 'mdi-form-textbox',
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
    <AMainMenuItem
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
  //margin-left: var(--leftMenuWidth);
  width: var(--leftMenuWidth);
  background-color: var(--clrBgBlueSmall);
  border-right: 1px solid var(--clrBorderBlueLighter)
}
</style>

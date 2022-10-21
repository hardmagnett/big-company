<script setup lang="ts">
import MainMenuItem from '@/components/layout/MainMenu/MainMenuItem.vue';

let i = 0
const menuItems = [
  {
    id: i++,
    title: 'Панель управления',
    route: {
      to: 'dashboard'
    },
  },
  {
    id: i++,
    title: 'Сотрудники',
    route: {
      to: 'employees'
    },
  },
  {
    id: i++,
    title: 'Отделы',
    route: {
      to: 'departments'
    },
  },
  {
    id: i++,
    title: 'Заголовки',
    route: {
      to: 'headers'
    },
    children: [
      {
        id: i++,
        title: 'Кнопки',
        route: {
          to: 'buttons'
        },
      },
      {
        id: i++,
        title: 'Элементы форм',
        route: {
          to: 'inputs'
        },
      }
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
  padding: 16px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 200px;
  outline: 1px solid darkred;
}
</style>

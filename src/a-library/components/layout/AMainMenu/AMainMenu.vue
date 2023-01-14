<script setup lang="ts">

import {ref, computed} from 'vue';
import { storeToRefs } from 'pinia'
import { useResponsiveStore } from '@/a-library/stores/responsive.js';


import localStorageService from '@/a-library/helpers/DOM/localStorageService';
import getCSSVariable from '@/a-library/helpers/DOM/getCSSVariable';

import AMainMenuItem from '@/a-library/components/layout/AMainMenu/AMainMenuItem.vue';
import type {MenuItem} from '@/a-library/components/layout/AMainMenu/types';



const responsiveStore = useResponsiveStore()
const { isEqualOrMoreThan } = storeToRefs(responsiveStore)

let isBig = computed(()=>{
  return isEqualOrMoreThan.value('--bpMd')
})

let isCollapsedOnBigScreenFromLocalStorage = localStorageService.getItem('isMenuCollapsedOnBigScreen')
let isCollapsedOnBigScreenToSet = isCollapsedOnBigScreenFromLocalStorage === null ? false : isCollapsedOnBigScreenFromLocalStorage
let isCollapsedOnBigScreen = ref(isCollapsedOnBigScreenToSet)

let isCollapsedOnSmallScreenFromLocalStorage = localStorageService.getItem('isMenuCollapsedOnSmallScreen')
let isCollapsedOnSmallScreenToSet = isCollapsedOnSmallScreenFromLocalStorage === null ? true : isCollapsedOnSmallScreenFromLocalStorage
let isCollapsedOnSmallScreen = ref(isCollapsedOnSmallScreenToSet)

let isCollapsed = computed(()=>{
  let isCollapsedByBigScreen = isBig.value && isCollapsedOnBigScreen.value
  let isCollapsedBySmallScreen = !isBig.value && isCollapsedOnSmallScreen.value
  return isCollapsedByBigScreen || isCollapsedBySmallScreen
})

let classes = computed(()=>{
  return {
    'main-menu--is-collapsed': isCollapsed.value,
    // todo:: вероятно эти 2 стиля окажутся не нужны
    'main-menu--is-collapsed-on-big-screen': isCollapsedOnBigScreen.value,
    'main-menu--is-collapsed-on-small-screen': isCollapsedOnSmallScreen.value,
  }
})

function toggleMenuCollapse(){

  if (isBig.value) {
    isCollapsedOnBigScreen.value = !isCollapsedOnBigScreen.value
    localStorageService.setItem('isMenuCollapsedOnBigScreen', isCollapsedOnBigScreen.value)
  } else {
    isCollapsedOnSmallScreen.value = !isCollapsedOnSmallScreen.value
    localStorageService.setItem('isMenuCollapsedOnSmallScreen', isCollapsedOnSmallScreen.value)
  }
}


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
  <div
    class="main-menu"
    :class="classes"
  >
    <AHeader
        :isMainMenuCollapsed="isCollapsed"

    />
    <!--{{isBig}}-->
    <AMainMenuItem
        v-for="menuItem in menuItems"
        :key="menuItem.id"
        :menuItem="menuItem"
        :isMainMenuCollapsed="isCollapsed"
    />

    <div
        class="main-menu__width-toggler"
        @click="toggleMenuCollapse"
    >
      <AIcon
          icon="mdi-chevron-left" size="giant"
          :rotate180="isCollapsed"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
// Обычно позиционирование компонента делается снаружи.
// Но т.к. это меню должно быть всегда в одном и том-же месте, то оно спозиционировано изнутри.
.main-menu {
  //padding-top: calc(var(--gap) / 2);
  padding-bottom: calc(var(--gap) / 2);
  position: fixed;
  left: 0;
  //top: var(--headerHeight);
  top: 0;
  bottom: 0;
  width: var(--leftMenuWidthExpanded);
  background-color: var(--clrBgBlueSmall);
  border-right: 1px solid var(--clrBorderBlueLighter);
  transition: width var(--timeShort);

  overflow-x:hidden;

  .a-header {
    margin-bottom: calc(var(--gap) / 2);
  }

  // todo:: переделать. Это не предусматривает скролл от меню
  .main-menu__width-toggler {

    //outline: 1px solid darkred;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: calc(var(--gap) * 2);
    border-top: 1px solid var(--clrBorderBlueLighter);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      background-color: var(--clrBgBlueAccent);
    }
  }

  &.main-menu--is-collapsed {
    width: var(--leftMenuWidthCollapsed);
  }
}
</style>

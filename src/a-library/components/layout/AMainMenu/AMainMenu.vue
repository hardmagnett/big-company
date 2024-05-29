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
  return isEqualOrMoreThan.value('--bp-md')
})


let isCollapsedOnBigScreen = ref(localStorageService.getItem('isMenuCollapsedOnBigScreen', false))
let isCollapsedOnSmallScreen = ref(localStorageService.getItem('isMenuCollapsedOnSmallScreen', true))

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
    title: 'Отделы',
    icon: 'mdi-family-tree',
    route: {
      to: 'departments'
    },
  } as MenuItem ,

  // todo:: удалить это, когда закончишь с высотой меню.
  { id: i++, title: 'Сотрудники', icon: 'mdi-account-group', route: { to: 'employees'},} as MenuItem ,
  { id: i++, title: 'Сотрудники', icon: 'mdi-account-group', route: { to: 'employees'},} as MenuItem ,
  { id: i++, title: 'Сотрудники', icon: 'mdi-account-group', route: { to: 'employees'},} as MenuItem ,
  { id: i++, title: 'Сотрудники', icon: 'mdi-account-group', route: { to: 'employees'},} as MenuItem ,
  { id: i++, title: 'Сотрудники', icon: 'mdi-account-group', route: { to: 'employees'},} as MenuItem ,
  { id: i++, title: 'Сотрудники', icon: 'mdi-account-group', route: { to: 'employees'},} as MenuItem ,
  { id: i++, title: 'Сотрудники', icon: 'mdi-account-group', route: { to: 'employees'},} as MenuItem ,
  { id: i++, title: 'Сотрудники', icon: 'mdi-account-group', route: { to: 'employees'},} as MenuItem ,
  { id: i++, title: 'Сотрудники', icon: 'mdi-account-group', route: { to: 'employees'},} as MenuItem ,
  { id: i++, title: 'Сотрудники', icon: 'mdi-account-group', route: { to: 'employees'},} as MenuItem ,
  { id: i++, title: 'Сотрудники', icon: 'mdi-account-group', route: { to: 'employees'},} as MenuItem ,
  { id: i++, title: 'Сотрудники', icon: 'mdi-account-group', route: { to: 'employees'},} as MenuItem ,
  { id: i++, title: 'Сотрудники', icon: 'mdi-account-group', route: { to: 'employees'},} as MenuItem ,
  { id: i++, title: 'Сотрудники', icon: 'mdi-account-group', route: { to: 'employees'},} as MenuItem ,
  { id: i++, title: 'Сотрудники', icon: 'mdi-account-group', route: { to: 'employees'},} as MenuItem ,
  { id: i++, title: 'Сотрудники', icon: 'mdi-account-group', route: { to: 'employees'},} as MenuItem ,
  // { id: i++, title: 'Сотрудники', icon: 'mdi-account-group', route: { to: 'employees'},} as MenuItem ,
  // { id: i++, title: 'Сотрудники', icon: 'mdi-account-group', route: { to: 'employees'},} as MenuItem ,
  // { id: i++, title: 'Сотрудники', icon: 'mdi-account-group', route: { to: 'employees'},} as MenuItem ,
  // { id: i++, title: 'Сотрудники', icon: 'mdi-account-group', route: { to: 'employees'},} as MenuItem ,
  // { id: i++, title: 'Сотрудники', icon: 'mdi-account-group', route: { to: 'employees'},} as MenuItem ,
  // { id: i++, title: 'Сотрудники', icon: 'mdi-account-group', route: { to: 'employees'},} as MenuItem ,
  // { id: i++, title: 'Сотрудники', icon: 'mdi-account-group', route: { to: 'employees'},} as MenuItem ,
  // { id: i++, title: 'Сотрудники', icon: 'mdi-account-group', route: { to: 'employees'},} as MenuItem ,
  // { id: i++, title: 'Сотрудники', icon: 'mdi-account-group', route: { to: 'employees'},} as MenuItem ,

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
        logoUrl="/src/app/assets/images/logo.svg"
        textNearLogo="CRM"
    />
    <div class="main-menu__items mod--cool-scrollbar">
      <!--{{isBig}}-->
      <AMainMenuItem
          v-for="menuItem in menuItems"
          :key="menuItem.id"
          :menuItem="menuItem"
          :isMainMenuCollapsed="isCollapsed"
      />
    </div>


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

<style scoped>
/*Обычно позиционирование компонента делается снаружи.*/
/*Но т.к. это меню должно быть всегда в одном и том-же месте, то оно спозиционировано изнутри.*/
.main-menu {
  position: relative;
  /*padding-top: calc(var(--gap) / 2);*/
  /*padding-bottom: calc(var(--gap) / 2);*/
  /*position: fixed;*/
  left: 0;
  /*top: var(--headerHeight);*/
  top: 0;
  bottom: 0;
  width: var(--left-menu-width-expanded);
  background-color: var(--clr-bg-blue-small);
  border-right: 1px solid var(--clr-border-blue-lighter);
  transition: width var(--time-short);

  overflow-x:hidden;

  display: flex;
  flex-flow: column nowrap;

  .a-header {
    /*margin-bottom: calc(var(--gap) / 2);*/
    flex: 0 0 auto;
    border-bottom: 1px solid var(--clr-border-blue-darker);
  }

  .main-menu__items {
    /*outline: 1px solid darkred;*/
    /*padding-top: calc(var(--gap) / 2);*/
    flex: 1 1 auto;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .main-menu__width-toggler {

    flex: 0 0 auto;

    /*outline: 1px solid darkred;*/
    /*position: absolute;*/
    /*bottom: 0;*/
    /*left: 0;*/
    /*right: 0;*/
    height: calc(var(--gap) * 2);
    border-top: 1px solid var(--clr-border-blue-lighter);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      background-color: var(--clr-bg-blue-accent);
    }
  }

  &.main-menu--is-collapsed {
    width: var(--left-menu-width-collapsed);
  }
}
</style>

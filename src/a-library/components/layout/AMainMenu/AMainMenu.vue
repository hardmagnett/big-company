<script setup lang="ts">
import AMainMenuItem from '@/a-library/components/layout/AMainMenu/AMainMenuItem.vue';

import type {MenuItem} from '@/a-library/components/layout/AMainMenu/types';
import getCSSVariable from '@/a-library/helpers/DOM/getCSSVariable';


import {ref, computed} from 'vue';

// todo:: вынести это куда-то в pinia start
// todo:: сделать это не только для isBig, а для любого брекпоинта
let documentWidth = ref(document.documentElement.clientWidth)
window.addEventListener('resize', ()=>{
  // console.log('here----------------------------------')
  let newVal = document.documentElement.clientWidth
  // console.log(newVal); console.log('^...newVal:')
  documentWidth.value = newVal
  // documentWidth.value = newVal
  // console.log(documentWidth); console.log('^...documentWidth:')
  // console.log(documentWidth.value); console.log('^...documentWidth.value:')
});

let isBig = computed(()=>{
  let bigBp = getCSSVariable('--bpMd');
  let isBig = documentWidth.value >= bigBp
  return isBig
})

// todo:: вынести это куда-то в pinia end

// todo:: эту штуку можно хранить в localstorage.
// И вообще можно сделать некую свою обертку с названием localUserSettings
let isCollapsedOnBigScreen = ref(false)
let isCollapsedOnSmallScreen = ref(true)

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
  } else {
    isCollapsedOnSmallScreen.value = !isCollapsedOnSmallScreen.value
  }
  // console.log(documentWidth); console.log('^...documentWidth:')
  // console.log('toggleMenuCollapse')
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

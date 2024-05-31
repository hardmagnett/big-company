<script setup lang="ts">
/**
 * Меню предусматривает лишь 1 уровень вложенности (У элемента может быть лишь 1 уровень потомков).
 * Делать глубже не имеет смысла:
 * - Это не помещается в экраны сматрфонов уже на 3-м уровне.
 * - Для 2-х уровней
 *   - либо будет пестрить от всех цветных подсветок, подсказывающих какой уровень открыт,
 *   — либо без подсветок будет непонятно какой уровень открыт.
 * - Это неудобно с точки зрения UX - пользователь путается.
 *   Лучше на более вложенные элементы делать ссылки уже непосредственно на страницах.
 *
 * Я не встречал подобных боковых меню, у которых было-бы 2 и более уровней вложенности,
 * да таких, чтобы были удобными. В Vuetify всего 2 уровня. В SilverStripe всего 1 уровень.
 */

import {ref, computed} from 'vue';
import { storeToRefs } from 'pinia'
import { useResponsiveStore } from '@/a-library/stores/responsive.js';


import localStorageService from '@/a-library/helpers/DOM/localStorageService';
import getCSSVariable from '@/a-library/helpers/DOM/getCSSVariable';

import AMainMenuItem from '@/a-library/components/layout/AMainMenu/AMainMenuItem.vue';
import type {MenuItem} from '@/a-library/components/layout/AMainMenu/types';

const emit = defineEmits(['toggleMenuCollapse', 'clickOnRouterLink'])

export interface Props {
  isCollapsedOnBigScreen: boolean,
  isBig: boolean
}
const props = withDefaults(defineProps<Props>(), {})

const responsiveStore = useResponsiveStore()
const { isMdOrMore } = storeToRefs(responsiveStore)

// Возможно выпилить отсюда и перенести в AContainer.
// А здесь принимать готовое значение.
let isCollapsed = computed(()=>{
  let isCollapsedByBigScreen = props.isBig && props.isCollapsedOnBigScreen
  return isCollapsedByBigScreen
})

let classes = computed(()=>{
  return {
    'a-main-menu--is-collapsed': isCollapsed.value,
  }
})

function toggleMenuCollapse(){
  emit('toggleMenuCollapse')
}


let i = 0
const menuItems = [
  {
    id: i++,
    title: 'Задачи',
    icon: 'mdi-view-dashboard-variant',
    // icon: 'mdi-view-dashboard-variant-outline',
    route: {
      to: 'tasks'
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
      } as MenuItem,
      {
        id: i++,
        title: 'Сетка',
        icon: 'mdi-view-grid',
        route: {
          to: 'column-grid'
        },
      } as MenuItem,
      {
        id: i++,
        title: 'Блоки',
        icon: 'mdi-square',
        // icon: 'mdi-square-outline',
        route: {
          to: 'blocks'
        },
      } as MenuItem,
    ]
  },
]

</script>

<template>
  <div
    class="a-main-menu"
    :class="classes"
  >
    <AHeader
        v-if="!isBig"
        :isOnSmallScreen="!isBig"
        :isMainMenuCollapsed="isCollapsed"
        logoUrl="/src/app/assets/images/logo.svg"
        textNearLogo="CRM"
    />
    <div class="a-main-menu__items mod--cool-scrollbar">
      <!--{{isBig}}-->
      <AMainMenuItem
          v-for="menuItem in menuItems"
          :key="menuItem.id"
          :menuItem="menuItem"
          :isMainMenuCollapsed="isCollapsed"
          :isMainMenuOnSmallScreen="!isBig"
          @click-on-router-link="emit('clickOnRouterLink')"
      />
    </div>


    <div
        v-if="isBig"
        class="a-main-menu__width-toggler"
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
.a-main-menu {
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
    margin-left: var(--left-menu-width-collapsed);
  }

  .a-main-menu__items {
    /*outline: 1px solid darkred;*/
    /*padding-top: calc(var(--gap) / 2);*/
    flex: 1 1 auto;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .a-main-menu__width-toggler {

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

  &.a-main-menu--is-collapsed {
    width: var(--left-menu-width-collapsed);
  }
}
</style>

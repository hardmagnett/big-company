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

import {computed, inject} from 'vue';

import AMainMenuItem from '@/a-library/components/layout/AMainMenu/AMainMenuItem.vue';
import {menuItemsInjectionKey} from '@/a-library/components/layout/AMainMenu/types';

const emit = defineEmits(['toggleMenuCollapse', 'clickOnRouterLink'])

export interface Props {
  isCollapsedOnBigScreen: boolean,
  isBig: boolean
}
const props = withDefaults(defineProps<Props>(), {})



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

const menuItems = inject(menuItemsInjectionKey)

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
  left: 0;
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
    flex: 0 0 auto;
    border-bottom: 1px solid var(--clr-border-blue-darker);
    margin-left: var(--left-menu-width-collapsed);
  }

  .a-main-menu__items {
    flex: 1 1 auto;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .a-main-menu__width-toggler {

    flex: 0 0 auto;

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

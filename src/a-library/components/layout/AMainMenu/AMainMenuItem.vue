<script setup lang="ts">

/**
 * Пункт меню может быть:
 * - Либо ссылкой на страницу. При клике происходит переход на другую страницу.
 * - Либо родителем для других пунктов меню. При клике происходит тоггл потомков.
 * Пункт меню не может быть ссылкой и родителем одновременно,
 * потому-что это был-бы UX-антипаттерн.
 *
 * Почему?
 *
 * Элементы меню большого размера (развернуты по горизонтали), управление мышью или пальцем:
 * -----------------------------------------------------------------------------------------
 * За тоггл и за переход на другую страницу должны отвечать разные участки пункта меню.
 * Такое ещё можно сделать, например чтобы по клику по тоггл-иконке тоглились потомки,
 * а при клике по тексту ссылки происходит переход.
 * Пользователь часто путается, но впринципе привыкнуть может.
 *
 * Элементы меню маленького размера (свернуты по горизонтали), управление пальцем:
 * -------------------------------------------------------------------------------
 * Можно повесить например переход на другую страницу на быстрый клик
 * а тоггл потомков либо на долгий клик, либо на двойной клик, либо на другой тач-жест.
 * Но это вообще неудобно и вводит путаницу.
 * А многие пользователь вообще не знают что бывают другие жесты кроме одиночного тыка пальцем.
 *
 * Элементы меню маленького размера (свернуты по горизонтали), управление мышью:
 * -----------------------------------------------------------------------------
 * Нужно этот маленький квадратик пункта меню делить на 2 участка,
 * при клике на каждый из них чтобы происходило одно из 2-х действий.
 * Ещё нужно умудриться чтобы это было аккуратно с точки зрения UI.
 * И из-за того что оба этих участка будут мелкими и будут находиться близко друг к другу -
 * пользователь точно будет промахиваться.
 *
 *
 * В итоге код был-бы сложным, а компонентом было-бы пользоваться весьма неудобно.
 *
 * Лучше проектировать меню так, чтобы не было пунктов меню с двойным назначением (разворот и переход).
 */

import { onMounted, computed, ref } from 'vue'
import { useRoute } from 'vue-router'
const emit = defineEmits(['clickOnRouterLink'])
const route = useRoute()

import type {MenuItem} from '@/a-library/components/layout/AMainMenu/types';

export interface Props {
  deepLevel?: number
  isMainMenuCollapsed: boolean
  isMainMenuOnSmallScreen?: boolean
  menuItem: MenuItem
}
const props = withDefaults(defineProps<Props>(), {
  deepLevel: 0,
})

const rootNode = ref(null)

let isClosed = ref(true)

const paddingLeft = computed(() => props.deepLevel * 16)
const classes = computed(() => {
  return {
    'main-menu-item--is-closed': props.menuItem.children && isClosed.value,
    'main-menu-item--main-menu-is-collapsed': props.isMainMenuCollapsed,
    'main-menu-item--main-menu-on-small-screen': props.isMainMenuOnSmallScreen,
    'main-menu-item--deep-level-1': props.deepLevel === 1
  }
})

const hasChildren = computed(()=>{
  return Boolean(props.menuItem.children?.length)
})
const children = computed(()=>{
  let result = Array.isArray(props.menuItem.children) ? props.menuItem.children: []
  return result
})
// const routeToName = computed(()=>{
//
// })

/**
 * Сейчас эта проверка реализованна для 1-го уровня вложенности,
 * Потому-что на проекте всего 1 уровень вложенности в меню.
 * Не вижу смысла делать 2 и более.
 * Если будет необходимость сделать 2 или более уровней вложенности в меню,
 * то можно будет обходить всех потомков рекурсивно.
 */
const isOneOfDescendantRouteActive = computed(()=>{
  let result = false
  if (!hasChildren.value) return result

  let currRouteName = route.name
  // for (let child of props.menuItem.children) {
  for (let child of children.value) {
    let menuRouteName = child.route?.to
    if (currRouteName === menuRouteName) {
      result = true
      break;
    }
  }
  return result
})

/**
 * Если-бы в меню было более 1-го пункта меню, содержащего потомков,
 * то можно было-бы реализовать такую фичу:
 * При открытии родителя закрываются все другие родители, не являющиеся родителем данного родителя.
 * Это было-бы удобно, чтобы в меню не было слишком много родителей распахнуто.
 * Но сейчас это ещё не нужно, поэтому пока-что пусть остается как есть.
 */
function toggleSubmenu(){
  isClosed.value = !isClosed.value
}

onMounted(() => {
  rootNode.value.style.setProperty(`--paddingByDeep`, `${paddingLeft.value}px`);
})

</script>

<template>
  <div
      class="main-menu-item"
      :class="classes"
      ref="rootNode"
  >
    <RouterLink
        class="main-menu-item__link main-menu-item__link--to-page"
        v-if="!hasChildren"
        :to="{name: menuItem.route?.to}"
        active-class="main-menu-item__link--active"
        exact
        @click="emit('clickOnRouterLink')"
    >
      <AIcon
        class="main-menu-item__menu-icon"
        :icon="menuItem.icon"
        size="giant"
      />
      <span class="main-menu-item__text mod--ellipsis-one-line">{{menuItem.title}}</span>
    </RouterLink>
    <a
      class="main-menu-item__link main-menu-item__link--to-children"
      :class="{'main-menu-item__link--descendant-active': isOneOfDescendantRouteActive}"
      v-if="hasChildren"
      @click="toggleSubmenu"
    >
      <AIcon
        class="main-menu-item__menu-icon"
        :icon="menuItem.icon"
        size="giant"
      />
      <span class="main-menu-item__text mod--ellipsis-one-line">{{menuItem.title}}</span>
      <span class="main-menu-item__spacer"></span>
      <AIcon
          class="main-menu-item__closing-indicator"
          v-if="hasChildren"
          icon="mdi-chevron-down"
          :rotate180="!isClosed"
          size="giant"
      />
    </a>

    <div class="main-menu-item__children" v-if="hasChildren">
      <AMainMenuItem
          v-for="childMenuItem in menuItem.children"
          :key="childMenuItem.id"
          :menuItem="childMenuItem"
          :deepLevel="deepLevel + 1"
          :isMainMenuCollapsed="isMainMenuCollapsed"
          :isMainMenuOnSmallScreen="isMainMenuOnSmallScreen"
          @click-on-router-link="emit('clickOnRouterLink')"
      />
    </div>
  </div>
</template>

<style scoped>
.main-menu-item {
  /*Изменяется JS-ом в зависимости от глубины.*/
  --paddingByDeep: 0;

  --mainMenuCollapseAnimationTime: var(--time-short);

  --accentedColorLess: var(--clr-bg-blue-accent);
  --accentedColor: var(--clr-fill-blue-small);

  width: var(--left-menu-width-expanded);

  > .main-menu-item__children {
    max-height: 1000px;
    overflow-y: hidden;
    transition: max-height var(--time-short) var(--transition-extra-easy-in);
  }

  .main-menu-item__link {
    --height: calc(var(--gap) * 2);

    cursor: pointer;
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    align-items: center;

    height: var(--height);
    line-height: var(--height);
    color: var(--clr-font-blue-darkest);
    text-decoration: none;
    transition: background-color var(--time-short), color var(--time-short);
    font-size: var(--font-size-tiny);
    font-weight: var(--font-weight-bold);

    /*before нужно исключительно чтобы дать отступ слева для вложенных элементов.*/
    &:before {
      display: inline;
      content: '';
      padding-left: var(--paddingByDeep);
      transition: padding-left var(--mainMenuCollapseAnimationTime);
    }

    /*Отодвигает следующие элементы, в частности индикатор открытости,*/
    /*максимально вправо.*/
    .main-menu-item__spacer {
      flex: 1 0 auto;
    }

    &.main-menu-item__link--to-page {
      &:hover {
        background-color: var(--accentedColorLess);
      }
    }

    &.main-menu-item__link--to-children {
      &:hover {
        background-color: var(--accentedColorLess);
      }
    }

    &.main-menu-item__link--active {
      background-color: var(--accentedColor);
      color: var(--clr-font-blue-light) !important;
      &:hover {
        background-color: var(--accentedColor);
        color: var(--clr-font-blue-light);
      }
    }
    &.main-menu-item__link--descendant-active {
      background-color: var(--accentedColorLess);
    }
    .main-menu-item__menu-icon {
      margin-right: var(--gap);
    }
  }

  .main-menu-item__text {
    opacity: 1;
    transition: opacity var(--mainMenuCollapseAnimationTime);
  }
  .main-menu-item__closing-indicator {
    opacity: 1;
    transition: opacity var(--mainMenuCollapseAnimationTime);
  }

  &.main-menu-item--is-closed {
    > .main-menu-item__children {
      max-height: 0;
      transition: max-height var(--time-short) var(--transition-extra-easy-out);
    }
  }

  &.main-menu-item--main-menu-is-collapsed {
    .main-menu-item__link {
      &:before {
        padding-left: 0;
      }
    }
    .main-menu-item__text {
      opacity: 0;
    }
    .main-menu-item__closing-indicator {
      opacity: 0;
    }
  }

  &.main-menu-item--main-menu-on-small-screen {
    width: 100%;
  }

  &.main-menu-item--deep-level-1 {
    background-color: var(--clr-bg-blue-smaller);
    .main-menu-item__link {
      color: var(--clr-font-blue-dark);
    }
  }
}
</style>

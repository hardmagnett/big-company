<script setup lang="ts">

import { onMounted, computed, ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const route = useRoute()

import type {MenuItem} from '@/a-library/components/layout/AMainMenu/types';
// import AIcon from "@/a-library/components/typo/AIcon/AIcon.vue";
// export default {
//   components: {AIcon}
// }

export interface Props {
  deepLevel?: number
  menuItem: MenuItem
}
const props = withDefaults(defineProps<Props>(), {
  deepLevel: 0,
  // labels: () => ['one', 'two']
})

const rootNode = ref(null)

const isClosed = ref(true)

const paddingLeft = computed(() => props.deepLevel * 16)
const classes = computed(() => {
  return {
    'main-menu-item--is-closed': props.menuItem.children && isClosed.value
  }
})

const hasChildren = computed(()=>{
  return props.menuItem.children?.length
})

/**
 * Сейчас эта проверка реализованна для 1-го уровня вложенности,
 * Потому-что на проекте всего 1 уровень вложенности в меню.
 * Не на чем проверять.
 * Если будет необходимость сделать 2 или более уровней вложенности в меню,
 * то можно будет обходить всех потомков рекурсивно.
 */
const isOneOfDescendantRouteActive = computed(()=>{
  let result = false
  if (!hasChildren) return result

  let currRouteName = route.name
  for (let child of props.menuItem.children) {
    let menuRouteName = child.route.to
    if (currRouteName === menuRouteName) {
      result = true
      break;
    }
  }
  return result
})

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
        :to="{name: menuItem.route.to}"
        active-class="main-menu-item__link--active"
        exact
    >
      <AIcon
        class="main-menu-item__menu-icon"
        :icon="menuItem.icon"
        size="giant"
      />
      <span>{{menuItem.title}}</span>
    </RouterLink>
    <a
      class="main-menu-item__link main-menu-item__link--to-children"
      :class="{'main-menu-item__link--descendant-active': isOneOfDescendantRouteActive}"
      v-if="hasChildren"
      @click="isClosed = !isClosed"
    >
      <AIcon
        class="main-menu-item__menu-icon"
        :icon="menuItem.icon"
        size="giant"
      />
      <span>{{menuItem.title}}</span>
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
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-menu-item {
  // Изменяется JS-ом в зависимости от глубины.
  --paddingByDeep: 0;

  --accentedColorLess: var(--clrBgBlueAccent);
  --accentedColor: var(--clrFillBlueSmall);

  > .main-menu-item__children {
    max-height: max-content;
    overflow-y: hidden;
    // Анимация до max-content не работает. Может-быть потом в браузерах исправят.
    transition: max-height var(--timeShort);
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
    color: var(--clrFontBlueDark);
    text-decoration: none;
    transition: background-color var(--timeShort), color var(--timeShort);
    font-size: var(--fontSizeTiny);
    font-weight: var(--fontWeightBold);

    // before нужно исключительно чтобы дать отступ слева для вложенных элементов.
    &:before {
      display: inline;
      content: '';
      padding-left: var(--paddingByDeep)
    }

    // Отодвигает следующие элементы, в частности индикатор открытости,
    // максимально вправо.
    .main-menu-item__spacer {
      flex: 1 0 auto;
    }

    .main-menu-item__closing-indicator {}

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
      color: var(--clrFontBlueLight);
      &:hover {
        background-color: var(--accentedColor);
        color: var(--clrFontBlueLight);
      }
    }
    &.main-menu-item__link--descendant-active {
      background-color: var(--accentedColorLess);
    }
    .main-menu-item__menu-icon {
      margin-right: var(--gap);
    }
  }

  &.main-menu-item--is-closed {
    > .main-menu-item__children {
      max-height: 0;
    }
  }
}
</style>

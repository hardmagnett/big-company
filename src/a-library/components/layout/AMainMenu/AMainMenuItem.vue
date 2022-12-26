<script setup lang="ts">

import { onMounted, computed, ref, reactive } from 'vue'

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
        class="main-menu-item__link"
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
      class="main-menu-item__link"
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
  --paddingByDeep: 0;
  --accentedColor: var(--clrBgBlueAccent);
  .header-menu__link--active {

  }
  //a {
  .main-menu-item__link {
    &:before {
      display: inline;
      content: '';
      padding-left: var(--paddingByDeep)
    }
    cursor: pointer;
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    align-items: center;
    --height: calc(var(--gap) * 2);
    height: var(--height);
    line-height: var(--height);
    color: var(--clrFontBlueDark);
    text-decoration: none;
    transition: background-color var(--timeShort), color var(--timeShort);
    font-size: var(--fontSizeTiny);
    font-weight: var(--fontWeightBold);

    .main-menu-item__spacer {
      // Отодвигает следующие элементы максимально вправо.
      flex: 1 0 auto;
    }

    .main-menu-item__closing-indicator {}

    &:hover {
      background-color: var(--accentedColor)
    }

    &.main-menu-item__link--active {
      background-color: var(--accentedColor);
      color: var(--clrFillBlueSmall);
    }
    .main-menu-item__menu-icon {
      margin-right: var(--gap);
    }
  }

  > .main-menu-item__children {
    max-height: max-content;
    overflow-y: hidden;
    // Анимация до max-content не работает. Может-быть потом в браузерах исправят.
    transition: max-height var(--timeShort);
  }
  &:hover {
    a {

    }

  }

  &.main-menu-item--is-closed {
    > .main-menu-item__children {
      max-height: 0;
    }
  }
}
</style>

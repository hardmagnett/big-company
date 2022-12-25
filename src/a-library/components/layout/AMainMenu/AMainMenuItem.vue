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

// const componentForLink = computed(() => {
//   return props.menuItem.route ? 'RouterLink' : 'a'
// })
// const componentForLink = computed(() => {
//   return props.menuItem.route ? 'RouterLink' : 'a'
// })

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
    <!--componentForLink-->
    <!--v-if="menuItem.route"-->
    <!--<component-->
    <!--  :is="componentForLink"-->
    <!--  class="main-menu-item__link"-->
    <!--  :to="{name: menuItem.route.to}"-->
    <!--  active-class="header-menu__link&#45;&#45;active"-->
    <!--  exact-->
    <!--&gt;-->

    <!--</component>-->


    <RouterLink
        class="main-menu-item__link"
        v-if="menuItem.route"
        :to="{name: menuItem.route.to}"
        active-class="main-menu-item__link--active"
        exact
    >
      <AIcon
        :icon="menuItem.icon"
        size="giant"
      />
      <span>{{menuItem.title}}</span>
    </RouterLink>
    <a
      class="main-menu-item__link"
      v-if="!menuItem.route"
      @click="isClosed = !isClosed"
    >
      <AIcon
        :icon="menuItem.icon"
        size="giant"
      />
      <span>{{menuItem.title}}</span>
    </a>

    <div class="main-menu-item__children" v-if="menuItem.children">
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
    padding-left: 16px;
    padding-right: 16px;
    //outline: 1px solid darkred;
    display: flex;
    align-items: center;
    --height: calc(var(--gap) * 2);
    height: var(--height);
    line-height: var(--height);
    color: var(--clrFontBlueDark);
    text-decoration: none;
    transition: background-color var(--timeShort), color var(--timeShort);
    //font-size: var(--fsSmall);
    font-size: var(--fontSizeTiny);
    font-weight: var(--fontWeightBold);
    //transition: color var(--timeMedium);

    &:hover {
      background-color: var(--accentedColor)
    }

    &.main-menu-item__link--active {
      background-color: var(--accentedColor);
      color: var(--clrFillBlueSmall);
    }
    .a-icon {
      margin-right: var(--gap);
      //color: var(--clrFillBlueSmall);
      //color: var(--clrFillBlueAccent);
      //color: var(--clrFillBlueBig)
    }
  }

  > .main-menu-item__children {
    //margin-left: 16px;
    //color: clrFont(light, main);
    max-height: 100px;
    overflow-y: hidden;
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

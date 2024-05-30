<script setup lang="ts">
import {computed,} from 'vue';

export interface Props {
  isMainMenuCollapsed: boolean,
  isOnSmallScreen?: boolean,
  logoUrl: string | null,
  textNearLogo: string | null
}
const props = withDefaults(defineProps<Props>(), {
  isMainMenuCollapsed: false,
  logoUrl: null,
  textNearLogo: null,
  isOnSmallScreen: false,
})

let classes = computed(()=>{
  return  {
    'a-header--main-menu-is-collapsed': props.isMainMenuCollapsed,
    'a-header--is-on-small-screen': props.isOnSmallScreen
  }
})

let imageForLogo = computed(()=>{
  return new URL(props.logoUrl, import.meta.url).href;
})

</script>

<template>
  <div class="a-header"
    :class="classes"
  >
    <img v-if="logoUrl" alt="Логотип" :src="imageForLogo" width="20"/>
    <span v-if="textNearLogo" class="a-header__text-near-logo">{{ textNearLogo }}</span>
  </div>
</template>



<style scoped>
  .a-header {
    height: var(--header-height);
    background-color: var(--clr-fill-blue-small);
    /*position: fixed;*/
    /*top: 0;*/
    /*width: 100%;*/
    display: flex;
    flex-flow: row nowrap;

    align-items: center;
    gap: var(--gap);
    padding-left: var(--gap);

    .a-header__text-near-logo {
      color: var(--clr-font-blue-light);
      opacity: 1;
      transition: opacity var(--time-short);
    }

    &.a-header--main-menu-is-collapsed {
      .a-header__text-near-logo {
        opacity: 0;
      }
    }
    &.a-header--is-on-small-screen {
      padding-right: var(--gap);
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      padding-left: 0;
    }
  }
</style>

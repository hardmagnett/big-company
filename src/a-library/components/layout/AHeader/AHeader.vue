<script setup lang="ts">
import {computed,} from 'vue';

export interface Props {
  isMainMenuCollapsed: boolean,
  logoUrl: string | null,
  textNearLogo: string | null
}
const props = withDefaults(defineProps<Props>(), {
  isMainMenuCollapsed: false,
  logoUrl: null,
  textNearLogo: null
})

let classes = computed(()=>{
  return  {
    'a-header--main-menu-is-collapsed': props.isMainMenuCollapsed
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



<style scoped lang="scss">
  .a-header {
    height: var(--headerHeight);
    background-color: var(--clrFillBlueSmall);
    //position: fixed;
    //top: 0;
    //width: 100%;
    display: flex;
    flex-flow: row nowrap;

    align-items: center;
    gap: var(--gap);
    padding-left: var(--gap);

    .a-header__text-near-logo {
      color: var(--clrFontBlueLight);
      opacity: 1;
      transition: opacity var(--timeShort);
    }

    &.a-header--main-menu-is-collapsed {
      .a-header__text-near-logo {
        opacity: 0;
      }
    }
  }
</style>

<script setup lang="ts">
import {computed,} from 'vue';

export interface Props {
  isMainMenuCollapsed: boolean
}
const props = withDefaults(defineProps<Props>(), {
  isMainMenuCollapsed: false,
})

let classes = computed(()=>{
  return  {
    'a-header--main-menu-is-collapsed': props.isMainMenuCollapsed
  }
})

// todo:: Логотип и текст возле лого должны быть параметрами

</script>

<template>
  <div class="a-header"
    :class="classes"
  >
    <!--<img alt="Логотип" src="@/app/assets/images/logo.svg" height="28"/>-->
    <img alt="Логотип" src="@/app/assets/images/logo.svg" width="20"/>
    <span class="a-header__text-near-logo">CRM</span>
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

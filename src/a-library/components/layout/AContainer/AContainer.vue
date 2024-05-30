<template>
  <div class="a-container">
    <div class="a-container__header">
      <div
        class="a-container__top-left"
        :class="{
          'a-container__top-left--collapsed': isMainMenuCollapsed
        }"
      >
        <AHamburger
            v-if="!isBig"
            @clickedOnCross="toggleMenuOnSmall"
            :is-crossed="isMenuVisibleOnSmall"
        />
        <AHeader
            v-if="isBig"
            :isMainMenuCollapsed="isMainMenuCollapsed"
            logoUrl="/src/app/assets/images/logo.svg"
            textNearLogo="CRM"
        />
      </div>
      <div
          id="page-header-place"
          class="a-container__page-header-place"
      >
        <!--сюда контент передается телепортом из view-х-->
      </div>

    </div>
    <div class="a-container__body">
      <!--<div class="a-container__temp-like-menu">-->
      <!--  temp-like-menu-->
      <!--</div>-->
      <AMainMenu
        :isCollapsedOnBigScreen="isCollapsedOnBigScreen"
        :isCollapsedOnSmallScreen="isCollapsedOnSmallScreen"
        @toggle-menu-collapse="toggleMenuCollapse"
        @click-on-router-link="clickOnRouterLinkHandler"
        :isBig="isBig"
        :class="{
          'a-main-menu--visible-on-small': isMenuVisibleOnSmall
        }"
      />

      <div class="container__main-content mod--cool-scrollbar">
        <slot />
      </div>
    </div>


  </div>
</template>

<style scoped>
.a-container {
  display: flex;
  flex-flow: column nowrap;
  .a-container__header {
    flex: 0 0 auto;

    display: flex;
    flex-flow: row nowrap;

    .a-container__top-left {
      /*outline: 1px solid darkred;*/
      width: var(--left-menu-width-expanded);
      transition: width var(--time-short);
      border-right: 1px solid var(--clr-border-blue-lighter);
      z-index: 16;
      @container style(--bp-sm-or-less) {
        width: var(--left-menu-width-collapsed);
      }
      .a-hamburger {

      }
      &.a-container__top-left--collapsed {
        width: var(--left-menu-width-collapsed);
      }
    }

    .a-container__page-header-place {
      flex: 1 0 auto;
      /*outline: 1px solid orange;*/
    }
  }
  .a-container__body {
    flex: 1 1 auto;
    display: flex;
    flex-flow: row nowrap;
    overflow: hidden;

    .a-main-menu {
      flex: 0 0 auto;
      @container style(--bp-sm-or-less) {
        /*outline: 1px solid darkred;*/
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        width: 80%;
        z-index: 8;
        will-change: transform;
        transform: translate(-100%, 0);
        transition: transform var(--time-short)
      }
      &.a-main-menu--visible-on-small {
        transform: translate(0, 0);
        /*isMenuVisibleOnSmall */
      }

    }
    .container__main-content {
      flex: 1 1 auto;
      padding: calc(var(--gap) / 2) var(--gap);
      /*margin-left: var(--leftMenuWidthExpanded);*/
      overflow-x: hidden;

    @container style(--bp-sm-or-more) {
    }
    @container style(--bp-md-or-more) {
      /*padding-left: calc(var(--gap) * 2);*/
      /*padding-right: calc(var(--gap) * 2);*/

    }
    @container style(--bp-lg-or-more) {
      /*padding-left: calc(var(--gap) * 3);*/
      /*padding-right: calc(var(--gap) * 3);*/
    }
    @container style(--bp-xl-or-more) {

    }
    @container style(--bp-xxl-or-more) {

    }
    }
  }

}
</style>
<script setup lang="ts">

import {computed, ref} from "vue";
import {storeToRefs} from "pinia";
import localStorageService from '@/a-library/helpers/DOM/localStorageService';
import {useResponsiveStore} from "@/a-library/stores/responsive";
import AHamburger from "@/a-library/components/layout/AHamburger/AHamburger.vue";
const responsiveStore = useResponsiveStore()

const { isMdOrMore } = storeToRefs(responsiveStore)


let isCollapsedOnBigScreen = ref(localStorageService.getItem('isMenuCollapsedOnBigScreen', false))
let isCollapsedOnSmallScreen = ref(localStorageService.getItem('isMenuCollapsedOnSmallScreen', true))
let isMenuVisibleOnSmall = ref(false)

let isBig = computed(()=>{
  // return isEqualOrMoreThan.value('--bp-md')
  return isMdOrMore.value()
})

let isMainMenuCollapsed = computed(()=>{
  let isCollapsedByBigScreen = isBig.value && isCollapsedOnBigScreen.value
  let isCollapsedBySmallScreen = !isBig.value && isCollapsedOnSmallScreen.value
  return isCollapsedByBigScreen || isCollapsedBySmallScreen
})

function toggleMenuCollapse(){
  if (isBig.value) {
    isCollapsedOnBigScreen.value = !isCollapsedOnBigScreen.value
    localStorageService.setItem('isMenuCollapsedOnBigScreen', isCollapsedOnBigScreen.value)
  } else {
    isCollapsedOnSmallScreen.value = !isCollapsedOnSmallScreen.value
    localStorageService.setItem('isMenuCollapsedOnSmallScreen', isCollapsedOnSmallScreen.value)
  }
}
function toggleMenuOnSmall(){
  isMenuVisibleOnSmall.value = !isMenuVisibleOnSmall.value
}
function clickOnRouterLinkHandler(){
  toggleMenuOnSmall()
}
</script>

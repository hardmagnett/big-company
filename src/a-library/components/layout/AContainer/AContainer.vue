<script setup lang="ts">
import { computed, ref } from "vue";
import { storeToRefs } from "pinia";
import localStorageService from "@/a-library/helpers/DOM/localStorageService";
import { useResponsiveStore } from "@/a-library/stores/responsive";
import AHamburger from "@/a-library/components/layout/AHamburger/AHamburger.vue";
const responsiveStore = useResponsiveStore();

const { isMdOrMore } = storeToRefs(responsiveStore);

let isCollapsedOnBigScreen = ref(
  localStorageService.getItem("isMenuCollapsedOnBigScreen", false),
);
let isMenuVisibleOnSmall = ref(false);

let isBig = computed(() => {
  return isMdOrMore.value;
});

let isMainMenuCollapsed = computed(() => {
  let isCollapsedByBigScreen = isBig.value && isCollapsedOnBigScreen.value;
  return isCollapsedByBigScreen;
});

let hideMenuOverlay = computed(() => {
  let result = isBig.value || !isMenuVisibleOnSmall.value;
  return result;
});

function toggleMenuCollapse() {
  isCollapsedOnBigScreen.value = !isCollapsedOnBigScreen.value;
  localStorageService.setItem(
    "isMenuCollapsedOnBigScreen",
    isCollapsedOnBigScreen.value,
  );
}
function toggleMenuOnSmall() {
  isMenuVisibleOnSmall.value = !isMenuVisibleOnSmall.value;
}
function clickOnRouterLinkHandler() {
  isMenuVisibleOnSmall.value = false;
}
</script>

<template>
  <div class="a-container">
    <div
      class="a-container__menu-overlay"
      :class="{ 'a-container__menu-overlay--invisible': hideMenuOverlay }"
    ></div>
    <div class="a-container__header">
      <div
        class="a-container__top-left"
        :class="{
          'a-container__top-left--collapsed': isMainMenuCollapsed,
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
      <div id="page-header-place" class="a-container__page-header-place">
        <!--сюда контент передается телепортом из view-х-->
      </div>
      <div class="a-container__page-header-right-side">
        <div id="page-header-filter-icon-place">
          <!--телепорт для иконки из фильтра-->
        </div>

      </div>
    </div>
    <div class="a-container__body">
      <AMainMenu
        :isCollapsedOnBigScreen="isCollapsedOnBigScreen"
        @toggle-menu-collapse="toggleMenuCollapse"
        @click-on-router-link="clickOnRouterLinkHandler"
        :isBig="isBig"
        :class="{
          'a-main-menu--visible-on-small': isMenuVisibleOnSmall,
        }"
      />

      <div class="container__main-content">
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
    background-color: var(--clr-bg-blue-small);

    .a-container__top-left {
      width: var(--left-menu-width-expanded);
      transition: width var(--time-short);

      z-index: 16;
      @container style(--bp-sm-or-less) {
        width: var(--left-menu-width-collapsed);
      }
      .a-hamburger {
        border-bottom: 1px solid var(--clr-border-blue-darker);
      }
      .a-header {
        border-bottom: 1px solid var(--clr-border-blue-darker);
      }
      &.a-container__top-left--collapsed {
        width: var(--left-menu-width-collapsed);
      }
    }

    .a-container__page-header-place {
      flex: 1 0 auto;
      /*outline: 1px solid darkred;*/
    }
    .a-container__page-header-right-side {
      /*flex: 1 0 auto;*/
      /*outline: 1px solid darkred;*/
      padding-right: var(--gap);
      display: flex;
      align-items: center;

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
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        width: 80%;
        z-index: 8;
        /*Не ставить здесь will-change: transform; !!! От этого начинает от случая к случаю заблуриваться меню, и это никак не пофиксить!*/
        transform: translate(-100%, 0);
        transition: transform var(--time-short);

        &.a-main-menu--visible-on-small {
          transform: translate(0, 0);
          border-right: none;
        }
      }
    }
    .container__main-content {
      flex: 1 1 auto;
      padding: calc(var(--gap) / 2) var(--gap);
      overflow-x: hidden;

      display: flex;
      flex-flow: column nowrap;
    }
  }
  .a-container__menu-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 8;
    background-color: var(--clr-overlay);
    will-change: opacity;
    transition: opacity var(--time-short);
    &.a-container__menu-overlay--invisible {
      opacity: 0;
      pointer-events: none;
    }
  }
}
</style>

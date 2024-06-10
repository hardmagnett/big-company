<script setup lang="ts">

import {computed, useAttrs} from 'vue';

const attrs = useAttrs()

export interface Props {
  icon?: boolean,
}
withDefaults(defineProps<Props>(), {
  icon: false,
})

const rootComponent = computed(()=>{
  return isAnchor.value ? 'a'
    : isRouterLink.value ? 'router-link'
    : 'button'
})

const isAnchor = computed(()=>{
  return attrs.href
})
const isRouterLink = computed(()=>{
  return attrs.to
})
</script>

<template>
  <component :is="rootComponent"
    class="btn"
    :class="{
      'btn--icon': icon,
      'btn--with-text': !icon
    }"
    v-bind="$attrs"
  >
    <slot/>
  </component>
</template>

<style scoped>
  .btn--with-text {
    --height: calc(var(--gap) * 1.6);
    @container style(--bp-md-or-more) {
      --height: calc(var(--gap) * 1.8);
    }
    @container style(--bp-lg-or-more) {
      --height: calc(var(--gap) * 1.8);
    }

    height: var(--height);
    line-height: var(--height);
    padding: 0 var(--gap);

    display: block;
    width: fit-content;

    border-radius: var(--border-radius);
    outline: none !important;
    text-decoration: none;
    color: white;
    background-color: var(--clr-fill-blue-small);
    border: none;


    cursor: pointer;
    transition: background-color var(--time-short);
    &:hover {
      background-color: var(--clr-fill-blue-accent);
    }
    &.btn--error {
      background-color: var(--clr-fill-red-small);
      &:hover {
        background-color: var(--clr-fill-red-accent);
      }
    }
    &.btn--success {
      background-color: var(--clr-fill-green-small);
      &:hover {
        background-color: var(--clr-fill-green-accent);
      }
    }
    &.btn--danger {
      background-color: var(--clr-fill-orange-small);
      &:hover {
        background-color: var(--clr-fill-orange-accent);
      }
    }
    &.btn--small {
      --height: calc(var(--gap) * 1.5);
      padding: 0 var(--gap);
      height: var(--height);
      line-height: var(--height);
      font-size: var(--font-size-small);
    }
  }


  .btn--icon {
    cursor: pointer;
    border-radius: 50%;
    border: none;
    padding: 0;

    background-color: transparent;
    transition: background-color var(--time-short);

    --size: calc(var(--gap) * 1.6);
    @container style(--bp-md-or-more) {
      --size: calc(var(--gap) * 1.8);
    }
    @container style(--bp-lg-or-more) {
      --size: calc(var(--gap) * 1.8);
    }
    height: var(--size);
    width: var(--size);

    color: var(--clr-fill-blue-small);
    &:hover {
      background-color: var(--clr-bg-blue-small);
    }

    &.btn--success {
      color: var(--clr-fill-green-small);
      &:hover {
        background-color: var(--clr-bg-green-small);
      }
    }
    &.btn--danger {
      color: var(--clr-fill-orange-small);
      &:hover {
        background-color: var(--clr-bg-orange-small);
      }
    }
    &.btn--error {
      color: var(--clr-fill-red-small);
      &:hover {
        background-color: var(--clr-bg-red-small);
      }
    }

  }
</style>

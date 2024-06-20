<script setup lang="ts">
import { computed, useAttrs } from "vue";

const attrs = useAttrs();

export interface Props {
  icon?: boolean;
}
withDefaults(defineProps<Props>(), {
  icon: false,
});

const rootComponent = computed(() => {
  return isAnchor.value ? "a" : isRouterLink.value ? "router-link" : "button";
});

const isAnchor = computed(() => {
  return attrs.href;
});
const isRouterLink = computed(() => {
  return attrs.to;
});
</script>

<template>
  <component
    :is="rootComponent"
    class="a-btn"
    :class="{
      'a-btn--icon': icon,
      'a-btn--with-text': !icon,
    }"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<style scoped>
.a-btn {
  outline: none !important;
}
.a-btn--with-text {
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
  text-decoration: none;
  color: white;
  background-color: var(--clr-fill-blue-small);
  border: none;

  cursor: pointer;
  transition: background-color var(--time-short);
  &:hover {
    background-color: var(--clr-fill-blue-accent);
  }
  &.a-btn--error {
    background-color: var(--clr-fill-red-small);
    &:hover {
      background-color: var(--clr-fill-red-accent);
    }
  }
  &.a-btn--success {
    background-color: var(--clr-fill-green-small);
    &:hover {
      background-color: var(--clr-fill-green-accent);
    }
  }
  &.a-btn--danger {
    background-color: var(--clr-fill-orange-small);
    &:hover {
      background-color: var(--clr-fill-orange-accent);
    }
  }
  &.a-btn--tonal {
    outline: 1px solid darkred;
    color: var(--clr-fill-blue-big);
    background-color: var(--clr-bg-blue-small);
    &:hover {
      outline: 1px solid green;
      background-color: var(--clr-bg-blue-smaller);
    }

    &.a-btn--error {
      color: var(--clr-fill-red-big);
      background-color: var(--clr-bg-red-small);
      &:hover {
        outline: 1px solid green;
        background-color: var(--clr-bg-red-smaller);
      }
    }
    &.a-btn--success {
      color: var(--clr-fill-green-big);
      background-color: var(--clr-bg-green-small);
      &:hover {
        outline: 1px solid green;
        background-color: var(--clr-bg-green-smaller);
      }
    }
    &.a-btn--danger {
      color: var(--clr-fill-orange-big);
      background-color: var(--clr-bg-orange-small);
      &:hover {
        outline: 1px solid green;
        background-color: var(--clr-bg-orange-smaller);
      }
    }
  }
  &.a-btn--small {
    --height: calc(var(--gap) * 1.5);
    padding: 0 var(--gap);
    height: var(--height);
    line-height: var(--height);
    font-size: var(--font-size-small);
  }
}

.a-btn--icon {
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

  --bg-opacity: 0.15;

  color: var(--clr-fill-blue-small);
  &:hover {
    background-color: hsla(var(--clr-fill-blue-small-raw), var(--bg-opacity));
  }

  &.a-btn--success {
    color: var(--clr-fill-green-small);
    &:hover {
      background-color: hsla(
        var(--clr-fill-green-small-raw),
        var(--bg-opacity)
      );
    }
  }
  &.a-btn--danger {
    color: var(--clr-fill-orange-small);
    &:hover {
      background-color: hsla(
        var(--clr-fill-orange-small-raw),
        var(--bg-opacity)
      );
    }
  }
  &.a-btn--error {
    color: var(--clr-fill-red-small);
    &:hover {
      background-color: hsla(var(--clr-fill-red-small-raw), var(--bg-opacity));
    }
  }
  &.a-btn--white {
    color: white;
    &:hover {
      background-color: rgba(255, 255, 255, var(--bg-opacity));
    }
  }
}
</style>

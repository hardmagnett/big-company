<script setup lang="ts">
import { computed } from "vue";

export interface Props {
  icon?: string;
  size?: string;
  rotate180?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  icon: "mdi-google-downasaur",
  size: "medium", //tiny small medium large giant
  rotate180: false,
});

const classes = computed(() => {
  return {
    mdi: true,
    [props.icon]: true,
    "mdi-rotate-180": props.rotate180,
    "a-icon--medium": props.size === "medium",
    "a-icon--large": props.size === "large",
    "a-icon--small": props.size === "small",
    "a-icon--giant": props.size === "giant",
  };
});
</script>

<template>
  <span class="a-icon" :class="classes"></span>
</template>

<style scoped>
.a-icon {
  /*Если вдруг будут проблемы с размерами - смотри как сделано в моём плеере.*/
  /*Там я решил эту проблему.*/

  /*В случае необходимости, можно переделать размеры при помощи mdi-класоов. Наприме mdi-18px.mdi-set .*/
  &.a-icon--small {
    font-size: var(--font-size-small);
  }

  &.a-icon--medium {
    font-size: var(--font-size-base);
  }
  &.a-icon--large {
    font-size: var(--font-size-large);
  }
  &.a-icon--giant {
    font-size: var(--font-size-giant);
  }
}
</style>

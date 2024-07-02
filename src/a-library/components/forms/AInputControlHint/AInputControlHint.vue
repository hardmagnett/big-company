<script setup lang="ts">
import { computed } from "vue";

export interface Props {
  errorMessages?: string[];
}
const props = withDefaults(defineProps<Props>(), {
  errorMessages: () => [],
});

const hint = computed(() => {
  return props.errorMessages[0] ?? "";
});
</script>

<template>
  <div class="a-input-control-hint">
    <div class="mod--ellipsis-one-line">{{ hint }}</div>
  </div>
</template>

<style scoped>
.a-input-control-hint {
  --hint-height: 20px;
  display: flex;
  align-items: end;

  font-size: var(--font-size-small);
  height: var(--hint-height);

  color: var(--clr-font-red-bright);
}
</style>

<script setup lang="ts">
import {computed} from "vue";

export interface Props {
  label?: string;
  hideLabel?: boolean;
  hideHint?: boolean;
  // В будущем может понадобиться выводить более чем одну ошибку. Поэтому пусть будет массивом
  errorMessages?: string[];
}
const props = withDefaults(defineProps<Props>(), {
  label: "",
  hideLabel: false,
  hideHint: false,
  errorMessages: () => [],
});

const hint = computed(()=>{
  return props.errorMessages[0] ?? ''
})
</script>

<template>
  <div class="a-input-control">
    <div v-if="!hideLabel" class="a-input-control__label">
      <div class="mod--ellipsis-one-line">
        {{ label }}
      </div>
    </div>
    <div class="a-input-control__input">
      <slot></slot>
    </div>
    <AInputControlHint
      v-if="!hideHint"
      :error-messages="errorMessages"

    ></AInputControlHint>
  </div>
</template>

<style scoped>
.a-input-control {
  --hint-height: 20px;
  display: flex;
  flex-flow: column nowrap;
  .a-input-control__label {
    display: flex;
    align-items: start;

    font-size: var(--font-size-small);
    height: var(--hint-height);
  }
  .a-input-control__input {
    height: calc(var(--gap) * 2);
    display: flex;
    align-items: center;
  }
}
</style>

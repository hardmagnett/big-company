<script setup lang="ts">
import { } from 'vue'

export interface Props {
  label?: string;
  hideLabel?: boolean,
  hideHint?:boolean,
  // В будущем может понадобиться выводить более чем одну ошибку. Поэтому пусть будет массивом
  errorMessages?: string[]
}
const props = withDefaults(defineProps<Props>(), {
  label: '',
  hideLabel: false,
  hideHint: false,
  errorMessages: ()=> []
});

</script>

<template>
  <div class="a-input-control">
    <div v-if="!hideLabel" class="a-input-control__label ">
      <div class=" mod--ellipsis-one-line">
        {{label}}
      </div>

    </div>
    <div class="a-input-control__input">
      <slot></slot>
    </div>
    <div v-if="!hideHint" class="a-input-control__error">
      <div class=" mod--ellipsis-one-line">
      hint
        </div>
    </div>
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
  .a-input-control__error {
    display: flex;
    align-items: end;

    font-size: var(--font-size-small);
    height: var(--hint-height);

    color: var(--clr-font-red-bright);
  }
}
</style>

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
    <div v-if="!hideLabel" class="a-input-control__label">
      {{label}}
    </div>
    <div class="a-input-control__input">
      <slot></slot>
    </div>
    <div v-if="!hideHint" class="a-input-control__error">
      hint
    </div>
  </div>
</template>

<style scoped>
.a-input-control {
  /*--hint-height: var(--gap);*/
  --hint-height: 20px;
  .a-input-control__label {
    display: flex;
    align-items: start;

    /*outline: 1px solid darkred;*/
    height: calc(var(--gap) * 1.5);
    font-size: var(--font-size-small);
    /*color: var(--clr-fill-blue-accent);*/
    /*font-weight: var(--font-weight-bold);*/
    height: var(--hint-height);
  }
  .a-input-control__input {
    /*outline: 1px solid green;*/

  }
  .a-input-control__error {
    display: flex;
    align-items: end;

    font-size: var(--font-size-small);
    height: var(--hint-height);

    color: var(--clr-fill-red-accent)
    /*outline: 1px solid blue;*/
  }
}
</style>

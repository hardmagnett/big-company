<script setup lang="ts">

import {
  iAInputableEmits,
  iAInputablePropDefaults,
} from "@/a-library/components/forms/component-interfaces/IAInputable";
import type { IAInputableProps } from "@/a-library/components/forms/component-interfaces/IAInputable";

export interface Props extends IAInputableProps{

}
withDefaults(defineProps<Props>(), {
  ...iAInputablePropDefaults
});
defineEmits([...iAInputableEmits]);
</script>

<template>
  <AInputControl class="a-check-box"
     :hideLabel="hideLabel"
     :hideHint="hideHint"
  >
  <label :for="`a-check-box-${$.uid}`" class="a-check-box__wrapper">

    <input
      class="a-check-box__input"
      type="checkbox"
      checked
      :id="`a-check-box-${$.uid}`"
    />
    <span
      class="a-check-box__label mod--ellipsis-one-line"
      :class="{ 'a-check-box__label--with-text': label }"
    >
      {{ label }}
    </span>
  </label>
  </AInputControl>
</template>

<style scoped>
.a-check-box {
  .a-check-box__wrapper {
    display: block;
    max-width: 100%;
    cursor: pointer;
    position: relative;
    width: fit-content;
    height: calc(var(--gap) + 2px);
    line-height: 1.2;

    .a-check-box__input {
      /*display: none;*/
      /*width: var(--gap);*/
      /*height: var(--gap);*/

      /*todo:: это куда-то в миксин*/
      cursor: pointer;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
    .a-check-box__input:focus + .a-check-box__label {
      /*.a-check-box__label {*/
        &:before {
          border: 1px solid blue;
        /*}*/
      }
    }

    .a-check-box__label {
      user-select: none;

      &:before,
      &:after {
        display: block;
        width: var(--gap);
        height: var(--gap);
        position: absolute;
        top: 0;
        left: 0;
      }

      /*Рамка для checkmark*/
      &:before {
        content: "";
        background-color: white;
        border: 1px solid var(--clr-border-blue-lighter);
      }
      /*Непосредственно checkmark*/
      &:after {
        color: var(--clr-fill-blue-accent);
        content: "✔";
        opacity: 0;
        transition: opacity var(--time-short);
        transform: translateX(3px) translateY(0px);
        font-weight: bold;
      }
    }

    .a-check-box__label--with-text {
      padding-left: calc(var(--gap) * 1.5);
    }

    /*чекнутый checkmark*/
    .a-check-box__input:checked + .a-check-box__label::after {
      opacity: 1;
    }
  }
}

</style>

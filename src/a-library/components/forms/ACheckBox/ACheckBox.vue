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

const model = defineModel()

defineEmits([...iAInputableEmits]);
</script>

<template>
  <AInputControl class="a-check-box"
     :hideLabel="hideLabel"
     :hideHint="hideHint"
  >
  <label :for="`a-check-box-${$.uid}`" class="a-check-box__wrapper">

    <!--checked-->
    <!--value=true-->
    <!--У чекбокса value всегда "on". Независимо от того поставлен он или нет.-->
    <!--Но если поставить value='foobar' то value будет всегда foobar-->
    <!--Реальное boolean-значение лежит в поле checked.-->

    <!--todo::записать в storybook как быть с особыми случаями для валидируемых элементов.-->
    <input
      :name="name"
      v-validate="rules"
      class="a-check-box__input a-inputable__hidden-original-input"
      type="checkbox"
      v-model="model"
      :id="`a-check-box-${$.uid}`"
      :data-validate-name="name"
      :data-validate-value="model"
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
@import '@/a-library/components/forms/component-interfaces/AInputable.css';
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
      z-index: 10;
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
        transition: border var(--time-short)
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
    .a-check-box__input:focus-visible + .a-check-box__label {
      &:before {
        border: 1px solid var(--clr-border-blue-darker);
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

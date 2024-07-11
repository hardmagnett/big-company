<script setup lang="ts">
import {computed, ref} from "vue";
import { iAInputablePropDefaults } from "@/a-library/components/forms/mixins/AInputable/IAInputable";
import type { IAInputableProps } from "@/a-library/components/forms/mixins/AInputable/IAInputable";

import { useMultiSelectLogic } from "./useMultiSelectLogic";
import { useMultiSelectMouse } from "./useMultiSelectMouse";

export interface Props extends IAInputableProps {
  options: Option[];
  optionObjectFieldTitle?: string;
  optionObjectFieldValue?: string;
  returnObject?: boolean;
  hideSearch?: boolean;
  multiple?: boolean;
  modelValue: Options;
}
const props = withDefaults(defineProps<Props>(), {
  ...iAInputablePropDefaults,
  options: () => [],
  optionObjectFieldTitle: "title",
  optionObjectFieldValue: "id",
  returnObject: false,
  hideSearch: false,
  multiple: false,
});

const emit = defineEmits<{
  "update:modelValue": [value: Options];
}>();

const realInput = ref<HTMLInputElement | null>(null)
const popover = ref<HTMLInputElement | null>(null)

let modelValueInner = computed({
  get() {
    return props.modelValue;
  },
  set(newVal) {
    emit("update:modelValue", newVal);
  },
});

export type PropsWithDefaults = typeof props;
const {
  areOptionsArray,
  isOptionSelected,
  toggleOption,
  createTemplateKeyForOption,
  createTemplateValueForOption,
} = useMultiSelectLogic(props, modelValueInner);

const {
  isFocused,
  selectedValuesClickHandler
} = useMultiSelectMouse(realInput, popover)

export type OptionObject = Record<string | number, string | number>;
export type Option = null | string | number | OptionObject;
export type Options = Option | Option[];
</script>

<template>

  <AInputControl
      :label="label"
      :hideLabel="hideLabel"
      :hideHint="hideHint"
      class="a-multi-select"
      :class="{ 
        'a-input--with-error': errorMessages?.length,
        'a-multi-select--focused': isFocused 
      }"
      :errorMessages="errorMessages"
  >
    <input
        class="a-multi-select__input a-inputable__hidden-original-input"
        type="select"
        ref="realInput"
        @focus="selectedValuesClickHandler"
    />
    <div class="
      a-multi-select__selected-values
      a-multi-select__anchor-for-popover
    "
      :style="
        // @ts-ignore: TS не знает о position-anchor в 2024-07.
        {'anchor-name': `--anchor-for-popover-${$.uid}`}
      "
      @click="selectedValuesClickHandler"
    >
      <span
          v-if="!areOptionsArray(modelValueInner) && modelValueInner"
          class="a-multi-select__selected-value"
      >
        {{createTemplateValueForOption(modelValueInner)}}
      </span>
      <template v-if="areOptionsArray(modelValueInner)">
        <template
            v-for="(selectedOption, index) in modelValueInner"
        >
          <span
              class="a-multi-select__selected-value"
          >
            {{createTemplateValueForOption(selectedOption)}}
            <span v-if="index != modelValueInner.length - 1">,&nbsp;</span>
          </span>
        </template>
      </template>
    </div>

    <div
      :style="
        {
          // @ts-ignore: TS не знает о position-anchor в 2024-07.
          'width':`anchor-size(--anchor-for-popover-${$.uid} width)`,
          // @ts-ignore: TS не знает о position-anchor в 2024-07.
          'position-anchor': `--anchor-for-popover-${$.uid}`
        }
      "
        popover ref="popover" class="a-multi-select__popover">
      <div class="a-multi-select__options">
        <div
            class="a-multi-select__option"
            :class="{
          'a-multi-select__option--selected': isOptionSelected(option),
        }"
            v-for="(option, index) in options"
            :key="createTemplateKeyForOption(option, index)"
            @click="toggleOption(option)"
        >



          {{ createTemplateValueForOption(option) }}
        </div>
      </div>
      
    </div>
  </AInputControl>
  
  <!--<div class="a-multi-select">-->
  <!--  <div class="a-multi-select__options">-->
  <!--    <div-->
  <!--      class="a-multi-select__option"-->
  <!--      :class="{-->
  <!--        'a-multi-select__option&#45;&#45;selected': isOptionSelected(option),-->
  <!--      }"-->
  <!--      v-for="(option, index) in options"-->
  <!--      :key="createTemplateKeyForOption(option, index)"-->
  <!--      @click="toggleOption(option)"-->
  <!--    >-->
  <!--      -->
  <!--      -->
  <!--      -->
  <!--      {{ createTemplateValueForOption(option) }}-->
  <!--    </div>-->
  <!--  </div>-->
  <!--</div>-->
</template>

<style scoped>
@import "@/a-library/components/forms/mixins/AInputable/AInputable.css";


@position-try --a-multiselect-popover-top {
  bottom: anchor(top);
  top: auto;
}

.a-multi-select {
  --accentedColorLess: var(--clr-bg-blue-accent);
  --accentedColor: var(--clr-fill-blue-small);
  
  /*Постоянное*/
  position: relative;
  
  /*Временное*/
  /*outline: 1px solid #333;*/
  /*background-color: #eee;*/
  /*display: flex;*/
  /*flex-flow: column nowrap;*/
  /*gap: var(--gap);*/
  /*padding: var(--gap);*/
  /*padding: 2px;*/
  .a-multi-select__anchor-for-popover {
    /*Не удалять. Пусть будет для понимания*/
    /*anchor-name: --anchor-for-popover;*/
    
    /*border: 10px solid darkred;*/
    /*background-color: red !important;*/
    position: relative;
  }
  
  .a-multi-select__popover {
    position: absolute;
    /*Не удалять. Пусть будет для понимания*/
    /*position-anchor: --anchor-for-popover;*/

    margin: 0;
    padding: 0;
    border: 0;

    border: 1px solid var(--clr-border-blue-darker);

    /*background-color: #aff;*/

    top: anchor(bottom);
    right: anchor(right);
    left: anchor(left);
    
    max-height: 100px;
    /*min-height: 100px;*/

    position-try-options: --a-multiselect-popover-top;
  }
  
  .a-multi-select__selected-values {
    --height: calc(var(--gap) * 2);
    /*display: block;*/
    height: var(--height);
    line-height: var(--height);
    padding-left: var(--gap);
    padding-right: var(--gap);
    border: 1px solid var(--clr-border-blue-lighter);
    border-radius: var(--border-radius);
    transition: border var(--time-short);
    width: 100%;
    background-color: white;
    cursor: pointer;
    
    display: flex;
    flex-flow: row wrap;
    
    .a-multi-select__selected-value {
      /*outline: 1px solid darkred;*/
      height: var(--height);
      
    }
  }


  
  .a-multi-select__options {
    /*Постоянное*/

    /*Временное*/
    /*display: flex;*/
    /*flex-flow: row nowrap;*/
    /*gap: var(--gap);*/
  }
  .a-multi-select__option {
    /*Постоянное*/
    cursor: pointer;
    /*padding: var(--gap);*/
    height: calc(var(--gap) * 2);
    font-size: var(--font-size-tiny);
    font-weight: var(--font-weight-bold);
    display: flex;
    align-items: center;
    padding-left: var(--gap);
    padding-right: var(--gap);
    

    /*Временное*/
    /*flex: 0 0 150px;*/
    /*font-size: var(--font-size-tiny);*/

    &:hover {
      background-color: var(--accentedColorLess);
    }
    &.a-multi-select__option--selected {
      background-color: var(--accentedColor);
      color: var(--clr-font-blue-light) !important;
    }
  }

  /*.a-multi-select__input:focus-visible {*/
  .a-multi-select__input:focus {
  /*.a-multi-select__input {*/
    background-color: red;
    opacity: 0.05;
  }
  .a-multi-select__input:focus-visible + .a-multi-select__selected-values {
    
  }
  &.a-multi-select--focused {
    .a-multi-select__selected-values {
      border: 1px solid var(--clr-border-blue-darker);
    }
    
  }
}
</style>

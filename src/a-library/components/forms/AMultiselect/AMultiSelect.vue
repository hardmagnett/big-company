<script setup lang="ts">
import {computed} from "vue";
import {
  iAInputableEmits,
  iAInputablePropDefaults,
} from "@/a-library/components/forms/mixins/AInputable/IAInputable";
import type { IAInputableProps } from "@/a-library/components/forms/mixins/AInputable/IAInputable";

import { useMultiSelectLogic } from "./useMultiSelectLogic";

export interface Props extends IAInputableProps {
  options: Option[];
  optionObjectFieldTitle?: string;
  optionObjectFieldValue?: string;
  returnObject?: boolean;
  hideSearch?: boolean;
  multiple?: boolean;
  // modelValue: string | number | string[] | number[] | Option[]
  // modelValue: Option | Option[]
  modelValue: Options
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
  // change: [value: Options]
  'update:modelValue': [value: Options]
}>()

let modelValueInner = computed({
  get(){
    return props.modelValue
  },
  set (newVal) {
    console.log(newVal); console.log('^...newVal:')
    // emit('change', newVal)
    emit('update:modelValue', newVal)
  }
})

export type PropsWithDefaults =  typeof props
const {
  areOptionsArray,
  // isOptionNumberOrString,
  isOptionOptionObject,
  createTemplateKeyForOption,
  createTemplateValueForOption,
} = useMultiSelectLogic(props);

export type OptionObject = Record<string | number, string | number>;
export type Option = null | string | number | OptionObject;
export type Options = Option | Option[]

// todo:: возможно вынести в logic composable
const isOptionSelected = (option: Option) => {
  return false
}
// todo:: возможно вынести в logic composable
const unselectOption = (option: Option) => {
  
}
// todo:: возможно вынести в logic composable
const selectOption = (option: Option) => {
  if (props.multiple) {
    if (areOptionsArray(modelValueInner.value)){
      if (!isOptionOptionObject(option)) {
        modelValueInner.value.push(option)
      } else {
        if (props.returnObject) {
          modelValueInner.value.push(option) 
        } else {
          modelValueInner.value.push(option[props.optionObjectFieldValue]) 
        }
      }
    }
  }
  // single
  if (!props.multiple) {
    if (!isOptionOptionObject(option)) {
      modelValueInner.value = option
    } else {
      if (props.returnObject) {
        modelValueInner.value = option
      } else {
        modelValueInner.value = option[props.optionObjectFieldValue]
      }
    }
  }
}

// todo:: возможно вынести в logic composable
const toggleOption = (option: Option) => {
  if (isOptionSelected(option)) {
    unselectOption(option)
  } else {
    selectOption(option)
  }
}

</script>

<template>
  <div class="a-multi-select">
    im multiselect

    <div class="a-multi-select__options">
      <div
        class="a-multi-select__option"
        v-for="(option, index) in options"
        :key="createTemplateKeyForOption(option, index)"
        @click="toggleOption(option)"
      >
        {{ createTemplateValueForOption(option) }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.a-multi-select {
  /*Постоянное*/

  /*Временное*/
  /*outline: 1px solid #333;*/
  background-color: #eee;
  display: flex;
  flex-flow: column nowrap;
  gap: var(--gap);
  /*padding: var(--gap);*/
  /*padding: 2px;*/
  .a-multi-select__options {
    /*Постоянное*/

    /*Временное*/
    display: flex;
    flex-flow: row nowrap;
    gap: var(--gap);
  }
  .a-multi-select__option {
    /*Постоянное*/
    cursor: pointer;

    /*Временное*/
    outline: 1px solid #339;
    flex: 0 0 150px;
    /*font-size: var(--font-size-tiny);*/
  }
}
</style>

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
const pushOption = (option:Option) => {
  if (areOptionsArray(modelValueInner.value)){
    modelValueInner.value = [
      ...modelValueInner.value,
      option
    ]
  }
}
// todo:: возможно вынести в logic composable
const isOptionSelected = (option: Option) => {
  console.log(option); console.log('^...option:') 
  let result = false
  if (props.multiple) {
    // Если в опциях - примитивы
    if (!isOptionOptionObject(option)) {
      if (areOptionsArray(modelValueInner.value)){
        result = modelValueInner.value.includes(option)
      }
    }
    // Если в опциях - объекты
    else {
      // Если возвращать объект
      if (props.returnObject) {
        if (areOptionsArray(modelValueInner.value)){
          let ids = modelValueInner.value.map((o: Option)=> {
            if (isOptionOptionObject(o)) {
              return o[props.optionObjectFieldValue]
            }
          })
          result = ids.includes(option[props.optionObjectFieldValue])
          // console.log(ids); console.log('^...ids:') 
        }
        
      // Если возвращать примитив
      } else {
        if (areOptionsArray(modelValueInner.value)){
          result = modelValueInner.value.includes(option[props.optionObjectFieldValue])
        }
      }
    }
  }
  // Single
  if (!props.multiple) {
    if (!isOptionOptionObject(option)) {
      result = modelValueInner.value === option
    } else {
      if (props.returnObject) {
        if (
            !areOptionsArray(modelValueInner.value)
            && isOptionOptionObject(modelValueInner.value)
        ) {
          result = modelValueInner.value?.[props.optionObjectFieldValue] === option[props.optionObjectFieldValue]
        }
      } else {
        result = modelValueInner.value === option[props.optionObjectFieldValue]
      }
    }
  }
  console.log(result); console.log('^...result:') 
  // return false
  return result
}
// todo:: возможно вынести в logic composable
const unselectOption = (option: Option) => {
  if (props.multiple) {
    if (areOptionsArray(modelValueInner.value)) {
      let newSelectedOptions = modelValueInner.value.filter(
        (selectedOption: Option)=>{
          let result = true
          // Если возвращать массив примитивов
          if (!isOptionOptionObject(selectedOption)) {
            if (!isOptionOptionObject(option)) {
              result = selectedOption !== option
            } else {
              result = selectedOption !== option[props.optionObjectFieldValue]
            }
            
            // if (areOptionsArray(modelValueInner.value)){
            //   result = modelValueInner.value.includes(option)
            // }
          }
          // Если возвращать массив объектов
          else {
            if (!isOptionOptionObject(option)) {
              result = selectedOption[props.optionObjectFieldValue] !== option[props.optionObjectFieldValue]
            }
          }
          return result
        }
      )
      modelValueInner.value = newSelectedOptions
    }
    
  }
  if (!props.multiple) {
    modelValueInner.value = null
  }
}



// todo:: возможно вынести в logic composable
const selectOption = (option: Option) => {
  if (props.multiple) {
    if (areOptionsArray(modelValueInner.value)){
      if (!isOptionOptionObject(option)) {
        pushOption(option)
      } else {
        if (props.returnObject) {
          pushOption(option)
        } else {
          pushOption(option[props.optionObjectFieldValue])
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
        :class="{
          'a-multi-select__option--selected': isOptionSelected(option)
        }"
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
    
    &.a-multi-select__option--selected {
      background-color: #aff;
    }
  }
}
</style>

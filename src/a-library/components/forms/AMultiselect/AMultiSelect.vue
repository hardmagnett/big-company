<script setup lang="ts">
import {} from "vue";
import {
  iAInputableEmits,
  iAInputablePropDefaults,
} from "@/a-library/components/forms/mixins/AInputable/IAInputable";
import type { IAInputableProps } from "@/a-library/components/forms/mixins/AInputable/IAInputable";



export interface Props extends IAInputableProps {
  options: Option[];
  optionObjectFieldTitle?: string;
  optionObjectFieldValue?: string;
  returnObject?: boolean;
  hideSearch?: boolean;
  multiple?: boolean;
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


type OptionObject = Record<string | number, string | number>
type Option = string | number | OptionObject

// todo:: В composable logic
const createTemplateKeyForOption = (option: Option, index: number)=>{
  if (typeof option === 'number' || typeof option === 'string') {
    return index
  }
  
  return option[props.optionObjectFieldValue]
}

</script>

<template>
  <div class="a-multi-select">
    im multiselect

    <div
        class="a-multi-select__option"
        v-for="(option, index) in options"
        :key="createTemplateKeyForOption(option, index)"
    >
      {{ option }}
    </div>
  </div>
</template>

<style scoped>
.a-multi-select {
  /*Постоянное*/

  /*Временное*/
  outline: 1px solid #333;
  display: flex;
  flex-flow: column nowrap;
  gap: var(--gap);
  padding: var(--gap);
  .a-multi-select__option {
    /*Постоянное*/
    cursor: pointer;

    /*Временное*/
    outline: 1px solid #339;
  }
}
</style>

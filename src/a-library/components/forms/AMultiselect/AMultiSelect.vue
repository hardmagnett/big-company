<script setup lang="ts">
import {} from "vue";
import {
  iAInputableEmits,
  iAInputablePropDefaults,
} from "@/a-library/components/forms/mixins/AInputable/IAInputable";
import type { IAInputableProps } from "@/a-library/components/forms/mixins/AInputable/IAInputable";

type OptionObject = {
  id: number,
  title: string,
}
// type Option = string | number | object
type Option = string | number | OptionObject

export interface Props extends IAInputableProps {
  options: Option[];
  optionObjectFieldTitle?: string;
  optionObjectFieldValue?: string;
  returnObject?: boolean;
  hideSearch?: boolean;
  multiple?: boolean;
}
withDefaults(defineProps<Props>(), {
  ...iAInputablePropDefaults,
  options: () => [],
  optionObjectFieldTitle: "title",
  optionObjectFieldValue: "id",
  returnObject: false,
  hideSearch: false,
  multiple: false,
});

// todo:: В composable logic
const createTemplateKeyForOption = (option: Option, index: number)=>{
  if (typeof option === 'number' || typeof option === 'string') {
    return index
  }

  // todo:: сделать чтобы кроме id были и другие варианты имени поля
  return option.id
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

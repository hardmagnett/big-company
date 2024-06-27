<script setup lang="ts">
import {
  iAInputableEmits,
  iAInputablePropDefaults,
} from "@/a-library/components/forms/mixins/AInputable/IAInputable";
import type { IAInputableProps } from "@/a-library/components/forms/mixins/AInputable/IAInputable";

export interface Props extends IAInputableProps {}
const props = withDefaults(defineProps<Props>(), {
  ...iAInputablePropDefaults,
});

import { useField } from 'vee-validate';
import {computed} from "vue";

defineOptions({
  inheritAttrs: false,
});

const model = defineModel();

defineEmits([...iAInputableEmits, 'blur']);

// todo:: вынести в миксин
// todo:: сделать чтобы был параметр: 'input'/'blur-change'/'eager'/'disabled'
const validationListeners = computed(() => {
  // lazy
  if (!errorMessage.value) {
    return {
      blur: handleChange,
      change: handleChange,
      input: (e) => handleChange(e, false),
    };
  }

  // Aggressive
  return {
    blur: handleChange,
    change: handleChange,
    input: handleChange, // only switched this
  };
});

// todo:: как сделать eager в контексте компонента?
const { value, errorMessage, handleChange } = useField(
    () => props.name,
    undefined,
    // (state: any)=>{
    //   return {
    //     syncVModel: true,
    //     // validate aggressively as long as there are errors on the input
    //     validateOnModelUpdate: state.errors.length > 0,
    //   }
    // },

    {
      syncVModel: true,
      // Нужно для eager validation посредством validationListeners
      validateOnValueUpdate: false,
    }
//state => {
//     return {
//       // validate aggressively as long as there are errors on the input
//       validateOnModelUpdate: state.errors.length > 0,
//     };
// }
);

</script>

<template>
  <AInputControl
    :label="label"
    :hideLabel="hideLabel"
    :hideHint="hideHint"
    class="a-input"
    :errorMessage="errorMessage"
  >
    <!--<input v-on="validationListeners" :value="value" type="text" />-->
    <!--v-model="model"-->
    <input
        :name="name"
        @blur="$emit('blur')"
        v-on="validationListeners"
        :value="model"
        class="a-input__input" />
  </AInputControl>
</template>

<style scoped>
.a-input {
  .a-input__input {
    --height: calc(var(--gap) * 2);
    display: block;
    height: var(--height);
    line-height: var(--height);
    padding-left: var(--gap);
    padding-right: var(--gap);
    border: 1px solid var(--clr-border-blue-lighter);
    border-radius: var(--border-radius);
    transition: border var(--time-short);
    width: 100%;
    &:focus {
      border: 1px solid var(--clr-border-blue-darker);
    }
  }
}
</style>

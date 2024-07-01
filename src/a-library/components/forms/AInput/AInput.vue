<script setup lang="ts">
import {
  iAInputableEmits,
  iAInputablePropDefaults,
} from "@/a-library/components/forms/mixins/AInputable/IAInputable";
import type { IAInputableProps } from "@/a-library/components/forms/mixins/AInputable/IAInputable";

export interface Props extends IAInputableProps {
  type?: 'text' | 'number'
}
withDefaults(defineProps<Props>(), {
  ...iAInputablePropDefaults,
  type: 'text'
});

// defineOptions({
//   inheritAttrs: false,
// });

const model = defineModel();

defineEmits([...iAInputableEmits]);
</script>

<template>
  <AInputControl
    :label="label"
    :hideLabel="hideLabel"
    :hideHint="hideHint"
    class="a-input"
    :errorMessages="errorMessages"
  >
    <input
        :type="type"
        :name="name"
        v-model="model"
        class="a-input__input"
    />
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

<script setup lang="ts">
import { } from 'vue'
import {
  iAInputableEmits,
  iAInputablePropDefaults,
} from "@/a-library/components/forms/mixins/AInputable/IAInputable";
import type { IAInputableProps } from "@/a-library/components/forms/mixins/AInputable/IAInputable";

export interface Props extends IAInputableProps {
  options: string[] | number [] | object[]
  optionObjectFieldTitle?: string,
  optionObjectFieldValue?: string,
  returnObject?: boolean
  hideSearch?: boolean
  multiple?: boolean
}
withDefaults(defineProps<Props>(), {
  ...iAInputablePropDefaults,
  options: ()=>[],
  optionObjectFieldTitle: 'title',
  optionObjectFieldValue: 'id',
  returnObject: false,
  hideSearch: false,
  multiple: false

});


</script>

<template>
  <div class="a-multi-select">
    im multiselect
  </div>
</template>

<style scoped>
.a-multi-select {}
</style>

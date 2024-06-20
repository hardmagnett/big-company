<script setup lang="ts">
import {} from "vue";
import {
  iDialogableEmits,
  iDialogablePropDefaults,
} from "@/app/component-interfaces/IDialogable";
import type { IDialogableProps } from "@/app/component-interfaces/IDialogable";

defineEmits([...iDialogableEmits]);

export interface Props extends IDialogableProps {}
withDefaults(defineProps<Props>(), {
  ...iDialogablePropDefaults,
});
</script>

<template>
  <div class="employee-dialog-delete">
    <ADialog
      remainOnEsc
      remainOnClickOutside
      text-header="Удаление сотрудника"
      textApply="Удалить"
      cssClassApply="a-btn--error"
      :isOpen="isOpen"
      @needToClose="$emit('needToClose')"
      @apply="$emit('apply')"
    >
      <p>Действительно удалить сотрудника -=Имя Фамилия=-?</p>
    </ADialog>
  </div>
</template>

<style scoped>
.employee-dialog-delete {
}
</style>

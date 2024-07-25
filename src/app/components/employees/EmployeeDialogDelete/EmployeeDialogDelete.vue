<script setup lang="ts">
import {} from "vue";
import {
  iDialogableEmits,
  iDialogablePropDefaults,
} from "@/app/component-interfaces/IDialogable";
import type { IDialogableProps } from "@/app/component-interfaces/IDialogable";
import type Employee from "@/app/models/employee/Employee";

defineEmits([...iDialogableEmits]);

export interface Props extends IDialogableProps {
  employee: Employee,
}
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
      <p>Действительно удалить сотрудника "{{employee.fullname}}"?</p>
    </ADialog>
  </div>
</template>

<style scoped>
.employee-dialog-delete {
}
</style>

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
  <div class="employee-dialog-add-edit">
    <ADialog
      remainOnEsc
      remainOnClickOutside
      text-header="Создание/Редактирование сотрудника"
      textApply="Создать/Редактировать"
      :isOpen="isOpen"
      @needToClose="$emit('needToClose')"
      @apply="$emit('apply')"
    >
      <AInput placeholder="Имя" class="mod--mb-1"></AInput>
      <AInput placeholder="Фамилия"></AInput>
    </ADialog>
  </div>
</template>

<style scoped>
.employee-dialog-add-edit {
}
</style>

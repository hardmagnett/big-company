<script setup lang="ts">
import { } from 'vue'

// todo:: в гисты как я делал один интерфейс для разных компонентов. ЭТОГО НИГДЕ НЕТ!!! Я САМ ВЫДУМЫВАЛ!!!

import {iDialogableEmits, iDialogablePropDefaults} from '@/app/component-interfaces/IDialogable';
import type {IDialogableProps} from '@/app/component-interfaces/IDialogable';

defineEmits([...iDialogableEmits])

export interface Props extends IDialogableProps {}
withDefaults(defineProps<Props>(), {
  ...iDialogablePropDefaults
})

</script>

<template>
  <div class="employee-dialog-delete">
    <p>{{delmeString}}</p>
    <ADialog
        remainOnEsc
        remainOnClickOutside
        text-header="Удаление сотрудника"
        textApply="Удалить"
        cssClassApply="btn--error"

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

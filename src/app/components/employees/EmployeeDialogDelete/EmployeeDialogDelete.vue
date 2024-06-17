<script setup lang="ts">
import { } from 'vue'

// todo:: в миксин
const emit = defineEmits(['needToClose', 'apply'])

export interface Props {
  isOpen: boolean,  // todo:: в миксин
}
const props = withDefaults(defineProps<Props>(), {

})

</script>

<template>
  <div class="employee-dialog-delete">
    <p>employee-dialog-delete</p>
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
  /*outline: 1px solid darkred;*/
  background: #aff;
}
</style>

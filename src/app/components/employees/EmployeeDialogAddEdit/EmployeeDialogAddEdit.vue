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
      <!--<br>-->
      <AInput placeholder="Фамилия"></AInput>
    </ADialog>
  </div>
</template>

<style scoped>
.employee-dialog-add-edit {
}
</style>

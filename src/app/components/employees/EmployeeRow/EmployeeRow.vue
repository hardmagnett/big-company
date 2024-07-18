<script setup lang="ts">
import type Employee from "@/app/models/employee/Employee";

const emit = defineEmits(["needToDeleteEmployee", "needToEditEmployee"]);

export interface Props {
  employee: Employee;
}
withDefaults(defineProps<Props>(), {});
</script>

<template>
  <tr class="employee-row">
    <td class="mod--ellipsis-one-line-on-table-cell">
      <!--todo::убрать потом id-->
      {{ employee.id }}
      {{ employee.fullname }}
    </td>
    <td class="mod--ellipsis-one-line-on-table-cell">
      {{ employee.position?.title }}
    </td>
    <td class="employee-row__buttons">
      <ABtn icon @click="emit('needToEditEmployee')"
        ><AIcon icon="mdi-pencil"
      /></ABtn>
      <ABtn icon class="a-btn--error" @click="emit('needToDeleteEmployee')"
        ><AIcon icon="mdi-delete"
      /></ABtn>
    </td>
  </tr>
</template>

<style scoped>
.employee-row {
  .employee-row__buttons {
    padding: 0;
  }
}
</style>

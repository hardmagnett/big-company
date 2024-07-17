<script setup lang="ts">
import EmployeeRow from "@/app/components/employees/EmployeeRow/EmployeeRow.vue";
import { useEmployeesStore } from "@/app/stores/employee";
import { storeToRefs } from "pinia";
const employeesStore = useEmployeesStore();
const { paginatedEmployees } = storeToRefs(employeesStore);

defineEmits(["needToDeleteEmployee", "needToEditEmployee"]);
</script>

<template>
  <ATable class="employees-table a-table--fixed-header">
    <thead>
      <tr>
        <th>Сотрудник</th>
        <th>Должность</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <EmployeeRow
        v-for="employee in paginatedEmployees"
        :employee="employee"
        @needToDeleteEmployee="$emit('needToDeleteEmployee')"
        @needToEditEmployee="$emit('needToEditEmployee')"
        :key="employee.id"
      />
    </tbody>
  </ATable>
</template>

<style scoped>
.employees-table {
}
</style>

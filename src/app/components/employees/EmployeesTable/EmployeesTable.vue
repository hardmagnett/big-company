<script setup lang="ts">
import EmployeeRow from "@/app/components/employees/EmployeeRow/EmployeeRow.vue";

defineEmits(["needToDeleteEmployee", "needToEditEmployee"]);
</script>

<template>
  <ATable class="employees-table a-table--fixed-header">
    <thead>
      <tr>
        <th>Сотрудник</th>
        <th v-if="$responsiveVariables.isSmOrMore">Количество задач</th>
        <th v-if="!$responsiveVariables.isSmOrMore">Задач</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <EmployeeRow
        @needToDeleteEmployee="$emit('needToDeleteEmployee')"
        @needToEditEmployee="$emit('needToEditEmployee')"
        :key="n"
        v-for="n in 30"
      />
    </tbody>
  </ATable>
</template>

<style scoped>
.employees-table {
}
</style>

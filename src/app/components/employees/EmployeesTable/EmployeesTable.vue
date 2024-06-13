<script setup lang="ts">
import EmployeeRow from "@/app/components/employees/EmployeeRow/EmployeeRow.vue";
</script>

<template>
  <ATable class="employees-table a-table--fixed-header">
    -={{$responsiveVariables.isMdOrMore()}}=-
    <thead>
    <tr>
      <th>Сотрудник</th>
      <th v-if="$responsiveVariables.isMdOrMore()">Количество задач</th>
      <th v-if="!$responsiveVariables.isMdOrMore()">Задач</th>
      <th></th>
    </tr>
    </thead>
    <tbody>
    <!--v-for="n in 30"-->
    <EmployeeRow
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

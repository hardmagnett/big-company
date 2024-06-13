<script setup lang="ts">
import EmployeeRow from "@/app/components/employees/EmployeeRow/EmployeeRow.vue";
</script>

<template>

  <!--<ATable style="height: 200px" class="a-table&#45;&#45;fixed-header">-->
  <!--style="height: 200px"-->
  <ATable class="employees-table a-table--fixed-header">
    <thead>
    <tr>
      <th>Сотрудник</th>
      <th>Количество задач</th>
      <!--<th style="width: 40px;"></th>-->
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

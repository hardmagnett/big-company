<script setup lang="ts">
import EmployeeRow from "@/app/components/employees/EmployeeRow/EmployeeRow.vue";
</script>

<template>

  <!--<ATable style="height: 200px" class="a-table&#45;&#45;fixed-header">-->
  <!--style="height: 200px"-->
  <ATable class="employees-table a-table--fixed-header">
    <thead>
    <tr>
      <th>Колонка 01</th>
      <th>Колонка 02</th>
    </tr>
    </thead>
    <tbody>
    <!--<tr v-for="n in 30" :key="n">-->
    <!--  <td>Колонка 01</td>-->
    <!--  <td>Колонка 02</td>-->
    <!--</tr>-->
    <!--class="mod&#45;&#45;basis-for-column-flex-item"-->
    <EmployeeRow
        :key="n"
        v-for="n in 30"
    />
    </tbody>
  </ATable>
  <!--<div class="employees-table">-->
  <!--  <EmployeeRow-->
  <!--    class="mod&#45;&#45;basis-for-column-flex-item"-->
  <!--    :key="n"-->
  <!--    v-for="n in 30"-->
  <!--  />-->
  <!--</div>-->
</template>

<style scoped>
.employees-table {
}
</style>

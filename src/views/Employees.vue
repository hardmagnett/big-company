<script setup lang="ts">
import HeaderAndSomethingElse from '@/components/app/shared/positioning/HeaderAndSomethingElse.vue';
import EmployeesTable from '@/components/app/employees/EmployeesTable.vue';



</script>

<template>
  <div class="home-view">
    <HeaderAndSomethingElse>
      <template v-slot:left>
        <h1>Сотрудники</h1>
      </template>
      <template v-slot:right>
        <!--:to="{name: 'noteAdd'}"-->
        <btn>
          Создать
        </btn>
      </template>
    </HeaderAndSomethingElse>


    <div class="clear-both"></div>
    <EmployeesTable />
  </div>
</template>

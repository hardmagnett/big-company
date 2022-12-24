<script setup lang="ts">
import HeaderAndSomethingElse from '@/app/components/shared/positioning/HeaderAndSomethingElse/HeaderAndSomethingElse.vue';
import EmployeesTable from '@/app/components/employees/EmployeesTable/EmployeesTable.vue';

</script>

<template>
  <div class="home-view">
    <HeaderAndSomethingElse>
      <template v-slot:left>
        <h1>Сотрудники</h1>
      </template>
      <template v-slot:right>

        <ABtn
          :to="{name: 'employeeCreate'}"
        >
          Создать
        </ABtn>
      </template>
    </HeaderAndSomethingElse>


    <div class="mod--clear-both"></div>
    <EmployeesTable />
  </div>
</template>

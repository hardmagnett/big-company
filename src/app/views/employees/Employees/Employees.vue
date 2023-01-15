<script setup lang="ts">
import HeaderAndSomethingElse from '@/app/components/shared/positioning/HeaderAndSomethingElse/HeaderAndSomethingElse.vue';
import EmployeesTable from '@/app/components/employees/EmployeesTable/EmployeesTable.vue';
import AIcon from "@/a-library/components/typo/AIcon/AIcon.vue";
// export default {
//   components: {AIcon}
// }


</script>

<template>
  <div class="home-view">

    <Teleport to="#page-header-place">
      <APageHeader>
        Сотрудники
      </APageHeader>
    </Teleport>
    <ABtn
        :to="{name: 'employeeCreate'}"
    >
      <AIcon icon="mdi-plus-circle-outline"></AIcon> Создать
    </ABtn>
    <br>

    <div class="mod--clear-both"></div>
    <EmployeesTable />
  </div>
</template>

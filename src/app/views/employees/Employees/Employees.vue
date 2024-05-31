<script setup lang="ts">
import HeaderAndSomethingElse from '@/app/components/shared/positioning/HeaderAndSomethingElse/HeaderAndSomethingElse.vue';
import EmployeesTable from '@/app/components/employees/EmployeesTable/EmployeesTable.vue';
import AIcon from "@/a-library/components/typo/AIcon/AIcon.vue";
// export default {
//   components: {AIcon}
// }


</script>

<template>
  <div class="employees">
    <Teleport to="#page-header-place">
      <APageHeader>
        Сотрудники
      </APageHeader>
    </Teleport>
    <ABtn>
      <AIcon icon="mdi-plus-circle-outline"></AIcon> Создать
    </ABtn>
    <br>

    <div class="mod--clear-both"></div>
    <!--Здесь ещё будет компонент-фильтр. Поэтому,чтобы не нагромождать,employeesTable сделано отдельным компонентом.-->
    <EmployeesTable />
  </div>
</template>

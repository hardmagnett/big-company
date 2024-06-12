<script setup lang="ts">
import EmployeesTable from "@/app/components/employees/EmployeesTable/EmployeesTable.vue";
import AIcon from "@/a-library/components/typo/AIcon/AIcon.vue";
</script>

<template>
  <div class="employees">
    <Teleport to="#page-header-place">
      <APageHeader> Сотрудники </APageHeader>
    </Teleport>
    <div class="employees__add-and-qty mod--mb-half">
      <ABtn> <AIcon icon="mdi-plus-circle-outline"></AIcon> Создать </ABtn>
      <p class="mod--mt-0 mod--mb-0">
        Найдено: <span class="employees__qty-number">1</span>
      </p>
    </div>

    <!--<br />-->

    <!--<div class="mod&#45;&#45;clear-both"></div>-->
    <!--Здесь ещё будет компонент-фильтр. Поэтому,чтобы не нагромождать,employeesTable сделано отдельным компонентом.-->
    <EmployeesTable class="mod--cool-scrollbar" />
  </div>
</template>
<style scoped>
.employees {
  /*flex: 0 0 auto;*/
  display: flex;
  flex-flow: column nowrap;
  > * {
    flex: 0 0 auto;
  }

  overflow-y: auto;
  .employees__add-and-qty {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    .employees__qty-number {
      display: inline-block;
      width: 55px;
      text-align: right;
    }
  }
  .employees-table {
    flex: 1 1 auto;
    overflow-y: auto;

    /*outline: 1px solid darkred;*/
    /*background-color: #aff;*/
  }
}
</style>

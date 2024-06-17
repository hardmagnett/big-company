<script setup lang="ts">
import EmployeesTable from "@/app/components/employees/EmployeesTable/EmployeesTable.vue";
import AIcon from "@/a-library/components/typo/AIcon/AIcon.vue";
import { ref } from "vue";
import EmployeeDialogDelete from "@/app/components/employees/EmployeeDialogDelete/EmployeeDialogDelete.vue";
import EmployeeDialogAddEdit from "@/app/components/employees/EmployeeDialogAddEdit/EmployeeDialogAddEdit.vue";

let isOpenDialogEmployeeDeleting = ref(false);
let isOpenDialogEmployeeCreatingEditing = ref(false);

const needToDeleteEmployeeHandler = () => {
  isOpenDialogEmployeeDeleting.value = true;
};

const needToEditEmployeeHandler = () => {
  isOpenDialogEmployeeCreatingEditing.value = true;
};

const needToCreateEmployeeHandler = () => {
  isOpenDialogEmployeeCreatingEditing.value = true;
};

const deleteEmployee = () => {
  isOpenDialogEmployeeDeleting.value = false;
};
const createEditEmployee = () => {
  isOpenDialogEmployeeCreatingEditing.value = false;
};
</script>

<template>
  <div class="employees">
    <Teleport to="#page-header-place">
      <APageHeader> Сотрудники </APageHeader>
    </Teleport>
    <div class="employees__add-and-qty mod--mb-half">
      <ABtn @click="needToCreateEmployeeHandler">
        <AIcon icon="mdi-plus-circle-outline"></AIcon> Создать
      </ABtn>
      <p class="mod--mt-0 mod--mb-0">
        Найдено: <span class="employees__qty-number">1</span>
      </p>
    </div>

    <EmployeeDialogDelete
      :is-open="isOpenDialogEmployeeDeleting"
      @needToClose="isOpenDialogEmployeeDeleting = false"
      @apply="deleteEmployee"
    ></EmployeeDialogDelete>
    <EmployeeDialogAddEdit
      :is-open="isOpenDialogEmployeeCreatingEditing"
      @needToClose="isOpenDialogEmployeeCreatingEditing = false"
      @apply="createEditEmployee"
    ></EmployeeDialogAddEdit>

    <!--Здесь ещё будет компонент-фильтр. Поэтому,чтобы не нагромождать,employeesTable сделано отдельным компонентом.-->
    <EmployeesTable
      class="mod--cool-scrollbar"
      @needToDeleteEmployee="needToDeleteEmployeeHandler"
      @needToEditEmployee="needToEditEmployeeHandler"
    />
  </div>
</template>
<style scoped>
.employees {
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
  }
}
</style>

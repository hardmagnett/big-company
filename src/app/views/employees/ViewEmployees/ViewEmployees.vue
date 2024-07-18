<script setup lang="ts">
import EmployeesTable from "@/app/components/employees/EmployeesTable/EmployeesTable.vue";
import AIcon from "@/a-library/components/typo/AIcon/AIcon.vue";
import { onBeforeMount, reactive, ref } from "vue";
import EmployeeDialogDelete from "@/app/components/employees/EmployeeDialogDelete/EmployeeDialogDelete.vue";
import EmployeeDialogAddEdit from "@/app/components/employees/EmployeeDialogAddEdit/EmployeeDialogAddEdit.vue";
import { globalProperties } from "@/main";
import EmployeesFilter, {
  type FilterEmployees,
} from "@/app/components/employees/EmployeesFilter/EmployeesFilter.vue";
import { usePositionsStore } from "@/app/stores/position";
import { useEmployeesStore } from "@/app/stores/employee";
import { storeToRefs } from "pinia";
import APageHeaderWithTeleport from "@/a-library/components/layout/APageHeaderWithTeleport/APageHeaderWithTeleport.vue";
const positionsStore = usePositionsStore();
const { fetchAllPositions } = positionsStore;
const employeesStore = useEmployeesStore();
const { totalPaginatedEmployeesQty } = storeToRefs(employeesStore);

let isOpenDialogEmployeeDeleting = ref(false);
let isOpenDialogEmployeeCreatingEditing = ref(false);

let filter = reactive({
  query: "",
  positionsIds: [] as number[],
});

let filterUpdatesQtyKey = ref(0);


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
  globalProperties.$toast({
    message: "Сотрудник удален",
    type: "error",
  });
};
const createEditEmployee = () => {
  isOpenDialogEmployeeCreatingEditing.value = false;

  globalProperties.$toast({
    message: "Сотрудник добавлен/отредактирован",
  });
};
const updateWholeFilter = (newFilter: FilterEmployees) => {
  Object.assign(filter, newFilter);
};
onBeforeMount(() => {
  fetchAllPositions();
});
</script>

<template>
  <div class="employees">
    <APageHeaderWithTeleport text="Сотрудники" />
    <div class="employees__add-and-qty mod--mb-half">
      <ABtn @click="needToCreateEmployeeHandler">
        <AIcon icon="mdi-plus-circle-outline"></AIcon> Создать
      </ABtn>
      <p class="mod--mt-0 mod--mb-0">
        Найдено:
        <!--todo:: сделать этот span поуже. У меня ведь будет максимум 5000 записей-->
        <span class="employees__qty-number">
          {{ totalPaginatedEmployeesQty }}
        </span>
      </p>
    </div>

    <EmployeesFilter
      :filter="filter"
      @needToUpdateWholeFilter="updateWholeFilter"
      :key="filterUpdatesQtyKey"
    />

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

    <EmployeesTable
      :filter="filter"
      @needToDeleteEmployee="needToDeleteEmployeeHandler"
      @needToEditEmployee="needToEditEmployeeHandler"
    />
  </div>
</template>
<style scoped>
.employees {
  display: flex;
  flex-flow: column nowrap;

  /*Чтобы таблица растягивалась на всю высоту, даже если у неё недостаточно записей*/
  /*Чтобы лоадер можно было разместить по центру*/
  flex: 1 1 auto; 
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
  .employees-filter {
    flex: 0 0 auto;
  }
}
</style>

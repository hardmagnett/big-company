<script setup lang="ts">
import EmployeesTable from "@/app/components/employees/EmployeesTable/EmployeesTable.vue";
import AIcon from "@/a-library/components/typo/AIcon/AIcon.vue";
import { onBeforeMount, reactive, ref, watch } from "vue";
import EmployeeDialogDelete from "@/app/components/employees/EmployeeDialogDelete/EmployeeDialogDelete.vue";
import EmployeeDialogAddEdit from "@/app/components/employees/EmployeeDialogAddEdit/EmployeeDialogAddEdit.vue";
import { globalProperties } from "@/main";
import EmployeesFilter, {
  type FilterEmployees,
} from "@/app/components/employees/EmployeesFilter/EmployeesFilter.vue";
import {usePositionsStore} from '@/app/stores/position';
import {useEmployeesStore} from '@/app/stores/employee';
const positionsStore = usePositionsStore()
const employeesStore = useEmployeesStore()
const {fetchAllPositions} = positionsStore
const {fetchPaginatedEmployees} = employeesStore

let isOpenDialogEmployeeDeleting = ref(false);
let isOpenDialogEmployeeCreatingEditing = ref(false);

let filter = reactive({
  query: "",
  positionsIds: [] as number[],
});
let filterUpdatesQtyKey = ref(0);

const filterChangeHandler = () => {};

let watchFilter = () => {
  return watch(filter, () => {
    filterChangeHandler();
  });
};

let unwatchFilter = watchFilter();

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
  unwatchFilter();
  filter = newFilter;

  filterUpdatesQtyKey.value++;
  unwatchFilter = watchFilter();
  filterChangeHandler();
};
onBeforeMount(() => {
  fetchAllPositions();
  fetchPaginatedEmployees({
    // todo:: сюда ещё фильтр передавать нужно будет
    page: 1,
  });
});
</script>

<template>
  <div class="employees">
    <!--<p>{{filter}}</p>-->
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
      class=""
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
  .employees-filter {
    flex: 0 0 auto;
  }
}
</style>

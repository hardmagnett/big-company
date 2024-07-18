<script setup lang="ts">
import EmployeeRow from "@/app/components/employees/EmployeeRow/EmployeeRow.vue";
import { useEmployeesStore } from "@/app/stores/employee";
import { storeToRefs } from "pinia";
import {onBeforeMount, ref, watch} from "vue";
import AInfinity from "@/a-library/components/other/AInfinity/AInfinity.vue";
const employeesStore = useEmployeesStore();
const { paginatedEmployees, totalPaginatedEmployeesQty } = storeToRefs(employeesStore);
const { fetchPaginatedEmployees, clearPagination } = employeesStore;
import type {StateHandler} from '@/a-library/components/other/AInfinity/AInfinity.vue';
import type {FilterEmployees} from "@/app/components/employees/EmployeesFilter/EmployeesFilter.vue";


defineEmits(["needToDeleteEmployee", "needToEditEmployee"]);

export interface Props {
  filter: FilterEmployees;
}
const props = withDefaults(defineProps<Props>(), {});

let pageNumber = ref(1)
let infinityResetId = ref(0)

watch(
    props.filter,
    (newVal) => {
      // console.log(newVal); console.log('^...newVal:')
      pageNumber.value = 1
      clearPagination()
      infinityResetId.value++
    }
)


const loadMore = async ($state: StateHandler)=>{
  
  await fetchPaginatedEmployees({
    page: pageNumber.value,
    filter: props.filter
  });

  if (paginatedEmployees.value.length === totalPaginatedEmployeesQty.value) {
    $state.completed();
  }
  else {
    $state.loaded();
  }
  pageNumber.value++
}


onBeforeMount(() => {});
</script>

<template>
  <ATable class="employees-table a-table--fixed-header">
    <thead>
      <tr>
        <th>Сотрудник</th>
        <th>Должность</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <EmployeeRow
        v-for="employee in paginatedEmployees"
        :employee="employee"
        @needToDeleteEmployee="$emit('needToDeleteEmployee')"
        @needToEditEmployee="$emit('needToEditEmployee')"
        :key="employee.id"
      />
    </tbody>

    <template #appendRoot>
      <AInfinity
          :resetId="infinityResetId"
          @needToLoadMore="loadMore"
      />
    </template>
    
  </ATable>
</template>

<style scoped>
.employees-table {
  /*background-color: #aff;*/
  /*outline: 1px solid darkred;*/
  
  .a-infinity {
    flex: 1 1 auto;
  }
}
</style>

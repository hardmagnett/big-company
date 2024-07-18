<script setup lang="ts">
import EmployeeRow from "@/app/components/employees/EmployeeRow/EmployeeRow.vue";
import { useEmployeesStore } from "@/app/stores/employee";
import { storeToRefs } from "pinia";
import {onBeforeMount, ref, watch} from "vue";
import AInfinity from "@/a-library/components/other/AInfinity/AInfinity.vue";
const employeesStore = useEmployeesStore();
const { paginatedEmployees, totalPaginatedEmployeesQty } = storeToRefs(employeesStore);
const { fetchPaginatedEmployees } = employeesStore;
import type {StateHandler} from '@/a-library/components/other/AInfinity/AInfinity.vue';
import type {FilterEmployees} from "@/app/components/employees/EmployeesFilter/EmployeesFilter.vue";


defineEmits(["needToDeleteEmployee", "needToEditEmployee"]);

export interface Props {
  filter: FilterEmployees;
}
const props = withDefaults(defineProps<Props>(), {});

watch(
    // () => props.filter,
    props.filter,
    (newVal) => {
      console.log(newVal); console.log('^...newVal:')  
    }
)

let pageNumber = ref(1)
const loadMore = async ($state: StateHandler)=>{
  // if (paginatedEmployees.value.length === totalPaginatedEmployeesQty.value) {
  //   return
  // }
  
  await fetchPaginatedEmployees({
    // todo:: сюда ещё фильтр передавать нужно будет
    page: pageNumber.value,
  });
  // console.log(paginatedEmployees.value.length); console.log('^...paginatedEmployees.value.length:') 

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
          @needToLoadMore="loadMore"
      />
    </template>
    
  </ATable>
</template>

<style scoped>
.employees-table {
}
</style>

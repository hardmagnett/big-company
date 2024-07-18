<script setup lang="ts">
import EmployeeRow from "@/app/components/employees/EmployeeRow/EmployeeRow.vue";
import { useEmployeesStore } from "@/app/stores/employee";
import { storeToRefs } from "pinia";
import {onBeforeMount, ref} from "vue";
import AInfinity from "@/a-library/components/other/AInfinity/AInfinity.vue";
const employeesStore = useEmployeesStore();
const { paginatedEmployees } = storeToRefs(employeesStore);
const { fetchPaginatedEmployees } = employeesStore;

defineEmits(["needToDeleteEmployee", "needToEditEmployee"]);

let pageNumber = ref(1)
const loadMore = ()=>{
  pageNumber.value++
  // todo:: дубли загрузки. Вынести куда-то.
  fetchPaginatedEmployees({
    // todo:: сюда ещё фильтр передавать нужно будет
    page: pageNumber.value,
  });
}


onBeforeMount(() => {
  fetchPaginatedEmployees({
    // todo:: сюда ещё фильтр передавать нужно будет
    page: pageNumber.value,
  });
});
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

      />
    </template>
    
  </ATable>
</template>

<style scoped>
.employees-table {
}
</style>

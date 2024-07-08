<script setup lang="ts">




import { computed, ref, onBeforeMount } from "vue";
import localStorageService from "@/a-library/helpers/DOM/localStorageService";
import debounce from "@/a-library/helpers/language/functions/debounce";
// import type FilterEmployees from "@/app/components/employees/EmployeesFilter/FilterEmployees";

type FilterEmployees = {
  query: string
}
//////// Props
export interface Props {
  filter: FilterEmployees;
  // filter: string
}
const props = withDefaults(defineProps<Props>(), {});

let isFilterHidden = ref(false);

let filterInner = computed(()=>{
  return props.filter
})

const filterIcon = computed(() => {
  return isFilterHidden.value ? "mdi-filter-outline" : "mdi-filter";
});
const toggleFilterVisibility = () => {
  isFilterHidden.value = !isFilterHidden.value;
  localStorageService.setItem(
    "filter-employees-isHidden",
    isFilterHidden.value,
  );
};
const setFilterVisibilityBasedOnLocalStorage = () => {
  const isFilterHiddenFromStorage = localStorageService.getItem(
    "filter-employees-isHidden",
    false,
  );
  isFilterHidden.value = isFilterHiddenFromStorage;
};

const updateQuery = debounce((eventData:string) => {
  filterInner.value.query = eventData
}, 500)

onBeforeMount(() => {
  setFilterVisibilityBasedOnLocalStorage();
});
</script>

<template>

  <div
    class="employees-filter am-cols"
    :class="{ 'employees-filter--hidden': isFilterHidden }"
  >

    <Teleport to="#teleport-debug">
      <pre>
        {{filter}}
      </pre>
    </Teleport>


    <Teleport to="#page-header-filter-icon-place">
      <ABtn icon @click="toggleFilterVisibility"
        ><AIcon :icon="filterIcon"
      /></ABtn>
    </Teleport>

    <AInput
      autofocus
      class="am-col-12 am-col-sm-6"
      label="Имя"
      :model-value="filterInner.query"
      @update:model-value="updateQuery"
      hide-hint
    ></AInput>
    <AInput
      autofocus
      class="am-col-12 am-col-sm-6"
      label="Отдел"
      hide-hint
    ></AInput>
  </div>
</template>

<style scoped>
.employees-filter {
  /*todo:: вернуть 120*/
  max-height: 120px;
  /*max-height: 800px;*/
  overflow-y: hidden;
  transition: max-height var(--time-short) ease-in;
  /*transition: max-height var(--time-short) var(--transition-extra-easy-in);*/
  will-change: max-height;

  &.employees-filter--hidden {
    max-height: 0;
    transition: max-height var(--time-short) var(--transition-extra-easy-out);
  }
}
</style>

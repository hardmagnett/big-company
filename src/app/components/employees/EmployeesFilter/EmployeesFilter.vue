<script setup lang="ts">
import { computed, ref, onBeforeMount, reactive } from "vue";
import localStorageService from "@/a-library/helpers/DOM/localStorageService";
import debounce from "@/a-library/helpers/language/functions/debounce";
import deepEqual from "@/a-library/helpers/language/functions/deepEqual";

type FilterEmployees = {
  query: string;
};

let filterInitial = reactive<FilterEmployees>({
  query: "",
});

//////// Props
export interface Props {
  filter: FilterEmployees;
  // filter: string
}
const props = withDefaults(defineProps<Props>(), {});

let isFilterHidden = ref(false);

let filterInner = computed(() => {
  return props.filter;
});

const filterIcon = computed(() => {
  return isFilterHidden.value ? "mdi-filter-outline" : "mdi-filter";
});

const isFilterChanged = computed(() => {
  return !deepEqual(props.filter, filterInitial);
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

const updateQuery = debounce((eventData: string) => {
  filterInner.value.query = eventData;
});

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
        {{ filter }}
        {{ filterInitial }}
      </pre>
      <pre>
        {{ isFilterChanged }}
      </pre>
    </Teleport>

    <Teleport to="#page-header-filter-icon-place">
      <ABtn
        icon
        @click="toggleFilterVisibility"
        :class="{ 'a-btn--danger': isFilterChanged }"
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
  max-height: 120px;
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

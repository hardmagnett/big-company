<script setup lang="ts">
    import {computed, ref, onBeforeMount} from "vue";
    import localStorageService from '@/a-library/helpers/DOM/localStorageService';


    let isFilterHidden = ref(false)

    const filterIcon = computed(() => {
    return isFilterHidden.value ? 'mdi-filter-outline' : "mdi-filter";
  });
    const toggleFilterVisibility = () => {
    isFilterHidden.value = !isFilterHidden.value
    localStorageService.setItem('filter-employees-isHidden', isFilterHidden.value)

  }
  const setFilterVisibilityBasedOnLocalStorage = () => {
    const isFilterHiddenFromStorage = localStorageService.getItem('filter-employees-isHidden', false)
    isFilterHidden.value = isFilterHiddenFromStorage
  }
  onBeforeMount(()=>{
    setFilterVisibilityBasedOnLocalStorage()
  })
  </script>

  <template>
  <div class="employees-filter am-cols"
  :class="{'employees-filter--hidden': isFilterHidden}"
  >
  <Teleport to="#page-header-filter-icon-place">
  <ABtn icon @click="toggleFilterVisibility"
  ><AIcon :icon="filterIcon"
  /></ABtn>
  </Teleport>

  <!--v-model="formPartPersonalData.name"-->
  <!--@blur="v$.name.$touch"-->
  <!--:error-messages="v$.name.$errors.map((e) => e.$message)"-->
  <AInput
  autofocus
  class="am-col-12 am-col-sm-6"
  label="Имя"
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
    will-change: max-height;

    &.employees-filter--hidden {

      max-height: 0;
      transition: max-height var(--time-short) ease-out;
  }
}
</style>

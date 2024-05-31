<template>
  <div class="employees-table">
    <EmployeeRow
        class="mod--basis-for-column-flex-item"
        :key="n" v-for="n in 30"
    />
  </div>
</template>

<script setup lang="ts">
import EmployeeRow from '@/app/components/employees/EmployeeRow/EmployeeRow.vue';

</script>

<style scoped>
  .employees-table {
  }
</style>

<template>
  <div class="employees-table">
    <!--<p>heere</p>-->
    <EmployeeRow
        class="mod--basis-for-column-flex-item"
        :key="n" v-for="n in 30"
    />
  </div>
</template>

<script setup lang="ts">
import EmployeeRow from '@/app/components/employees/EmployeeRow/EmployeeRow.vue';

</script>

<style scoped lang="scss">

  .employees-table {
    display: flex;
    flex-flow: row wrap;
    gap: var(--gap);
    //gap: $gap;
    //gap: 0;

    .employee-row {
      //flex: 0 1 100%;
      //flex: 0 0 auto;
      --flex-items-qty: 1;
      @container style(--pb-sx-or-more) {
        --flex-items-qty: 1;
      }
      @container style(--bp-md-or-more) {
        --flex-items-qty: 2;
      }
      @container style(--bp-lg-or-more) {
        --flex-items-qty: 3;
      }
      @container style(--bp-xl-or-more) {
        --flex-items-qty: 4;
      }
    }
  }
</style>

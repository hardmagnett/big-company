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
      @media (min-width: $bpSm) {
        --flex-items-qty: 2;
        //@include flexItemBasis(2);
        //flex-basis: 100%;
      }

      @media (min-width: $bpMd) {
        --flex-items-qty: 2;
        //@include flexItemBasis(2);
        //flex-basis: 50%;
        //max-width: 50%;
        //outline: 1px solid darkred;
      }
      @media (min-width: $bpLg) {
        //flex-basis: 50%;
        //calc()
        //@include flexItemBasis(3);
        --flex-items-qty: 3;
        //flex-basis: 33%;
      }

      @media (min-width: $bpXl) {
        //@include flexItemBasis(4);
        --flex-items-qty: 4;
        //flex-basis:  25%;



        //flex-basis: 100px;
        //@include flexItemBasis(3, var(--gap));
        //@include flexItemWidthAndMargin(4, $gap);
      }

    }
  }
</style>

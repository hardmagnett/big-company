<template>
  <div class="employees-table">
    <!--<p>heere</p>-->
    <EmployeeRow :key="n" v-for="n in 30" />
  </div>
</template>

<script setup lang="ts">
import EmployeeRow from '@/components/app/employees/EmployeeRow.vue';

</script>

<style scoped lang="scss">

  .employees-table {
    display: flex;
    flex-flow: row wrap;
    gap: var(--gap);

    .employee-row {
      flex: 0 0 100%;

      @media (min-width: $bpMd) {
        @include flexItemBasis(2, 16px);
      }
      @media (min-width: $bpLg) {
        //flex-basis: 50%;
        //calc()
        @include flexItemBasis(3, 16px);
      }

      @media (min-width: $bpXl) {
        @include flexItemBasis(4, 16px);
        //@include flexItemBasis(3, var(--gap));
        //@include flexItemWidthAndMargin(4, $gap);
      }

    }
  }
</style>

<!--<script setup lang="ts">-->
<!--import { } from 'vue'-->

<!--</script>-->

<template>
  <table class="a-table">
    <slot></slot>
  </table>
</template>

<style scoped>
.a-table {
  width: 100%;

  /*Чтобы убрать всякие отступы между ячейками*/
  border-spacing: 0;
  border-collapse: collapse;

  :slotted(tr) {
    :slotted(th){
      font-weight: var(--font-weight-bold);
    }
    :slotted(th), :slotted(td) {
      padding: calc(var(--gap) / 2) var(--gap);
      text-align: left;
      border-bottom: 1px solid var(--clr-border-blue-lighter);
      font-size: var(--font-size-small)
    }
  }
  :slotted(tr:not(thead):hover) {
      background-color: var(--clr-bg-blue-small);
  }
}
</style>

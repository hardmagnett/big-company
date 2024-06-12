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
    /*border-top: 1px solid green;*/
    /*border-left: 1px solid red;*/
    /*border-spacing: 0;*/
    /*background-color: red;*/
    /*:slotted(td, th) {*/
    :slotted(th), :slotted(td) {
      /*border-spacing: 0;*/
      padding: var(--gap);
      text-align: left;
      /*background-color: #aff;*/
      border-bottom: 1px solid orange;
    }
  }
}
</style>

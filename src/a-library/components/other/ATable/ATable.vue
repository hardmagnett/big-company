<!--<script setup lang="ts">-->
<!--import { } from 'vue'-->

<!--</script>-->

<template>
  <div class="a-table mod--cool-scrollbar">
    <table>
      <slot></slot>
    </table>
  </div>
</template>

<style scoped>
.a-table {
  overflow-y: auto;

  table {
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

  &.a-table--fixed-header {
    outline: 1px solid darkred;
    table {
      :slotted(thead) {
        /*background-color: #aff;*/

        position: sticky;
        top: 0;
        z-index: 2;
      }
    }
  }
}
</style>
<script setup lang="ts">
</script>

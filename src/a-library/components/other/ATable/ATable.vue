<script setup lang="ts">
</script>


<template>
  <div class="a-table mod--cool-scrollbar">
    <table>
      <slot></slot>
    </table>
  </div>
</template>

<!--todo:: вернуть scoped-->
<style scoped>
.a-table {
  overflow-y: auto;

  table {
    width: 100%;

    /*Нужна чтобы цветом перекрывать задний фон при фиксированной шапке.*/
    --background-color: var(--clr-bg-blue-big);

    --border-color: var(--clr-border-blue-lighter);


    background-color: var(--background-color);

    /*Чтобы убрать всякие отступы между ячейками*/
    border-spacing: 0;
    border-collapse: collapse;

    :slotted(tr) {
      background-color: var(--background-color);
      :slotted(th){
        font-weight: var(--font-weight-bold);
      }
      :slotted(th), :slotted(td) {
        padding: calc(var(--gap) / 2) var(--gap);
        text-align: left;
        border-bottom: 1px solid var(--border-color);
        font-size: var(--font-size-small)
      }
    }

    :slotted(:not(thead) tr:hover) {
      background-color: var(--clr-bg-blue-small);
    }
  }

  &.a-table--fixed-header {
    table {
      :slotted(thead) {
        /*background-color: #aff;*/

        position: sticky;
        top: 0;
        z-index: 2;

        /*Хак. С таблицами нередко необычное приходится делать.*/
        /*Нормальными способами у таблицы бордюр ускролливается.*/
        :slotted(&::before) {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background-color: var(--border-color);
        }
      }
    }
  }
}
</style>

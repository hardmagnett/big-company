<script setup lang="ts">
</script>


<template>
  <div class="a-table mod--cool-scrollbar">
    <table>
      <slot></slot>
    </table>
  </div>
</template>

<!--Здесь стили глобальные. Не scoped. Почему?-->
<!--Потому-что нужно стилизовать контент, который передается в слот. Всякие tr и td-->
<!--В простом случае, когда tr и td передаются напрямую, спасал :slotted.-->
<!--Но если в слот передавать какой-то другой компонент, уже внутри которого будут tr и td, -->
<!--то тогда :slotted не работает и строки таблицы остаются нестилизованными-->
<!--Поэтому пусть здесь будет без scoped. К тому-же эти стили и так ограничены классом-родителем .a-table,-->
<!--Поэтому ничего плохого не случится-->
<style>
.a-table {
  overflow-y: auto;

  /*&::v-deep(a-table) {*/
  table {
    width: 100%;


    /*Нужна чтобы цветом перекрывать задний фон при фиксированной шапке.*/
    --background-color: var(--clr-bg-blue-big);

    --border-color: var(--clr-border-blue-lighter);


    background-color: var(--background-color);

    /*Чтобы убрать всякие отступы между ячейками*/
    border-spacing: 0;
    border-collapse: collapse;

    /*:slotted(tr) {*/
    tr {
      background-color: var(--background-color);
      /*:slotted(th){*/
      th {
        font-weight: var(--font-weight-bold);
      }
      /*:slotted(th), :slotted(td) {*/
      th, td {
        padding: calc(var(--gap) / 2) var(--gap);
        text-align: left;
        border-bottom: 1px solid var(--border-color);
        font-size: var(--font-size-small);

        /*border-collapse: collapse;*/

        /*display: inline-block;*/
      }
    }

    /*:slotted(:not(thead) tr:hover) {*/
    :not(thead) tr:hover {
      background-color: var(--clr-bg-blue-small);
    }
  }

  &.a-table--fixed-header {
    table {
      /*:slotted(thead) {*/
      thead {
        /*background-color: #aff;*/

        position: sticky;
        top: 0;
        z-index: 2;

        /*Хак. С таблицами нередко необычное приходится делать.*/
        /*Нормальными способами у таблицы бордюр ускролливается.*/
        /*:slotted(&::before) {*/
        &::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background-color: var(--border-color);
        }

        th {
          /*Те самые бордюры, которые ускролливаются.*/
          border-bottom: none;
        }
      }
    }
  }

  /*Подходит для случаев, когда например не влезающий однострочный текст в ячейке нужно оборвать троеточием.*/
  /*При этом ширины ячеек перестанут подстраиваться под длину контента!!*/
  /*&.a-table--fixed-layout {*/
  /*  table {*/
  /*    !*todo:: что-то нужно с этим сделать*! Решил! Удалить это нафиг!*/
  /*    !*table-layout: fixed;*!*/
  /*  }*/
  /*}*/
}
</style>
